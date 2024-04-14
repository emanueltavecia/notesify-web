import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Notesify</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#">Voltar para o login</a>
      </Form>

    </Container>
  )
}
