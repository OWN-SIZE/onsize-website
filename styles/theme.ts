import { css, CSSProp } from 'styled-components';

const colors = {
  yellow: '#FBF26C',
  yellow01: '#FFFAAD',
  blue: '#212530',
  lightGrey: '#fafafa',
  gray000: '#FFFFFF',
  gray050: '#fafafa',
  gray100: '#f6f6f6',
  gray150: '#ebebeb',
  gray200: '#dcdcdc',
  gray250: '#c2c2c2',
  gray300: '#a7a7a7',
  gray350: '#8e8e8e',
  gray400: '#717171',
  gray550: '#444444',
  gray500: '#2f2f2f',
  gray600: '#222222',
  black: '#1E2025',
  card_hover: '#2F2F2F',
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700 | 800;
  size: number;
  lineHeight: number;
  letterSpacing?: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
      font-family: 'Noto Sans', sans-serif;
      font-weight: ${weight};
      font-size: ${size}rem;
      line-height: ${lineHeight}rem;
      ${letterSpacing && `letter-spacing: -0.0${letterSpacing}rem;`}
    `;
}

const fonts = {
  title1: FONT({ weight: 700, size: 4, lineHeight: 5.4 }),
  title2: FONT({ weight: 700, size: 3, lineHeight: 4.1 }),
  title3: FONT({ weight: 700, size: 2, lineHeight: 3.2 }),
  title4: FONT({ weight: 700, size: 2.6, lineHeight: 3.5 }),
  subtitle1: FONT({ weight: 500, size: 3, lineHeight: 5 }),
  title4Semibold: FONT({ weight: 600, size: 2, lineHeight: 2.7 }),
  body1: FONT({ weight: 400, size: 1.8, lineHeight: 3 }),
  body2: FONT({ weight: 400, size: 1.4, lineHeight: 1.9 }),
  body3: FONT({ weight: 500, size: 2.4, lineHeight: 3.3 }),
  body4: FONT({ weight: 500, size: 2.2, lineHeight: 3.0 }),
  body5: FONT({ weight: 700, size: 2.2, lineHeight: 3.0 }),
  body6: FONT({ weight: 500, size: 2.6, lineHeight: 3.5 }),
  caption: FONT({ weight: 400, size: 1.4, lineHeight: 3.2 }),
  caption1: FONT({ weight: 600, size: 1.8, lineHeight: 2.5 }),
  tooltip: FONT({ weight: 400, size: 1.2, lineHeight: 1.8, letterSpacing: 6 }),
  button1: FONT({ weight: 800, size: 4, lineHeight: 5.4 }),
  card1: FONT({ weight: 600, size: 1.6, lineHeight: 1.9 }),
  card2: FONT({ weight: 500, size: 1.4, lineHeight: 1.9 }),

} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
