// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'any_jwt', user: { email: 'any_email' } }
useSession.mockImplementation(() => [session])
