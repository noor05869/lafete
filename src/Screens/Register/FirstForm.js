import React, { useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import UploadFile from "../../Components/UploaadFile";
import { CloseSquareFilled } from "@ant-design/icons";
import { servicesValidations } from "../../utils/validaion";
import FieldError from "../../Components/fiels-Error";
function FirstForm({
  handleStep,
  handleSubmit,
  initialValues,
  successMessage,
  handleImages,
}) {
  return (
    <div>
      <div>
        <div className="container mt-5 sign-up">
          <div className="d-flex justify-content-center align-items-center">
            <div className=" bg-white p-3">
              <div class="global-container shadow">
                <div style={{ Width: "540px" }} class="card login-fo rm">
                  <div class="card-body">
                    <h3 class="card-title text-center font-weight-bold">
                      {" "}
                      Add Services{" "}
                    </h3>
                    <div class="card-text">
                      {/* <!-- */}
                      {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={servicesValidations}
                      >
                        {({ values }) => (
                          <Form>
                            {/* <!-- to error: add class "has-danger" --> */}
                            <div className="row">
                              <div className=" mb-3 col-12 col-md-6">
                                <div class="form-group ">
                                  <label
                                    className="d-flex justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    Service
                                  </label>
                                  <Field
                                    class="form-select form-control"
                                    as="select"
                                    name="service"
                                    // onChange={(e) => handleServices(e)}
                                  >
                                    <option selected>
                                      Open this select menu
                                    </option>
                                    <option value="hall">Hall</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Farm House">
                                      Farm House
                                    </option>
                                    <option value="Event Organizer">
                                      Event Organizer
                                    </option>
                                    <option value="Morquee">Morquee</option>
                                  </Field>
                                  <FieldError name="service" />
                                </div>
                              </div>
                              <div className=" mb-3 col-12 col-md-6">
                                <div class="form-group">
                                  <label
                                    className="d-flex justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    Name
                                  </label>
                                  <Field
                                    name="name"
                                    type="text"
                                    class="form-control form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                  />
                                  <FieldError name="name" />
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
                                    Address
                                  </label>
                                  <Field
                                    name="location"
                                    type="text"
                                    class="form-control form-control"
                                  />
                                  <FieldError name="location" />
                                </div>
                              </div>
                              <div className=" mb-3 col-12 col-md-6">
                                <div class="form-group">
                                  <label
                                    className="d-flex justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    City
                                  </label>
                                  <Field
                                    class="form-select form-control"
                                    as="select"
                                    name="city"
                                  >
                                    <option selected>Select City</option>
                                    <option value="Lahore">lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Faislabad">Faislabad</option>
                                  </Field>
                                  <FieldError name="city" />
                                </div>
                              </div>
                              <div className=" mb-3 col-12 col-md-6">
                                <div class="form-group">
                                  <label
                                    className="d-flex justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    State
                                  </label>
                                  <Field
                                    class="form-select form-control"
                                    as="select"
                                    name="state"
                                  >
                                    <option selected>Select State</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="KPK">
                                      Gilgit-Baltistan.
                                    </option>
                                    <option value="Gilgit-Baltistan">
                                      Multan
                                    </option>
                                    <option value="Balochistan">
                                      Balochistan
                                    </option>
                                  </Field>
                                  <FieldError name="state" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className=" mb-3 col-12 col-md-12">
                                <div className="col-12">
                                  <label
                                    className="d-flex mb-2 justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    Upload Service Images
                                  </label>

                                  <UploadFile handleImages={handleImages} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              {values.service === "Catering" ? (
                                ""
                              ) : (
                                <>
                                  {" "}
                                  <div className=" mb-3 col-12 col-md-6">
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
                                        class="form-control form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                      />
                                      <FieldError name="max_seating" />
                                    </div>
                                  </div>
                                  <div className=" mb-3 col-12 col-md-6">
                                    <div class="form-group">
                                      <label
                                        className="d-flex justify-content-start"
                                        for="exampleInputEmail1"
                                      >
                                        Evening Slot
                                      </label>
                                      <Field
                                        class="form-select form-control"
                                        as="select"
                                        name="slot"
                                      >
                                        <option selected>Select City</option>

                                        <option value="1PM-5PM">
                                          Evening slot
                                        </option>
                                        <option value="6PM-10PM">
                                          Afternoon slot
                                        </option>
                                      </Field>
                                      <FieldError name="slot" />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="row">
                              <div className=" mb-3 col-12 col-md-6">
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
                                    class="form-control form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                  />
                                  <FieldError name="per_head" />
                                </div>
                              </div>
                              <div className=" mb-3 col-12 col-md-6">
                                <div class="form-group">
                                  <label
                                    className="d-flex justify-content-start"
                                    for="exampleInputEmail1"
                                  >
                                    About Service
                                  </label>
                                  <Field
                                    name="about_service"
                                    type="textarea"
                                    class="form-control form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                  />
                                  <FieldError name="about_service" />
                                </div>
                              </div>
                            </div>
                            {/* cateringServices */}
                            <FieldArray name="services">
                              {({ insert, remove, push }) => (
                                <div>
                                  {values.services.length > 0 &&
                                    values.services.map((friend, index) => (
                                      <div className="row">
                                        <div className="d-flex justify-content-between">
                                          <span></span>
                                          <strong>Add Service</strong>
                                          {values.services.length > 1 ? (
                                            <span>
                                              <CloseSquareFilled
                                                onClick={() => remove(index)}
                                                className=" cusor-pointer"
                                              />
                                            </span>
                                          ) : (
                                            <span></span>
                                          )}
                                        </div>
                                        <div className=" mb-3 col-12 col-md-6">
                                          <div class="form-group ">
                                            <label
                                              className="d-flex justify-content-start"
                                              for="exampleInputEmail1"
                                            >
                                              Service
                                            </label>
                                            <Field
                                              class="form-select form-control"
                                              as="select"
                                              name={`services.${index}.service`}
                                              placeHolder="select"
                                            >
                                              <option value="hall">
                                                Select Service
                                              </option>

                                              <option value="hall">Hall</option>
                                              <option value="Catering">
                                                Live BBQ
                                              </option>
                                              <option value="Farm House">
                                                Pan Service
                                              </option>
                                              <option value="Event Organizer">
                                                Gol Gappe
                                              </option>
                                            </Field>
                                          </div>
                                        </div>
                                        <div className=" mb-3 col-12 col-md-6">
                                          <div class="form-group">
                                            <label
                                              className="d-flex justify-content-start"
                                              for="exampleInputEmail1"
                                            >
                                              About Service
                                            </label>
                                            <Field
                                              name={`services.${index}.about_service`}
                                              type="textarea"
                                              class="form-control form-control"
                                              id="exampleInputEmail1"
                                              aria-describedby="emailHelp"
                                            />
                                          </div>
                                        </div>
                                        <div className=" row">
                                          <div className="col-12">
                                            <label
                                              className="d-flex mb-2 justify-content-start"
                                              for="exampleInputEmail1"
                                            >
                                              Upload Service Images
                                            </label>

                                            <UploadFile />
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  <button
                                    type="button"
                                    className=" btn btn-primary "
                                    onClick={() =>
                                      push({
                                        service: "",
                                        about_service: "",
                                        images: [
                                          "https://media.istockphoto.com/photos/banquet-hall-picture-id498049757?k=20&m=498049757&s=612x612&w=0&h=acRRtBw_RQU-7u_d1WLJWzmc3o0EzgQzCx8AoUNZMAw=",
                                          "https://media.istockphoto.com/photos/typical-wooden-small-farm-house-in-victorian-style-in-williamstown-picture-id879361282?k=20&m=879361282&s=612x612&w=0&h=T3eMHJR4Ybz9bL4PPP4MX7u6Scg1sNpuSoQDOUCR6Cs=",
                                        ],
                                      })
                                    }
                                  >
                                    Add Service
                                  </button>
                                </div>
                              )}
                            </FieldArray>
                            {successMessage && (
                              <div
                                class=" mb-1 alert alert-success"
                                role="alert"
                              >
                                {successMessage}
                              </div>
                            )}
                            <button
                              type="submit"
                              class="btn btn-primary btn-block w-100"
                            >
                              Submit
                            </button>
                          </Form>
                        )}
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

export default FirstForm;
