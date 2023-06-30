import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #ffffff;
    color: black;
  }
`;

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media (max-width: 700px) {
  display: flex;
  flex-direction: column-reverse
 }


 .imagem {

  @media (max-width: 576px) {
    width: 0rem;
  height: 0rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:  7rem 0 2.5rem 0;
  width: 30.5rem;
  height: 38.3125rem;
  border-radius: 1.25rem;
  background: #F15156;
  margin: 2.5rem auto;
 }


`;


export const FormContent  = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 6rem;

span:first-child {

  @media (max-width: 576px) {
    align-self: center;
  }
  margin-bottom: 5rem;
  color: #0D3B66;
font-size: 3.375rem;
font-family: Nunito;
font-style: normal;
font-weight: 700;
line-height: 90%;
letter-spacing: -0.0675rem;
}

.register {

color: #0D3B66;
text-align: center;
font-size: 1.25rem;
font-family: Nunito;
font-style: normal;
margin-top: 2.5rem;
font-weight: 800;
line-height: 2.125rem;
cursor: pointer;
:hover {
     opacity: 90%;
     transition: opacity 0.3s;
    }
}

div:first-child {
  margin-bottom: 1rem;
}

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #0D3B66;
  font-size: 1rem;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: normal;


  input {
        width: 30.5rem;
    height: 4rem;
    border-radius: 0.625rem;
    border: 1px solid var(--back-lines-in-white, #D3E2E5);
    background: #F5F8FA;
    color: #0D3B66;
    font-size: 1.125rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    outline: none;
  }
}

form {
  display: flex;
  flex-direction: column;
}

button {
        width: 30.5rem;
    height: 4.5rem;
    border: none;
    border-radius: 1.25rem;
    background: #0D3B66;
    color: #FFF;
    text-align: center;
    font-size: 1.25rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    line-height: 2.125rem;
    margin-top: 4rem;

    :hover {
     opacity: 90%;
     transition: opacity 0.3s;
    }
      }
`;
