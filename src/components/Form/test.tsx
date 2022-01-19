import { render } from '../../utils/test-utils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">Link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c0 a {
        color: #FF0005;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #FF0005;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c0 a:hover {
        color: #cc0004;
        border-bottom: 0.1rem solid #cc0004;
      }

      <body>
        <div>
          <div
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
