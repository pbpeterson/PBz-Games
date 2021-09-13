import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from 'styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render label', () => {
    renderWithTheme(<TextField label="TextField" />)

    expect(screen.getByText(/textfield/i)).toBeInTheDocument()
  })

  it('should render withou label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByText(/TextFiel/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="digite aqui" />)

    expect(screen.getByPlaceholderText(/digite aqui/i)).toBeInTheDocument()
  })

  it('should render with change value', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        label="textfield"
        name="textfield"
        onInput={onInput}
        id="textfield"
      />
    )
    const input = screen.getByRole('textbox')
    const value = 'this is my new text'

    userEvent.type(input, value)

    await waitFor(() => {
      expect(input).toHaveValue(value)
      expect(onInput).toHaveBeenCalledTimes(value.length)
    })
    expect(onInput).toHaveBeenCalledWith(value)
  })
  it('should be acessible', async () => {
    renderWithTheme(
      <TextField label="textfield" name="textfield" id="textfield" />
    )
    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByLabelText(/textfield/i)).toHaveFocus()
    })
  })
  it('should render with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('renders with icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })

  it('does not change value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
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
    expect(onInput).not.toBeCalled()
  })

  it('render with error', () => {
    renderWithTheme(
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
