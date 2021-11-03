import { signIn } from 'next-auth/client'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'

import * as S from './styles'
import { FormLink, FormWrapper, FormLoading } from 'components/Form'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const FormSignIn = () => {
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
    console.error('email ou senha inválida')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
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
