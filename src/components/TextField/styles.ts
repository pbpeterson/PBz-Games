import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    display: flex;
    gap: 1rem;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black}
    cursor: pointer;
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
  ${IconDiv} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: () => css`
    ${InputWrapper} {
      border: 1px solid #ff6347;
    }
    ${IconDiv}, ${Label} {
      color: #ff6347;
    }
  `
}

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled' | 'error'>>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.error()}
  `}
`

export const IconDiv = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'left' ? 0 : 1};
  `}

  & > svg {
    width: 100%;
  }
`

export const Error = styled.p`
  color: red;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
