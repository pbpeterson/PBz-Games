import { build, fake } from '@jackfranklin/test-data-bot'

type User = {
  username: string
  email: string
  password: string
}

export const CreateUser = build<User>('User', {
  fields: {
    username: fake( f => f.internet.userName()),
    password: fake( f => f.internet.password()),
    email: ''
  },
  postBuild: user => ({
    ...user,
    email:`${user.username.toLocaleLowerCase()}_e2e@wongames.com`
  }
  )
})
