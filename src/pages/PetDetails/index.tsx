import { Container, Content, DetailPetContainer, ModalButton, Separador, RequirementsContainer, WhatsAppContainer ,ProfilePet} from './styles';
import image from '../../assets/images/alfredinho.png';
import logo2Dog from '../../assets/images/logo2Dog.svg';
import energy from '../../assets/images/energy.svg';
import environment from '../../assets/images/environment.svg';
import size from '../../assets/images/size.svg';
import whatsAppIcon from '../../assets/images/whatsappIcon.svg';
import requerimentIcon from '../../assets/images/attencionIcon.svg';


export function PetDetails() {
  return (
    <Container>
      <Content>
        <ModalButton>
          <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5507 44.9545C25.3561 48.4709 19.7348 48.5046 16.4979 45.0266C15.0521 43.4732 16.175 40.9848 18.3277 40.9719L26.6719 40.9219C28.8246 40.909 29.9776 43.3838 28.5507 44.9545Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.4097 40.6352C34.725 41.9442 32.3457 41.5117 30.9195 39.9318L26.3882 34.9122C24.562 32.8891 21.3564 32.8891 19.5302 34.9122L14.626 40.3448C13.2357 41.885 10.934 42.3418 9.24573 41.1256C3.64119 37.0882 0 30.5564 0 23.1855C0 10.9255 10.0736 0.986816 22.5 0.986816C34.9264 0.986816 45 10.9255 45 23.1855C45 30.265 41.641 36.5705 36.4097 40.6352ZM15.7073 25.6722L19.96 30.6373C21.3107 32.2143 23.6893 32.2143 25.04 30.6373L29.2927 25.6722C30.6579 24.0784 29.9539 21.5559 27.9781 20.9611C24.4001 19.8841 20.5999 19.8841 17.0219 20.9611C15.0461 21.5559 14.3421 24.0784 15.7073 25.6722ZM15.8333 15.1534C15.8333 16.9943 14.341 18.4867 12.5 18.4867C10.6591 18.4867 9.16667 16.9943 9.16667 15.1534C9.16667 13.3124 10.6591 11.8201 12.5 11.8201C14.341 11.8201 15.8333 13.3124 15.8333 15.1534ZM32.5 18.4867C34.341 18.4867 35.8333 16.9943 35.8333 15.1534C35.8333 13.3124 34.341 11.8201 32.5 11.8201C30.6591 11.8201 29.1667 13.3124 29.1667 15.1534C29.1667 16.9943 30.6591 18.4867 32.5 18.4867Z" fill="white"/>
          </svg>

          <button>
            <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow">
                <path id="Vector" d="M19 12L5.00003 12" stroke="#0D3B66" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_2" d="M12 19L5 12L12 4.99999" stroke="#0D3B66" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>

          </button>

        </ModalButton>
        <img src={image} alt="" />
        <DetailPetContainer>
          <h1>Alfredo</h1>
          <span>Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.</span>
          <ProfilePet>
            <img src={energy} alt="" srcSet="" />
            <img src={environment} alt="" srcSet="" />
            <img src={size} alt="" srcSet="" />
          </ProfilePet>

          <Separador />

          <div>
            <img src={logo2Dog} alt="" />
            <div>
              <h2>Seu Cãopanheiro</h2>
              <span>Rua do meio, 123 , Boa viagem, Recife - PE </span>
            </div>
          </div>
          <WhatsAppContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.778 16.2225 15.9058 16.1491 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29866 8.39101 7.308Z" fill="#0D3B66"/>
            </svg>
            <span>11 985549636</span>

          </WhatsAppContainer>

          <Separador />

          <div>
            <h2>Requisitos para adoção</h2>
            <RequirementsContainer>
              <div>
                <img src={requerimentIcon}/>
                Local grande para o animal correr e brincar
              </div>

              <div>
                <img src={requerimentIcon}/>
                Local grande para o animal correr e brincar
              </div>

              <div>
                <img src={requerimentIcon}/>
                Local grande para o animal correr e brincar
              </div>

              <div>
                <img src={requerimentIcon}/>
                Local grande para o animal correr e brincar
              </div>
            </RequirementsContainer>
          </div>
          <Separador />

          <button type="submit">
            <img src={whatsAppIcon} />
            <span>
              Entrar em contato
            </span>
          </button>
        </DetailPetContainer>
      </Content>
    </Container>
  );
}
