import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/note-item'
import { Section } from '../../components/section'
import { Textarea } from '../../components/textarea'
import { Container, Form } from './styles'
import { Button } from '../../components/button'

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://emanueltavecia.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
