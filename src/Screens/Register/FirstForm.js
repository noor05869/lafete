import React from "react";

function FirstForm() {
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
                      <form>
                        {/* <!-- to error: add class "has-danger" --> */}
                        <div className="row">
                          <div className=" mb-3 col-12 col-md-12">
                            <div class="form-group ">
                              <label
                                className="d-flex justify-content-start"
                                for="exampleInputEmail1"
                              >
                                Name
                              </label>
                              <input
                                type="email"
                                class="form-control form-control-sm"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className=" mb-3 col-12 col-md-12">
                            <div class="form-group">
                              <label
                                className="d-flex justify-content-start"
                                for="exampleInputEmail1"
                              >
                                Contact Number
                              </label>
                              <input
                                type="email"
                                class="form-control form-control-sm"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
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
                                location
                              </label>
                              <input
                                type="email"
                                class="form-control form-control-sm"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className=" mb-3 col-12 col-md-12">
                            <div class="form-group">
                              <label
                                className="d-flex justify-content-start"
                                for="exampleInputEmail1"
                              >
                                min & max Sitting Capicity
                              </label>
                              <input
                                type="email"
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
                      </form>
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
