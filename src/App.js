import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Schema from "./Schema";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const App = () => {

  const [data, setData] = useState(false)

  const onSubmit = (values, actions) => {
    setData(values)
  }

 
  return (
    <div className="App">
    <Container>
       <Row>
         <Col>
            <Formik

            validationSchema={Schema}
            onSubmit={onSubmit}
            initialValues={{
              name:'',
              surname:'',
              email:'',
            }}
            >
              {(props) => (
                <Form>
                  <div>
                    <label className="mt-5">Name:</label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                    ></Field>
                    <ErrorMessage name="name"></ErrorMessage>
                  </div>
                  <div>
                    <label>Surname:</label>
                    <Field
                      type="text"
                      name="surname"     
                      className="form-control"       
                    ></Field>
                    <ErrorMessage name="surname"></ErrorMessage>
                  </div>
                  <div>
                    <label>Email:</label>
                    <Field
                      type="text"
                      name="email"
                      className="form-control mb-5"
                    ></Field>
                    <ErrorMessage name="email"></ErrorMessage>
                  </div>
                  <button type="submit" className="btn btn-success" disabled={!props.isValid}>Send</button>
                </Form>
              )}
            </Formik>
         </Col>
       </Row>
    </Container>
    </div>
  );
};

export default App;
