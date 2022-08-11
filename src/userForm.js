import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const [cond, setCond] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={
          cond
            ? { email: "", password: "" }
            : { name: "", email: "", password: "" }
        }
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          cond
            ? axios.post(
                `http://localhost:5000/api/users/login`,

                values
              )
            : axios.post(
                `http://localhost:5000/api/users/register`,

                values
              );
          setSubmitting(false);
          navigate("/dashboard");
        }}
      >
        {({ isSubmitting }) => (
          <div className="d-flex flex-column justify-content-center  align-items-center ">
            {cond ? (
              <>
                <Form
                  className="d-flex flex-column justify-content-center  align-items-center border rounded mt-5"
                  style={{ width: "300px", height: "300px" }}
                >
                  <h4 className="text-center mt-3" style={{ color: "white" }}>
                    Login
                  </h4>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="mb-1"
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="my-3"
                  />
                  <ErrorMessage name="password" component="div" />

                  <Button
                    type="submit"
                    variant="secondary"
                    className="mt-3"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
                <a href="#" onClick={() => setCond(false)}>
                  Register Here ?
                </a>
              </>
            ) : (
              <>
                {" "}
                <Form
                  className="d-flex flex-column justify-content-center  align-items-center border rounded mt-5"
                  style={{ width: "300px", height: "300px" }}
                >
                  <h4 className="text-center mt-3" style={{ color: "white" }}>
                    Register{" "}
                  </h4>
                  <Field
                    type="name"
                    name="name"
                    placeholder="name"
                    className="mb-1"
                  />
                  <ErrorMessage name="name" component="div" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="mb-1"
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="my-3"
                  />
                  <ErrorMessage name="password" component="div" />

                  <Button
                    type="submit"
                    variant="secondary"
                    className="mt-3"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              </>
            )}
          </div>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
