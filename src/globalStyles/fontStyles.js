import { createGlobalStyle } from 'styled-components';

import LatoWoff from 'fonts/lato/lato-v24-latin-regular.woff';
import LatoWoff2 from 'fonts/lato/lato-v24-latin-regular.woff2';

import LatoBoldWoff from 'fonts/lato/lato-v24-latin-700.woff';
import LatoBoldWoff2 from 'fonts/lato/lato-v24-latin-700.woff2';

import MerriweatherWoff from 'fonts/merriweather/merriweather-v30-latin-regular.woff';
import MerriweatherWoff2 from 'fonts/merriweather/merriweather-v30-latin-regular.woff2';

import MerriweatherBoldWoff from 'fonts/merriweather/merriweather-v30-latin-700.woff';
import MerriweatherBoldWoff2 from 'fonts/merriweather/merriweather-v30-latin-700.woff2';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  src: url(${LatoWoff2}) format('woff2'),
       url(${LatoWoff}) format('woff');
}

@font-face {
  font-family: 'Lato Bold';
  src: url(${LatoBoldWoff2}) format('woff2'),
       url(${LatoBoldWoff}) format('woff');
}

@font-face {
  font-family: 'Merriweather';
  src: url(${MerriweatherWoff2}) format('woff2'),
       url(${MerriweatherWoff}) format('woff');
}

@font-face {
  font-family: 'Merriweather Bold';
  src: url(${MerriweatherBoldWoff2}) format('woff2'),
       url(${MerriweatherBoldWoff}) format('woff');
}
`;

export default FontStyles;
