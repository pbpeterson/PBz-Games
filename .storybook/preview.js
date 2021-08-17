import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    values: [
      {
        name: 'Won Light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} removeBg>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
