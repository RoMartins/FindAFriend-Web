import { Container, GlobalStyle,FormContent } from './styles';
import logo from '../../assets/images/logo.svg';
import dogs from '../../assets/images/dogs.svg';
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginUserFormSchema = z.object({
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato e-mail é obrigatório'),
  password: z.string().min(6,'A senha precisa ter no mínimo 6 caracteres')
});

type LoginFormData = z.infer<typeof LoginUserFormSchema>

export function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>({
    resolver: zodResolver(LoginUserFormSchema)
  });

  console.log(errors);

  function handleLogin(data: any) {
    console.log(data);
  }

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

          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                {...register('email')}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="">Senha</label>
              <input
                type="senha"
                {...register('password')}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button type='submit'>Login</button>
            <span className='register'>Cadastrar minha organização</span>
          </form>
        </FormContent>

      </Container>
    </>
  );
}
