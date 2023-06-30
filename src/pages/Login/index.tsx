import { Container, GlobalStyle,FormContent } from './styles';
import logo from '../../assets/images/logo.svg';
import dogs from '../../assets/images/dogs.svg';


export function Login() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className='imagem'>
          <img src={logo} width={160} height={40}/>
          <img src={dogs} width={384} height={195} />
        </div>
        <FormContent>
          <span>Boas-vindas!</span>

          <form action="">
            <div>
              <label htmlFor="">Email</label>
              <input  type="email" />
            </div>

            <div>
              <label htmlFor="">Senha</label>
              <input type="senha" />
            </div>

            <button>Login</button>
            <span className='register'>Cadastrar minha organização</span>
          </form>
        </FormContent>

      </Container>
    </>
  );
}
