import { signIn } from 'next-auth/client'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { Lock, ErrorOutline } from 'styled-icons/material-outlined'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { fieldErrors } from 'utils/validations'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<fieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    password: '',
    confirmPassword: ''
  })
  const routes = useRouter()

  const { push, query } = routes

  const handleInput = (field: string, v: string) => {
    setValues((s) => ({ ...s, [field]: v }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    // jogar o erro
    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span> Reset Password </span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
