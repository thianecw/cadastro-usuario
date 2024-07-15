import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;

@media (max-width: 490px) {
    padding: 15px;
    min-height: 100vh;
    min-width: 50vh;
}

`
export const Title = styled.h2`
color: white;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600px;
margin-top: 20px;

@media (max-width: 490px) {
    font-size: 30px;
}
`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 30px;

@media (max-width: 920px) {
    grid-template-columns: 1fr;
}
`

export const CardUsers = styled.div`
background-color: #252d48;
border-radius: 30px;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 400px;
min-width: 300px;



h3 {
    color: #eee;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 3px;
    text-transform: capitalize;
}

p {
    color: #eee;
    font-size: 15px;
    font-weight: 300;
    padding: 2px;
    min-width: 235px;
   }

   @media (max-width: 490px) {
    min-width: 400px;
}
`

export const AvatarUser = styled.img`
width: 80px;

@media (max-width: 900px) {
    width: 80px;
}

@media (max-width: 520px) {
    width: 70px;
}
`

export const TrashIcon = styled.img`
cursor: pointer;
padding-right: 20px;

@media (max-width: 900px) {
    padding-right: 0px;
}


&:hover {
    opacity: 0.8;
    transition: 0.3, ease-in-out;
}
    &:active {
    opacity: 0.3;
    transition: 0.3, ease-in-out;
        }
`

