import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
        labelFor="textfield"
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
      <TextField label="textfield" labelFor="textfield" id="textfield" />
    )
    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByLabelText(/textfield/i)).toHaveFocus()
    })
  })
})
