import * as yup from "yup";

export const validateFields = yup.object().shape({
  password: yup.string().required("Ingrese su contraseña"),
  identifier: yup
    .string()
    .email("El formato del correo electrónico es incorrecto")
    .required("Ingrese un correo electrónico"),
});

export const initialValues = {
  identifier: "",
  password: "",
};
