import axios from "axios";
const api = axios.create({
  baseURL: "https://of0ii0wrl1.execute-api.us-east-1.amazonaws.com/stage",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
const idconfig = {
  headers: {
    Authorization: localStorage.getItem("IdToken"),
  },
};
export function Signup(data) {
  console.log("persom=nla info-==========", data);
  return api.post("/auth/signup", { ...data });
}
export function Signin(data) {
  console.log("signin-==========", data);
  return api.post("/auth/login", { ...data });
}

export function CompleteProfile(data) {
  console.log("signin-==========", data);
  return api.post("/service_provider/profile", { ...data }, config);
}

export function AddService(data) {
  console.log("signin-==========", data);
  return api.post("/services", { ...data }, idconfig);
}

export function getservicesData(data) {
  console.log("signin-==========", data);
  return api.get(`/services?service=${data}`, { ...data }, idconfig);
}
export function getSingleServices(id) {
  console.log("------<>id", id.id);
  return api.get(`/services/${id.id}`);
}

// export function postOtp(data) {
//   console.log("final--------", data);

//   return api.post("v1/verify", { ...data });
// }
// export function postContact(data) {
//   console.log("final--------", data);

//   return api.post("v1/contact", { ...data });
// }
// export function postTraderdata(data) {
//   return api.post("v1/trader/submit", { ...data });
// }
