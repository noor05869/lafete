import React from "react";

function SignUp() {
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
                    {/* <!-- */}
                    {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                    <form>
                      {/* <!-- to error: add class "has-danger" --> */}
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

                        <input
                          type="password"
                          class="form-control form-control-sm"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="form-group mt-3">
                        <label className="" for="exampleInputPassword1">
                          Confirm Password
                        </label>

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
