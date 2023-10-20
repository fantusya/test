import * as Yup from 'yup';

const nameRegex = /^[a-zA-Z]+$/;
export const emailRegex =
  /^[^а-яА-ЯёЁ!#$%*/?^`+&{|}~]+@[a-z0-9.-]+\.[a-z]{2,}$/;

export const signUpValidationSchema = Yup.object({
  name: Yup.string()
    .matches(nameRegex, 'Only letters are allowed')
    .min(2, 'At least 2 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
  email: Yup.string()
    .matches(emailRegex, 'Invalid email')
    .min(5, 'At least 5 symbols')
    .required('Required field'),
  password: Yup.string()
    .min(6, 'At least 6 symbols')
    .required('Required field'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, 'Invalid email')
    .min(5, 'At least 5 symbols')
    .required('Required field'),
  password: Yup.string()
    .min(6, 'At least 6 symbols')
    .required('Required field'),
});
