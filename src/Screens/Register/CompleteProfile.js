import NProgress from "nprogress";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import useApi from "../../Hooks/useApi";
import * as api from "../../api/api";
function CompleteProfile() {
  const completeProfile = useApi(api.CompleteProfile);
  const [initialvalues, setInitialValues] = useState({
    business_name: "",
    phone_no: "",
    landline_no: "",
  });

  const handleSubmit = async (values) => {
    try {
      NProgress.start();

      const { data } = await completeProfile.request(values);
      console.log(data);
      NProgress.done();
    } catch (error) {
      console.log(error);
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
                    >
                      {/* <!-- */}
                      {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                      <Form>
                        {/* <!-- to error: add class "has-danger" --> */}
                        <div class="form-group">
                          <label for="exampleInputEmail1">business name</label>
                          <Field
                            type="text"
                            name="business_name"
                            class="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputNo">Phone no</label>
                          <Field
                            type="text"
                            name="phone_no"
                            class="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label className="" for="exampleInputPassword1">
                            LandLine no
                          </label>

                          <Field
                            type="text"
                            name="landline_no"
                            class="form-control form-control-sm"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block w-100"
                        >
                          Submit
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

export default CompleteProfile;
