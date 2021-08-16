import * as S from './styles'

export type CheckBoxProps = {
  label?: string
  labelFor?: string
}

const CheckBox = ({ label = '', labelFor = '' }: CheckBoxProps) => (
  <S.Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </S.Wrapper>
)

export default CheckBox
