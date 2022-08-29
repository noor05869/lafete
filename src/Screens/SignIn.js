import React, { useState } from "react";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import NProgress from "nprogress";
import Auth from "../middleWare/Auth/Auth";
import { loginSchema } from "../utils/validaion";
import FieldError from "../Components/fiels-Error";
function SignIn() {
  const login = useApi(api.Signin);
  let navigate = useNavigate();
  const [initialvalues, setInitialvalues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (values) => {
    console.log("values", values);
    try {
      NProgress.start();
      const { data } = await login.request(values);
      localStorage.setItem("token", data.response.data.AccessToken);
      localStorage.setItem("IdToken", data.response.data.IdToken);

      localStorage.setItem("login", JSON.stringify(data));
      Auth.login();
      navigate("./home");
      console.log("--------------> response", data);
      NProgress.done();
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
                      initialValues={initialvalues}
                      onSubmit={handleSubmit}
                      validationSchema={loginSchema}
                    >
                      {/* <!-- */}
                      {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                      <Form>
                        {/* <!-- to error: add class "has-danger" --> */}
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <Field
                            type="email"
                            name="email"
                            class="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <FieldError field="email" />
                        </div>
                        <div class="form-group mt-3">
                          <label className="" for="exampleInputPassword1">
                            Password
                          </label>
                          <a
                            href="#"
                            className="d-flex justif-content-end forgot-password "
                          >
                            Forgot password?
                          </a>
                          <Field
                            type="password"
                            name="password"
                            class="form-control form-control-sm"
                            id="exampleInputPassword1"
                          />
                          <FieldError field="password" />
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

export default SignIn;
