import React, { useState, useContext } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { login } from "../http/userAPI";
import { registration } from "./../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "./../index";
import { useNavigate, Navigate, Redirect, Route } from "react-router-dom";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();
  const [loginPass, setLoginPass] = useState({
    login: "",
    password: "",
    remember: false,
  });

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(loginPass.login, loginPass.password);
      } else {
        data = await registration(loginPass);
      }
      console.log(loginPass);
      user.setUser(data);
      user.setIsAuth(true);
      navigate("/requests");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      {isLogin ? (
        <Container className="mh-100 vh-100">
          <Row>
            <Col
              xs
              lg="6"
              className="d-flex justify-content-center align-items-center vh-100"
            >
              <Card className="d-flex justify-content-center align-items-center m-5 p-5 w-100">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: 300 }}
                  >
                    <Form.Control
                      type="email"
                      placeholder="почта"
                      className="w-100"
                      onChange={(e) =>
                        setLoginPass({ ...loginPass, login: e.target.value })
                      }
                      value={loginPass.login}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="пароль"
                      onChange={(e) =>
                        setLoginPass({ ...loginPass, password: e.target.value })
                      }
                      value={loginPass.password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Запомнить меня"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          remember: e.target.checked,
                        })
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    className="me-2"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={click}
                  >
                    Войти
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      setLogin(false);
                      setLoginPass({
                        login: "",
                        password: "",
                        remember: false,
                      });
                    }}
                  >
                    Регистрация
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="mh-100 vh-100">
          <Row>
            <Col
              xs
              lg="6"
              className="d-flex justify-content-center align-items-center vh-100"
            >
              <Card className="d-flex justify-content-center align-items-center m-5 p-5 w-100">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: 300 }}
                  >
                    <Form.Control
                      type="email"
                      placeholder="почта"
                      className="w-100"
                      onChange={(e) =>
                        setLoginPass({ ...loginPass, login: e.target.value })
                      }
                      value={loginPass.login}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="пароль"
                      onChange={(e) =>
                        setLoginPass({ ...loginPass, password: e.target.value })
                      }
                      value={loginPass.password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="last_name">
                    <Form.Control
                      type="text"
                      placeholder="Фамилия"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          last_name: e.target.value,
                        })
                      }
                      value={loginPass.last_name || ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="first_name">
                    <Form.Control
                      type="text"
                      placeholder="Имя"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          first_name: e.target.value,
                        })
                      }
                      value={loginPass.first_name || ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="middle_name">
                    <Form.Control
                      type="text"
                      placeholder="Отчество"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          middle_name: e.target.value,
                        })
                      }
                      value={loginPass.middle_name || ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Control
                      type="text"
                      placeholder="Телефон"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          phone: e.target.value,
                        })
                      }
                      value={loginPass.phone || ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="place_of_work">
                    <Form.Control
                      type="text"
                      placeholder="Место работы"
                      onChange={(e) =>
                        setLoginPass({
                          ...loginPass,
                          place_of_work: e.target.value,
                        })
                      }
                      value={loginPass.place_of_work || ""}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    className="me-2"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={click}
                  >
                    Зарегистрироваться
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      setLogin(true);
                      setLoginPass({
                        login: "",
                        password: "",
                        remember: false,
                      });
                    }}
                  >
                    Войти
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
});

export default Auth;
