import { Container } from './styles'

export function ButtonText({ title, ...props }) {
  return <Container type='button' {...props}>{title}</Container>
}
