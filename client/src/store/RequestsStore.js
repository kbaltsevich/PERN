import { makeAutoObservable } from "mobx";

export default class RequestsStore {
  constructor() {
    this._requestsUser = [];
    makeAutoObservable(this);
  }

  setRequestsUser(requestsUser) {
    this._requestsUser = requestsUser;
  }

  getRequestsUser() {
    return this._requestsUser;
  }
}
