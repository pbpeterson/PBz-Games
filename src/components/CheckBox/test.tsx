import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<CheckBox />)

    expect(screen.queryByLabelText('CheckBox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <CheckBox label="checkbox Label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toBeCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })
  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="checkbox" onCheck={onCheck} isChecked />)

    expect(onCheck).not.toBeCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', async () => {
    renderWithTheme(<CheckBox label="checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(document.body).not.toHaveFocus()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
