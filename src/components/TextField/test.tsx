import { screen, render, waitFor } from '../../utils/test-utils'

import userEvent from '@testing-library/user-event'
import { Email } from 'styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should render label', () => {
    render(<TextField label="TextField" />)

    expect(screen.getByText(/textfield/i)).toBeInTheDocument()
  })

  it('should render withou label', () => {
    render(<TextField />)

    expect(screen.queryByText(/TextFiel/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="digite aqui" />)

    expect(screen.getByPlaceholderText(/digite aqui/i)).toBeInTheDocument()
  })

  it('should render with change value', async () => {
    const onInputChange = jest.fn()

    render(
      <TextField
        label="textfield"
        name="textfield"
        onInputChange={onInputChange}
        id="textfield"
      />
    )
    const input = screen.getByRole('textbox')
    const value = 'this is my new text'

    userEvent.type(input, value)

    await waitFor(() => {
      expect(input).toHaveValue(value)
      expect(onInputChange).toHaveBeenCalledTimes(value.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(value)
  })
  it('should be acessible', async () => {
    render(<TextField label="textfield" name="textfield" id="textfield" />)
    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByLabelText(/textfield/i)).toHaveFocus()
    })
  })
  it('should render with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('renders with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })

  it('does not change value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        id="TextField"
        disabled
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'that is my text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toBeCalled()
  })

  it('render with error', () => {
    render(
      <TextField
        label="TextField"
        name="TextField"
        id="TextField"
        error="ops something went wrong"
      />
    )
    expect(screen.getByText(/ops something went wrong/i)).toBeInTheDocument()
  })
})
