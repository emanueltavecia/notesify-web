import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function NoteItem({ isNew, value, onClick, ...props }) {
  {
    return (
      <Container $isnew={isNew}>
        <input type="text" value={value} readOnly={!isNew} {...props} />

        <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
          {isNew ? <FiPlus /> : <FiX />}
        </button>
      </Container>
    )
  }
}
