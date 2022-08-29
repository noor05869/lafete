import React, { useState } from "react";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";
import { Formik, Field, Form } from "formik";
import { SignupSchema } from "../utils/validaion";
import FieldError from "../Components/fiels-Error";

function SignUp() {
  const { error, request } = useApi(api.Signup);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleSubmit = async (values) => {
    console.log("values signup", values);
    try {
      const data = await request(values);
      console.log("--------------> response", data);
    } catch (error) {
      console.log("eroooorrr", error);
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className=" bg-white p-3">
            <div class="global-container">
              <div class="card login-form">
                <div class="card-body">
                  <h3 class="card-title text-center">Log in to Lafete</h3>
                  <div class="card-text">
                    <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={SignupSchema}
                    >
                      {/* <!-- */}
                      {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                      <Form>
                        {/* <!-- to error: add class "has-danger" --> */}
                        <div class="form-group mb-3">
                          <label for="exampleInputEmail1">Name</label>
                          <Field
                            name="name"
                            type="Text"
                            class="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <FieldError name="name" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <Field
                            name="email"
                            type="email"
                            class="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <FieldError name="email" />
                        </div>
                        <div class="form-group mt-3">
                          <label className="" for="exampleInputPassword1">
                            Password
                          </label>

                          <Field
                            name="password"
                            type="password"
                            class="form-control form-control-sm"
                            id="exampleInputPassword1"
                          />
                          <FieldError name="password" />
                        </div>
                        <div class="form-group mt-3">
                          <label className="" for="exampleInputPassword1">
                            Confirm Password
                          </label>

                          <Field
                            name="confirm_password"
                            type="password"
                            class="form-control form-control-sm"
                            id="exampleInputPassword1"
                          />
                          <FieldError name="confirm_password" />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block w-100"
                        >
                          Sign in
                        </button>

                        <div class="sign-up ">
                          Don't have an account? <a href="#">Create One</a>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
