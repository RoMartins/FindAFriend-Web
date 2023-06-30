import { Container, ContentLeft, ContentRight, FormContent,
  SelectContent,
  PetContent,
  PetListContainer
} from './styles';
import logo from '../../assets/images/logoDogFace.svg';
import iconType from '../../assets/images/iconType.svg';
import dog from '../../assets/images/dog.png';

export function PestList() {
  return(
    <Container>
      <ContentLeft>
        <div>
          <img src={logo}/>
        </div>

        <FormContent>
          <span>Filtros</span>

          <SelectContent>
            <span>Idade</span>
            <select name="idade" id="">
              <option value="Filhote">Filhote</option>
            </select>
          </SelectContent>

          <SelectContent>
            <span>Nível de energia</span>
            <select name="energia" id="">
              <option value="energia"> 03 </option>
            </select>
          </SelectContent>

          <SelectContent>
            <span>Porte do animal</span>
            <select name="porte" id="">
              <option value="porte"> Pequenino </option>
            </select>
          </SelectContent>

          <SelectContent>
            <span>Nível de independência</span>
            <select name="independência" id="">
              <option value="independência"> Alto </option>
            </select>
          </SelectContent>
        </FormContent>
      </ContentLeft>

      <ContentRight>
        <section>
          <span>Encontre 324 amigos na sua cidade</span>
          <select name="porte" id="">
            <option value="porte"> Gatos e cachorros </option>
          </select>
        </section>

        <PetListContainer>

          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
            Nome
          </PetContent>

          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
            Nome
          </PetContent>

          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
          Nome
          </PetContent>


          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
          Nome
          </PetContent>


          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
          Nome
          </PetContent>


          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
          Nome
          </PetContent>

          <PetContent>
            <img src={dog} alt="" srcSet="" />
            <span>
              <img src={iconType} />
            </span>
          Nome
          </PetContent>
        </PetListContainer>

      </ContentRight>
    </Container>
  );
}
