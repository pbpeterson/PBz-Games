import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        email: '',
        password: ''
      }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })
    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })
  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })
    it('should return short username error', () => {
      const values = { username: 'hi', email: '', password: '' }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })
    it('should return invalid email error', () => {
      const values = {
        username: 'willian',
        email: 'invalid-email',
        password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'willian',
        email: 'will@won.com',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        email: ''
      }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })
    it('should return invalid email error', () => {
      const values = { email: 'invalid-email' }
      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })
  describe('resetValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        password: '123',
        confirm_password: ''
      }

      expect(resetValidate(values)).toMatchObject({
        confirm_password: '"confirm_password" is not allowed to be empty'
      })
    })

    it('should validate confirm password when different', () => {
      const values = { password: '123', confirm_password: '321' }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
