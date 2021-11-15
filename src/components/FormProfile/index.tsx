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
      <TextField
        name="passowrd"
        placeholder="Type your password"
        label="Password"
        type="password"
      />
      <TextField
        name="new_password"
        placeholder="New password"
        label="New Password"
        type="password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
