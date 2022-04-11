import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (candidate, role = "USER") => {
  const { data } = await $host.post("api/user/registration", {
    email: candidate.login,
    password: candidate.password,
    first_name: candidate.first_name,
    last_name: candidate.last_name,
    middle_name: candidate.middle_name,
    place_of_work: candidate.place_of_work,
    phone: candidate.phone,
    role,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (email, password) => {
  const response = await $host.post("api/user/login", {
    email,
    password,
  });
  console.log(response);
  localStorage.setItem("token", response.data.token);
  return jwt_decode(response.data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const getUserDB = async () => {
  const { data } = await $authHost.get("api/user/");
  return data;
};
