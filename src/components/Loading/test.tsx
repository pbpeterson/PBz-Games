import { screen, render } from '../../utils/test-utils'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    render(<Loading />)

    expect(screen.getByLabelText('loading')).toHaveStyle({
      border: '10px solid #045757'
    })
  })
})
