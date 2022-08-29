import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
export const SignupSchema = yup.object().shape({
  name: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirm_password: yup.string().min(8).required(),
});
export const CompleteProfile = yup.object().shape({
  name: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  Confirm_password: yup.string().min(8).required(),
});
