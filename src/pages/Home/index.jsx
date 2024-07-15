import { useRef } from 'react' /*importando o react Hooks*/
import api from '../../services/api' /*importando o que foi criado no services > API/AXIOS*/
import { useNavigate } from 'react-router-dom' //navegar entre as telas/rotas//

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  InputLabel,
  EmailWrapper,
  Input,
} from './style'

import DefaultButton from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {
  /*importando o useRef e associando a variável criada, que depois será "linkada lá no input*/
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    /*variável pra guardar todas as infos do await*/

    await api.post('./user', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

  }

  return (
    <Container>

      <TopBackground />

      <Form> <Title> Users Registration</Title>

        <ContainerInputs>
          <div>
            <InputLabel> Name<span>*</span> </InputLabel>
            <Input type="text" ref={inputName} />
          </div>

          <div>
            <InputLabel> Age <span>*</span> </InputLabel>
            <Input type="number" ref={inputAge} />
          </div>
        </ContainerInputs>

        <EmailWrapper>
          <InputLabel>Email <span>*</span> </InputLabel>
          <Input type="email" ref={inputEmail} />
        </EmailWrapper>

        <DefaultButton type="button" onClick={registerNewUser} theme="primary">
          Register user
        </DefaultButton>
      </Form>

      <DefaultButton type="button" onClick={() => navigate('/users-list')}> Users list
      </DefaultButton>

    </Container>

  )
}

export default Home