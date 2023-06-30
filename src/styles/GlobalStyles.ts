import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

import NunitoRegularTtf from '../assets/fonts/Nunito-Regular.ttf';
import NunitoSemiboldTtf from '../assets/fonts/Nunito-SemiBold.ttf';
import NunitoExtraboldTtf from '../assets/fonts/Nunito-ExtraBold.ttf';
import NunitoBoldTtf from '../assets/fonts/Nunito-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Nunito';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${NunitoRegularTtf}') format('truetype');
  }


  @font-face {
    font-family: 'Nunito';
    font-weight: 700;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${NunitoBoldTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${NunitoSemiboldTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Nunito';
    font-weight: 800;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${NunitoExtraboldTtf}') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
  }

  body {
    background: #E44449;
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
