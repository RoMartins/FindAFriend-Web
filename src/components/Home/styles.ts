import styled from 'styled-components';


export const Container = styled.div`
display: flex;
align-items: end;
justify-content: space-between;
margin: 170px 113px 0 113px;

.logo {
  position: absolute;
  left: 113px;
  top: 90px;
}

.page-details {
  font-weight: 800;
  font-size: 4.5rem;
  line-height: 4rem;


}
`;

export const Footer = styled.div`
margin: 70px 113px 0 113px;
display: flex;
align-items: center;
justify-content: space-between;

> div {
  font-weight: 600;
  font-size: 1.2rem;
}

.search-details {
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1rem;

  form {
    display: flex;
  align-items: center;
  gap: 1rem;

  }
  option {
    background: #E44449;
    border: 1px solid #FFFFFF;
  }

  .UF {
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    width: 60px;
    height: 60px;
    background: #E44449;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    padding: 6px;
  }

  .city {
    border: 1px solid rgb(147 21 25);;

    border-radius: 20px;
    width: 280px;
    height: 60px;
    background: rgb(147 21 25);;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    padding: 10px 100px ;
  }

  button {
    border: none;
   background: none;

  }

  img {
    width: 60px;
    height: 60px;
  }
}
`;
