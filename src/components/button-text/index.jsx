import { Container } from './styles'

export function ButtonText({ title, isActive = false, ...props }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...props}>
      {title}
    </Container>
  )
}
