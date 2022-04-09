import { makeAutoObservable } from "mobx";

export default class RequestsStore {
  constructor() {
    this._requestsUser = [
      {
        id: 1,
        datedata: "2011-12-12",
        status: "на рассмотрении",
        waiting_data: "на рассмотрении",
        secretary: "Кузнецова Олеся",
        email_secretary: "secretaryemail@test.com",
        userId: 1,
        createdAt: "2022-04-09T15:00:48.871Z",
        updatedAt: "2022-04-09T15:00:48.871Z",
      },
      {
        id: 2,
        datedata: "2011-12-13",
        status: "на рассмотрении",
        waiting_data: "на рассмотрении",
        secretary: "Кузнецова Олеся",
        email_secretary: "secretaryemail@test.com",
        userId: 1,
        createdAt: "2022-04-09T15:10:48.625Z",
        updatedAt: "2022-04-09T15:10:48.625Z",
      },
      {
        id: 3,
        datedata: "2011-12-15",
        status: "на рассмотрении",
        waiting_data: "на рассмотрении",
        secretary: "Кузнецова Олеся",
        email_secretary: "secretaryemail@test.com",
        userId: 1,
        createdAt: "2022-04-09T15:10:52.469Z",
        updatedAt: "2022-04-09T15:10:52.469Z",
      },
    ];
    makeAutoObservable(this);
  }

  setRequestsUser(requestsUser) {
    this._requestsUser = requestsUser;
  }

  getRequestsUser() {
    return this._requestsUser;
  }
}
