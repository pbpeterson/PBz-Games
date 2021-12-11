import 'session.mock'
import { screen, render } from '../../utils/test-utils'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>heading</h1>
      </Base>
    )

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
