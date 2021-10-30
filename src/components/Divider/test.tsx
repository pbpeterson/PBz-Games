import { render } from '../../utils/test-utils'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render the correctly', () => {
    const { container } = render(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  margin: 4.8rem auto 3.2rem;
  height: 0.1rem;
  background: rgba(181,181,181,0.3);
  border: 0;
}

@media (min-width:768px) {
  .c0 {
    margin: calc(4.8rem * 2.5) auto 4.0rem;
  }
}

<hr
  class="c0"
/>
`)
  })
})
