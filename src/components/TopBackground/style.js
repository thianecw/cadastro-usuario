import styled from 'styled-components'

export const Background = styled.div`
 background: linear-gradient(to right, #fe7e5d, #7f3841);
 height: 30vh;
 width: 90vw;
 max-width: 800px;
 display: flex;
 justify-content: center;
 border-radius: 30px;

img {
    max-width: 100%;
     max-height: 100%;
 }

 @media (max-width: 490px) {
    height: 25vh;
 width: 90vw;
}

`

