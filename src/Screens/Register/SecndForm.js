import React, { useState } from "react";
import Cross from "../../asset/img/Group 208.png";
import UploadFile from "../../Components/UploaadFile";
import { Formik, Field, Form } from "formik";

function SecndForm({ handleSubmit, initialValues }) {
  const [file, setfile] = useState();

  const handleChange = (e) => {
    setfile(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <div className="container mt-5 sign-up">
          <div className="d-flex justify-content-center align-items-center">
            <div className=" bg-white p-3">
              <div class="global-container">
                <div class="card login-fo rm">
                  <div class="card-body">
                    <h3 class="card-title text-center">Register </h3>
                    <div class="card-text">
                      {/* <!-- */}
                      {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                      >
                        <Form>
                          {/* <!-- to error: add class "has-danger" --> */}
                          <div className="row">
                            <div className=" mb-3 col-12 col-md-12">
                              <div className="col-12">
                                {/* {file ? (
                                <>
                                  <div className="d-table">
                                    <div className="Circularprogress yellow">
                                      <span className="Circularprogress-left">
                                        <span className="Circularprogress-bar"></span>
                                      </span>
                                      <span className="Circularprogress-right">
                                        <span className="Circularprogress-bar"></span>
                                      </span>
                                      <div className="Circularprogress-value t-pink fs12 fw-400">
                                        PDF
                                      </div>
                                    </div>
                                    <div className="position-absolute ml-55">
                                      <div>
                                        <p className="m-0 t-grey-600 fs16 fw-500 dotted">
                                          {file.name}
                                        </p>
                                        <div>
                                          <p className="m-0 t-grey-400 fw-400 fs14 ">
                                            {Math.round(file.size / 1024)} kb /
                                            {Math.round(file.size / 1024)} kb
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="remove_File">
                                    <img
                                      src={Cross}
                                      alt="cross"
                                      className="mx-auto d-block"
                                      onClick={handleChange}
                                    />
                                  </div>
                                </>
                              ) : (
                                <input
                                  type="file"
                                  name="CNICFrontFile"
                                  onChange={handleChange}
                                  className="custom-file-input"
                                  accept=".jpg, .jpeg, .png"
                                  required
                                />
                              )} */}
                                <UploadFile />
                              </div>
                            </div>
                            <div className=" mb-3 col-12 col-md-12">
                              <div class="form-group">
                                <label
                                  className="d-flex justify-content-start"
                                  for="exampleInputEmail1"
                                >
                                  Max Seating Capcity
                                </label>
                                <Field
                                  name="max_seating"
                                  type="text"
                                  class="form-control form-control-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className=" mb-3 col-12 col-md-12">
                              <div class="form-group">
                                <label
                                  className="d-flex justify-content-start"
                                  for="exampleInputEmail1"
                                >
                                  Evening Slot
                                </label>
                                <Field
                                  class="form-control form-control-sm"
                                  as="select"
                                  name="slot"
                                >
                                  <option value="1PM-5PM">Evening slot</option>
                                  <option value="Catering">
                                    Afternoon slot
                                  </option>

                                  <option value="Morquee">Morquee</option>
                                </Field>
                              </div>
                            </div>
                            <div className=" mb-3 col-12 col-md-12">
                              <div class="form-group">
                                <label
                                  className="d-flex justify-content-start"
                                  for="exampleInputEmail1"
                                >
                                  Per-Head
                                </label>
                                <Field
                                  name="per_head"
                                  type="text"
                                  class="form-control form-control-sm"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-primary btn-block w-100"
                          >
                            Next
                          </button>
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
    </div>
  );
}

export default SecndForm;
