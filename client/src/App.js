import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "./index";
import { useState } from "react";
import { useEffect } from "react";
import { check } from "./http/userAPI";
import { Spinner, Button, Row, Container } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
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
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
