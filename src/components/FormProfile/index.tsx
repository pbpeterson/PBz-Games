import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom size="small" color="black">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="Email"
        type="email"
        initialValue={email}
        disabled
      />

      <S.ButtonsContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Paswword
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonsContainer>
    </S.Form>
  </>
)

export default FormProfile
