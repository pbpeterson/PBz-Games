import 'match-media-mock'

import { fireEvent, screen, render } from '../../utils/test-utils'

import Gallery from '.'

import mockItens from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mockItens.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockItens[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItens[1].src)
  })
  it('should handle open modal', () => {
    render(<Gallery items={mockItens.slice(0, 2)} />)

    const modalElement = screen.getByLabelText('modal')

    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    expect(modalElement.getAttribute('aria-hidden')).toBe('false')
    expect(modalElement).toHaveStyle({ opacity: 1 })
  })
  it('should handle close modal when overlay or button clicked', () => {
    render(<Gallery items={mockItens.slice(0, 2)} />)

    const modalElement = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )
    expect(modalElement.getAttribute('aria-hidden')).toBe('false')
    expect(modalElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = render(<Gallery items={mockItens.slice(0, 2)} />)

    const modalElement = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )
    expect(modalElement.getAttribute('aria-hidden')).toBe('false')
    expect(modalElement).toHaveStyle({ opacity: 1 })

    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0 })
  })
  it('should open modal with selected image', async () => {
    render(<Gallery items={mockItens.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItens[1].src)

    const img = await screen.findByRole('button', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
