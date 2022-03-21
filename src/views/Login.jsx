import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "../component/TextField";
import loginSchema from "../utils/yup/loginValidation";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div className="col-md-20">
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="Username" name="username" type="email" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-success mt-3 m-2" type="submit">
              Login
            </button>
            <button className="btn btn-dark mt-3 m-2">
              <Link
                to="/registration"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
