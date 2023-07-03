import { Container, GlobalStyle, LeftContainer, RightContainer } from './styles';
import logo from '../../assets/images/logo.svg';
import dogs from '../../assets/images/dogs.svg';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const FormRegisterSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato e-mail é obrigatório'),
  password: z.string().min(6,'A senha precisa ter no mínimo 6 caracteres'),
  cep: z.string().nonempty('O CEP é obrigatório'),
  adress: z.string().nonempty('O endereço é obrigatório'),
  whatsapp: z.string().nonempty('O whatsapp é obrigatório'),
  password_confirm: z.string()
}).refine((fields) => fields.password === fields.password_confirm, {
  path: ['password_confirm'],
  message: 'As senhas precisam ser iguais'
});

type RegisterFormData = z.infer<typeof FormRegisterSchema>


export function RegisterForm() {

  function handleRegisterOrg(data: any) {
    console.log(data);
  }
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormData>({
    resolver: zodResolver(FormRegisterSchema)
  });
  return (
    <>
      <GlobalStyle />

      <Container>
        <LeftContainer>
          <div>
            <img src={logo} width={160} height={40}/>
            <img src={dogs} width={384} height={195} />
          </div>

        </LeftContainer>

        <RightContainer>
          <span>Cadastre sua organização</span>
          <form onSubmit={handleSubmit(handleRegisterOrg)}>
            <div>
              <label htmlFor="">Nome do responsável</label>
              <input
                type="name"
                {...register('name')}
              />
              {errors.name && <span>{errors.name.message}</span>}

            </div>

            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                {...register('email')}
              />
              {errors.email && <span>{errors.email.message}</span>}

            </div>

            <div>
              <label htmlFor="">CEP</label>
              <input
                type="cep"
                {...register('cep')}
              />
              {errors.cep && <span>{errors.cep.message}</span>}

            </div>

            <div>
              <label htmlFor="">Endereço</label>
              <input
                type="cep"
                {...register('adress')}
              />
              {errors.adress && <span>{errors.adress.message}</span>}

            </div>

            <div>
              <label htmlFor="">Whatsapp</label>
              <input
                type="cep"
                {...register('whatsapp')}
              />
              {errors.whatsapp && <span>{errors.whatsapp.message}</span>}

            </div>

            <div>
              <label htmlFor="">Senha</label>
              <input
                type="password"
                {...register('password')}
              />
              {errors.password && <span>{errors.password.message}</span>}

            </div>


            <div>
              <label htmlFor="">Confirmar Senha</label>
              <input
                type="password"
                {...register('password_confirm')}
              />

              {errors.password_confirm && <span>{errors.password_confirm.message}</span>}

            </div>

            <button type='submit'>Cadastrar</button>
          </form>
          <a>Já possui conta?</a>
        </RightContainer>
      </Container>
    </>
  );
}
