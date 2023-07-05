import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalButton = styled.div`
position: absolute;
top: 0;
left: 0;
width: 6rem;
height: 100vh;
background: #F15156;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 32px 0 ;

button {
  width: 3rem;
  height: 3rem;
  border-radius: 0.9375rem;
  background: #F4D35E;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

}
`;

export const DetailPetContainer = styled.div`
  max-width: 35rem;

  @media (max-width: 576px) {
  max-width: 20rem;

  }

  span:nth-child(2) {
    color: #0D3B66;
font-size: 1.125rem;
font-family: Nunito;
font-style: normal;
font-weight: 600;
line-height: 1.75rem;
  }



  div:nth-child(5) {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    color: #0D3B66;
    font-size: 1rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;


  }

  h1 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #0D3B66;
font-size: 3.375rem;
font-family: Nunito;
font-style: normal;
font-weight: 800;
line-height: 90%;
letter-spacing: -0.0675rem;
}

  h2 {
    color: #0D3B66;
font-size: 1.875rem;
font-family: Nunito;
font-style: normal;
font-weight: 700;
line-height: 90%;
  }

button {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 34.75rem;
  height: 4rem;
  border-radius: 1.25rem;
  background: var(--color-green, #3CDC8C);
  outline: none;
  border: none;
  margin-bottom: 4rem;


  span:nth-child(2) {
    color:  #FFF;
    font-size: 1.125rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    line-height: 1.625rem;
  }

}
`;
export const ProfilePet = styled.div`
margin-top: 2rem;
margin-bottom: 2.5rem;
display: flex;
justify-content: space-between;
`;

export const WhatsAppContainer = styled.div`
width: 13.5625rem;
height: 3.375rem;
border-radius: 0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
background-color: #f0f0f0;
margin: -30px 0 0 80px ;
`;
export const Content = styled.div`
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
border: 4px solid rgba(13, 59, 102, 0.00);
background: var(--shapes-01, #FFF);

`;


export const Separador = styled.div`
margin-top: 2.5rem;
margin-bottom:3rem;
height: 0.0625rem;
background: #D3E2E5;
`;

export const RequirementsContainer = styled.div`
  margin-top: 2rem;

div {
  display: flex;
  margin-bottom: 0.6rem;
  align-items: center;
  padding-left: 2rem;
  gap: 0.5rem;
  color: #F15156;
  font-size: 1.125rem;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #F15156;
  background: linear-gradient(134deg, rgba(247, 95, 96, 0.10) 0%, rgba(241, 81, 86, 0.00) 100%);

}


`;
