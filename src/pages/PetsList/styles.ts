import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: row;
min-width: 1120px;

`;
export const ContentLeft = styled.div`
width: 24.5rem;


div:first-child {
  background-color: #F15156;
  height: 12rem;

  img {
    position: absolute;
    top: 70px;
    left: 56px;
  }
}

span {
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 2.125rem;
}

`;
export const ContentRight = styled.div`
  background-color: #FDECED;
  flex: 1;

  section:first-child {
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 4.5rem auto;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
    color: #0D3B66;
    font-size: 1.25rem;
    font-family: Nunito;
    line-height: 2.125rem;
    }

    select {
      width: 13.125rem;
      height: 3rem;
      border-radius: 15px;
      background: #FBE1E2;
      color: #0D3B66;
      font-size: 1rem;
      font-family: Nunito;
      line-height: 120%;

    }
  }
`;

export const FormContent = styled.div`
 padding: 35px 40px 0px 56px;
`;

export const SelectContent = styled.div`
display: flex;
flex-direction: column;

select {
    background: #F75F64;
    color: white;
    font-weight: 800;
    line-height: 120%;
    font-size: 1rem;
    border-radius: 15px;
    padding: 16px;
    border: none;
  }

  span {
    margin-top: 1rem;
    color:  #FDECED;
    font-size: 0.75rem;
    font-family: Nunito;
    font-weight: 500;
  }

`;

export const PetContent = styled.div`
display: flex;
flex-direction: column;
background: #FFF;
border-radius: 20px;
align-items: center;

width: 17.5rem;
height: 13.0625rem;
color: #0D3B66;
text-align: center;
font-size: 1.125rem;
font-family: Nunito;
font-weight: 700;

  :hover {
  background: #0D3B66;
  color: #FFF;
  transition: color 0.4s, background 0.4s;


}
img {
  width: 17.125rem;
  height: 8.4375rem;
  margin-top: 2px;
}

span {
  margin-top: -25px;
    img {
      width: 2.75rem;
      height: 2.75rem;
    }
}
`;

export const PetListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
`;
