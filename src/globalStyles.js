import styled, { createGlobalStyle } from 'styled-components';
import { sizePPP, sizePP, sizeP, sizeM, sizeG, sizeXG } from './constants/textSize';
import { Black } from './constants/colors';
import ptSansRegular from './fonts/PtSans/PTSans-Regular.ttf';
import playfairDisplayRegular from './fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf';
const GlobalStyles = createGlobalStyle`
  // Fonts
  @font-face {
    font-family: 'Playfair Display';
    src: local('PlayfairDisplay-Regular'), url(${playfairDisplayRegular}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pt Sans';
    src: local('PtSans-Regular'), url(${ptSansRegular}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
  // Default global styles
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Pt Sans';
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }
`;
// CONTAINER
export const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 15px;
  }
`;
// TEXTS STYLES
const textsSizes = (size) => {
  switch (size) {
    case 'PPP':
      return `${sizePPP};`;
    case 'PP':
      return `${sizePP};`;
    case 'P':
      return `${sizeP};`;
    case 'M':
      return `${sizeM};`;
    case 'G':
      return `${sizeG};`;
    case 'XG':
      return `${sizeXG};`;
    default:
      return `${sizeP};`;
  }
};

export const Title = styled.h2`
  color: ${({ color }) => (color ? color : Black)};
  font-weight: ${({ bold }) => (bold ? bold : 700)};
  font-size: ${({ size }) => textsSizes(size)};
  font-family: ${({ font }) => (font ? font : 'Playfair Display')};
  letter-spacing: 1.4px;
  font-style: normal;
  line-height: normal;
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : Black)};
  font-weight: ${({ bold }) => (bold ? bold : 400)};
  font-size: ${({ size }) => textsSizes(size)};
  font-family: ${({ font }) => (font ? font : 'Pt Sans')};
  font-style: normal;
  line-height: normal;
`;

export default GlobalStyles;
