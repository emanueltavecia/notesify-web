import { FiPlus, FiSearch } from 'react-icons/fi'

import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { useEffect, useState } from 'react'
import { ButtonText } from '../../components/button-text'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Note } from '../../components/note'
import { Section } from '../../components/section'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

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

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])

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
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas"></Section>

        {notes.map((note) => (
          <Note key={note.id} data={note} onClick={() => handleDetails(note.id)} />
        ))}
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
