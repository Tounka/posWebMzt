import * as yup from "yup";

export const validateNumeroEmpleado = yup
  .string()
  .required("El número de empleado es requerido")
  .matches(/^\d+$/, "El número de empleado solo puede contener números")
  .min(5, "El número de empleado debe tener al menos 5 caracteres");

export const validateContraseña = yup
  .string()
  .required("La contraseña es requerida")
  .min(6, "La contraseña debe tener al menos 6 caracteres");

export const validateCorreo = yup
  .string()
  .required("El correo es requerido")
  .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "El correo no es válido");

export const validateNombre = yup
  .string()
  .required("El nombre es requerido")
  .matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/, "El nombre solo puede contener letras y espacios")
  .min(2, "El nombre debe tener al menos 2 caracteres")
  .max(50, "El nombre no puede tener más de 50 caracteres");

export const validateApellido = yup
  .string()
  .required("El apellido es requerido")
  .matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/, "El apellido solo puede contener letras y espacios")
  .min(2, "El apellido debe tener al menos 2 caracteres")
  .max(50, "El apellido no puede tener más de 50 caracteres");

  export const validateRol = yup
  .string()
  .required("El Rol es requerido")

