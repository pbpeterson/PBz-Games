import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any-only': 'confirm password does not match with password' })
}

export function signUpValidate(values: signUpValidateProps) {
  const schema = Joi.object(fieldsValidations)

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

export type fieldErrors = {
  [key: string]: string
}

function getFieldsErrors(objErrors: Joi.ValidationResult) {
  const errors: fieldErrors = {}

  if (objErrors.error) {
    objErrors.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type signInValidateProps = {
  email: string
  password: string
}

type signUpValidateProps = {
  username: string
} & signInValidateProps

export function signInValidate(values: signInValidateProps) {
  const { email, password } = fieldsValidations

  const schema = Joi.object({ email, password })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

type forgotPasswordValidateParams = Pick<signInValidateProps, 'email'>

export function forgotValidate(values: forgotPasswordValidateParams) {
  const { email } = fieldsValidations

  const schema = Joi.object({ email })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

type resetValidateParams = {
  password: string
  confirm_password: string
}

export function resetValidate(values: resetValidateParams) {
  const { password, confirm_password } = fieldsValidations

  const schema = Joi.object({ password, confirm_password })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}
