import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:  #FFF;
    color: black;
  }
`;

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`;

export const LeftContainer = styled.div`

>div {
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
export const RightContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 30rem;

span:nth-child(1) {
  margin-top: 6rem;
  align-self: center;
  color: #0D3B66;
text-align: center;
font-size: 3.375rem;
font-family: Nunito;
font-style: normal;
font-weight: 700;
line-height: 90%;
letter-spacing: -0.0675rem;
}

span {
  color: red;
  text-align: end;
}

form {
  margin-top: 3.5rem;
  div {
    display: flex;
    flex-direction: column;

    label {
      color: #0D3B66;
      font-size: 1rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 0.2rem;
      margin-top: 1rem;
    }

    input {
      border-radius: 0.625rem;
      border: 1px solid var(--back-lines-in-white, #D3E2E5);
      background: #F5F8FA;
      height: 3rem;
      color: #0D3B66;
      font-size: 1.125rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      line-height: 1.75rem;
      outline: none;
      padding: 0 10px;

    }
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
    margin-top: 2rem;

    :hover {
     opacity: 90%;
     transition: opacity 0.3s;
    }
      }

}

a {
  color: #0D3B66;
text-align: center;
font-size: 1.25rem;
font-family: Nunito;
font-style: normal;
font-weight: 800;
line-height: 2.125rem;
text-decoration-line: underline;
margin-top: 2rem;

}
`;
