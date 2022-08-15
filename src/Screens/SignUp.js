import React from "react";

function SignUp() {
  return (
    <div>
      <div className="container mt-5 sign-up">
        <div className="d-flex justify-content-center align-items-center">
          <div className=" bg-white p-3">
            <div class="global-container">
              <div class="card login-form">
                <div class="card-body">
                  <h3 class="card-title text-center">Signup Lafete</h3>
                  <div class="card-text">
                    {/* <!-- */}
                    {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                    <form>
                      {/* <!-- to error: add class "has-danger" --> */}
                      <div className="row">
                        <div className=" mb-3 col-12 col-md-6">
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
                        <div className=" mb-3 col-12 col-md-6">
                          <div class="form-group">
                            <label
                              className="d-flex justify-content-start"
                              for="exampleInputEmail1"
                            >
                              Email address
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
                        <div className=" mb-3 col-12 col-md-6">
                          <div class="form-group">
                            <label
                              className="d-flex justify-content-start"
                              for="exampleInputEmail1"
                            >
                              Phone Number
                            </label>
                            <input
                              type="email"
                              class="form-control form-control-sm"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <div className=" mb-3 col-12 col-md-6">
                          <div class="form-group">
                            <label
                              className="d-flex justify-content-start"
                              for="exampleInputEmail1"
                            >
                              Halls List
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
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control form-control-sm"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
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
                        <input
                          type="password"
                          class="form-control form-control-sm"
                          id="exampleInputPassword1"
                        />
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
                    </form>
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
