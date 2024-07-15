import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => //esse props vem lá do index do botão// 
        props.theme === 'primary' //extraindo somente o theme de props e se o tema for primário eu quero essas configurações://
            ? 'linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)'
            : 'transparent'}; //se não for, eu quero essas. Ou seja, só vai aplicar o efeito de cima nos botões que tiverem 'theme=primary'/
    
    border: ${props => //esse props vem lá do index do botão// 
        props.theme === 'primary'
            ? 'none'
            : '1px solid #fff'};
    
    color: white;
    font-size: 16px;   
    border-radius: 10px;
    padding: 8px 20px;
    text-align: center;
    width: fit-content;
    cursor: pointer;
    margin-top: 20px;

    @media (max-width: 490px) {
margin-top: ${props => props.theme === 'primary' ? '0px' : '-20px'}
}

    &:hover {
    opacity: ${props => props.theme === 'primary' ? '0.8' : '0.8'};
    animation: 0.8, ease-in-out;
    background: ${props => props.theme !== 'primary' && 'linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)'};
    border: ${props => props.theme !== 'primary' ? 'none' : 'none'}
  }
       
        &:active {
            opacity: 0.5
        }
`
