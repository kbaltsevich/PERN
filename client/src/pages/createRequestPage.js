import React, { useState } from "react";
import { Button, Modal, Form, Container, Row, Spinner } from "react-bootstrap";
import { createRequests } from "./../http/requestsAPI";

const CreateRequestPage = (prop) => {
  const startRequest = {
    purpose_of_the_council: "",
    birth_date: "",
    gender: "",
    tnm: "",
    disease_amnesia: "",
    date_diagnosis: "",
    current_treatment: "",
    info_comorbidities: "",
    intolerance: "",
    ecog: "",
    complaints_now: "",
  };

  const [show, setShow] = useState(prop.isVisible);
  const [newRequest, setNewRequest] = useState(startRequest);

  const handleClose = () => {
    setShow(false);
    prop.setVisible(false);
  };

  async function handlerCreateNewrequest(body) {
    prop.loading(true);
    const response = await createRequests(body);
    prop.loading(false);
    handleClose();
  }

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          setNewRequest(startRequest);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Создать заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onSelect={(e) =>
                setNewRequest({
                  ...newRequest,
                  purpose_of_the_council: e.target.value,
                })
              }
              onChange={(e) =>
                setNewRequest({
                  ...newRequest,
                  purpose_of_the_council: e.target.value,
                })
              }
            >
              <option>Цель проведения консилиума</option>
              <option value="Определение тактики лечения по результатам молекулярно-генетического профилирования ">
                Определение тактики лечения по результатам
                молекулярно-генетического профилирования
              </option>
              <option value="Определение необходимости и объема проведения молекулярно-генетического профилирования ">
                Определение необходимости и объема проведения
                молекулярно-генетического профилирования
              </option>
              <option value="Определение необходимости и объема проведения молекулярно-генетического профилирования ">
                Определение необходимости и объема проведения
                молекулярно-генетического профилирования
              </option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    birth_date: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Пол</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    gender: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Стадирование согласно TNM (если применимо)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    tnm: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Дата постановки диагноза</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    date_diagnosis: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Амнез заболевания</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    disease_amnesia: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Какое лечение получаете в настоящий момент
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    current_treatment: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Информация о сопутствующих заболеваниях</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    info_comorbidities: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Информация об индивидуальной токсичности, непереносимости
                какких-либо лекарственных препаратов
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    intolerance: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => {
                setNewRequest({
                  ...newRequest,
                  ecog: e.target.value,
                });
              }}
              onSelect={(e) => {
                setNewRequest({
                  ...newRequest,
                  ecog: e.target.value,
                });
              }}
            >
              <option>Актуальный ECOG статус</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Жалобы на текущий момент</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    complaints_now: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setNewRequest(startRequest);
            }}
          >
            Отмена
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handlerCreateNewrequest(newRequest);
            }}
          >
            Подать заявку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateRequestPage;
