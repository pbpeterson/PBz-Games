import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import Link from 'next/link'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const { items } = useCart()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        await setFreeGames(false)
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        if (data.freeGames) {
          await setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event?.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      saveOrder()

      router.push('/success')

      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })
    if (payload.error) {
      setError(`Payment Failed ${payload.error.message}`)
    } else {
      saveOrder(payload.paymentIntent)

      router.push('/success')
    }
    setLoading(false)
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" lineBottom size="small">
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy</S.FreeGames>
          ) : (
            <CardElement
              options={{ hidePostalCode: true }}
              onChange={handleChange}
            />
          )}
          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continue shopping
            </Button>
          </Link>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span> Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}
export default PaymentForm
