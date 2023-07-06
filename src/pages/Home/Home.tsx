import axios from 'axios';
import logo from '../../assets/images/logo.svg';
import dogs from '../../assets/images/dogs.svg';
import search from '../../assets/images/search.svg';
import { Container, Footer } from './styles';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface CidadesPorEstado {
  [estado: string]: string[];
}

export function Home() {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelected, setCidadeSelected] = useState('');
  const [cidades, setCidades] = useState([]);

  const cidadesPorEstado: CidadesPorEstado = {
    SP: ['São Paulo', 'Campinas', 'Santos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Contagem'],
  };

  const handleSelectEstado = (estado:string) => {
    setEstadoSelecionado(estado);
    setCidades(cidadesPorEstado[estado]);
  };

  const navigate = useNavigate();


  const handleSubmit = async (queryCity: string) => {

    navigate(`/sua-rota?query=${queryCity}`);


  };

  return (
    <>


      <Container>
        <img className='logo' src={logo} alt="Logo"/>

        <div className='page-details'>
          <p>Leve</p>
          <p>a felicidade</p>
          <p>para o seu lar</p>
        </div>

        <img src={dogs} alt="dogs"/>
      </Container>

      <Footer>
        <div>
          <p>Encontre o animal de estimação ideal</p>
          <p>para seu estilo de vida!</p>
        </div>

        <div className='search-details'>
          <p>Busque um amigo:</p>

          <select className='UF' value={estadoSelecionado} onChange={() => handleSelectEstado(event.target.value)}>
            <option value="RJ">RJ</option>
            <option value="SP">SP</option>
          </select>
          <select className='city' onChange={() => setCidadeSelected(event.target.value)}>
            {cidades.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>

          <button type="submit" onClick={() => handleSubmit(cidadeSelected)}>
            <img src={search} alt="search" />
          </button>

        </div>
      </Footer>

    </>
  );
}
