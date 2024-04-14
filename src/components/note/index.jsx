import { Tag } from '../../components/tag'
import { Container } from './styles'

export function Note({ data, ...props }) {
  return (
    <Container {...props}>
      <h2>{data.title}</h2>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
