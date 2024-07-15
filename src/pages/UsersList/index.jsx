import { useEffect, useState } from "react"; //react hook //
import api from "../../services/api" //importando a api pra pegar os usuários cadastrados no servidor//
import { useNavigate } from 'react-router-dom' //navegar entre as telas/rotas//

import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg"

import {
  Title,
  CardUsers,
  ContainerUsers,
  MainContainer,
  AvatarUser,
  TrashIcon
} from "./style";


function UsersList() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/user')

      setUsers(data)
    }

    getUsers()

      }, [])

async function deleteUser(id) {
  await api.delete(`/user/${id}`)

const updatedUsers = users.filter(user => user.id !== id) //compara os id deletados com os ids não deletados, e não mostra os id deletados no novo array//

setUsers(updatedUsers)
}


  return (
    <MainContainer>
      <TopBackground />
      <Title>Users List</Title>

      <ContainerUsers>
        {users.map((user) => (

          <CardUsers key={user.id}>
            {/* avatares aleatório para os usuários gerados por uma api  */}
            <AvatarUser src={`https://avatar.iran.liara.run/public?usearname=${user.id}`} />
            <div>
              <h3> {user.name} </h3>
              <p> Age: {user.age} </p>
              <p> E-mail: {user.email} </p>
            </div>
            <TrashIcon src={Trash} title="delete" alt="trash-icon" onClick={() => deleteUser(user.id)} />
          </CardUsers>

        ))}

      </ContainerUsers>
      <DefaultButton type="button" theme="primary" onClick={() => navigate('/')}> Back </DefaultButton>
    </MainContainer>
  );
}

export default UsersList
