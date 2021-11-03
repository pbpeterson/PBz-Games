import { signIn } from 'next-auth/client'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { Email, ErrorOutline, Lock } from 'styled-icons/material-outlined'

import * as S from './styles'
import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { fieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<fieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const { push } = useRouter()

  const handleInput = (field: string, v: string) => {
    setValues((s) => ({ ...s, [field]: v }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

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
      callbackUrl: '/'
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
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#s">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span> Sign in now</span>}
        </Button>
        <FormLink>
          Do not have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
