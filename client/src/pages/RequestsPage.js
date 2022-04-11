import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./../index";
import { getAllRequests } from "../http/requestsAPI";
import { Container, Row, Button, Spinner, Card } from "react-bootstrap";
import { getUserDB } from "../http/userAPI";
import CreateRequestPage from "./createRequestPage";
import { useNavigate } from "react-router-dom";

const RequestsPage = observer(() => {
  const { reqestsUser, user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [isCreate, setCreate] = useState(false);
  const navigate = useNavigate();

  async function getProperties() {
    const userFromDB = getUserDB();
    userFromDB.then((u) => setUserInfo(u));
    const data = getAllRequests(user.getUser().id);
    data
      .then((res) => reqestsUser.setRequestsUser(res))
      .finally(() => setLoading(false));
  }

  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    const userFromDB = getUserDB();
    userFromDB.then((u) => setUserInfo(u));
    console.log(userInfo);
    const data = getAllRequests(user.getUser().id);
    data
      .then((res) => reqestsUser.setRequestsUser(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container>
        <Row>
          <Button variant="primary" disabled className="center-block vh-100">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-2">
          <Button
            variant="primary"
            style={{ width: 200 }}
            onClick={() => setCreate(true)}
          >
            Создать заявку
          </Button>
          <div
            style={{ width: 400 }}
            className="d-flex justify-content-between align-items-center mt-2"
          >
            <span>{`${userInfo.first_name} ${userInfo.last_name}`}</span>
            <Button
              variant="outline-dark"
              style={{ width: 100 }}
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </div>
        </Row>
        <Row className="mt-4 mb-4">
          {reqestsUser.getRequestsUser().length === 0 ? (
            <span>Тут будут ваши заявки</span>
          ) : (
            <>
              <div className="d-flex mb-4 col-12">
                <span className="col-2"> </span>
                <span className="col-2">Дата подачи заявки</span>
                <span className="col-2">Статус заявки</span>
                <span className="col-2">Дата консилиума</span>
                <span className="col-2">Ответственный секретарь</span>
              </div>
              {reqestsUser.getRequestsUser().map((user_request) => {
                return (
                  <div
                    key={Date.now() + user_request.userId + user_request.id}
                    className="d-flex mb-4 col-12 p-3"
                    style={{ border: "1px solid black" }}
                  >
                    <span className="col-2">{user_request.userId}</span>
                    <span className="col-2">{user_request.datedata}</span>
                    <span className="col-2">{user_request.status}</span>
                    <span className="col-2">{user_request.waiting_data}</span>
                    <span className="col-2">{user_request.secretary}</span>
                  </div>
                );
              })}
            </>
          )}
        </Row>
      </Container>
      {isCreate && (
        <CreateRequestPage
          isVisible={isCreate}
          setVisible={(bool) => {
            setCreate(bool);
            getProperties();
          }}
          loading={(bool) => setLoading(bool)}
        />
      )}
    </>
  );
});

export default RequestsPage;
