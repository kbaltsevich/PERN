import { $authHost, $host } from "./index";

export const createRequests = async (newRequest) => {
  const { data } = await $authHost.post("api/requsts/", {
    ...newRequest,
    datedata: new Date(),
  });

  return data;
};
export const getAllRequests = async (userId) => {
  const { data } = await $authHost.get("api/requsts/", {
    body: {
      userId,
    },
  });
  return data;
};
