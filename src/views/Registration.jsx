import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import TextField from "../component/TextField";
import registrationSchema from "../utils/yup/registrationValidation";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={(values) => {
        axios
          .post("http://localhost:3000/posts", values)
          .then((response) => {
            console.log("resp1234", response);
          })
          .catch((error) => console.log("Error Msg 1111111", error));
        navigate("/dash");
        console.log(values);
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Name" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3 m-2" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 m-2" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Registration;
