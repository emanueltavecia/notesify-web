import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/note-item'
import { Section } from '../../components/section'
import { Textarea } from '../../components/textarea'
import { api } from '../../services/api'
import { Container, Form } from './styles'

export function NewNote() {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks((prev) => [...prev, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deletedLink) {
    setLinks((prev) => prev.filter((link) => link !== deletedLink))
  }

  function handleAddTag() {
    setTags((prev) => [...prev, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deletedTag) {
    setTags((prev) => prev.filter((tag) => tag !== deletedTag))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite um título para a nota')
    }
    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou no botão de adicionar. Clique para adicionar, ou deixe o campo vazio.'
      )
    }
    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou no botão de adicionar. Clique para adicionar, ou deixe o campo vazio.'
      )
    }
    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })

    alert('Nota criada com sucesso')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, i) => (
              <NoteItem
                key={i}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, i) => (
                <NoteItem
                  key={i}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
