class Auth {
  User = JSON.parse(localStorage.getItem("login"));
  token = localStorage.getItem("token");

  constructor() {
    this.authenticated = this.User && this.token ? true : false;
  }

  login = () => {
    this.authenticated = true;
  };

  logout = () => {
    this.authenticated = false;
    localStorage.clear();
  };

  isAuthenticated() {
    console.log("from Auth", this.authenticated);
    return this.authenticated;
  }
}

export default new Auth();
