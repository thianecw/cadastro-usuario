import styled from 'styled-components'

export const Container = styled.div`
background-color: #181f36;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
margin-bottom: -45px;

@media (max-width: 490px) {
margin: 10px;   
max-width: 490px;
}
`
export const Title = styled.h1`
color: white;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600px;

@media (max-width: 490px) {
    font-size: 30px;
}
`

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;

@media (max-width: 490px) {
display: flex;
flex-direction: column;
padding: 10px;
margin: 8px;
padding: 0;
}
`

export const Input = styled.input`
border-radius: 5px;
border: 1px solid #d2dae2;
background-color: white;
padding: 12px 21px;
outline: none;
width: 100%;
margin-top: 10px;

@media (max-width: 490px) {
min-width: 330px;
padding: 12px;
}
`

export const EmailWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 470px;

  @media (max-width: 490px) {
    padding: 10px;
    min-width: 300px;
    margin-top: -18px;
  }
`

export const InputLabel = styled.label`
color: white;
font-size: 12px;
font-weight: 500;

@media (max-width: 490px) {
    display: flex;
    margin-left: 2px;
  }

span {
color: #fe7e5d;
font-weight: bold;
}
`