import { FiPlus, FiSearch } from 'react-icons/fi'

import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { ButtonText } from '../../components/button-text'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Note } from '../../components/note'
import { Section } from '../../components/section'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notesify</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas"></Section>

        <Note
          data={{
            title: 'React',
            tags: [
              { id: 1, name: 'react' },
              { id: 2, name: 'node' },
            ],
          }}
        />
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
