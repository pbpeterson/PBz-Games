import FormResetPassword from 'components/FormResetPassword'
import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormResetPassword />
    </Auth>
  )
}
