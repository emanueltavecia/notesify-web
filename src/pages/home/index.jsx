import { FiPlus, FiSearch } from 'react-icons/fi'

import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { useEffect, useState } from 'react'
import { ButtonText } from '../../components/button-text'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Note } from '../../components/note'
import { Section } from '../../components/section'
import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagsSelected(tagName) {
    if (tagName === 'all') {
      setTagsSelected([])
      return
    }
    const alreadySelected = tagsSelected.includes(tagName)
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prev) => [...prev, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>Notesify</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagsSelected('all')}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
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

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
