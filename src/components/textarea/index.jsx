import { Container } from './styles'

export function Textarea({ value, ...props }) {
  return <Container {...props}>{value}</Container>
}
