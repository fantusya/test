import styled from 'styled-components';

import heroImg from 'images/hero/hero.png';
import heroImgWebp from 'images/hero/hero.webp';

import heroImg2x from 'images/hero/hero@2x.png';
import heroImgWebp2x from 'images/hero/hero@2x.webp';

export const HeroSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 118px;
  padding-bottom: 118px;
  text-align: center;

  background-image: linear-gradient(
      ${p => p.theme.colors.heroBackdrop},
      ${p => p.theme.colors.heroBackdrop}
    ),
    url(${heroImg});

  background-image: linear-gradient(
      ${p => p.theme.colors.heroBackdrop},
      ${p => p.theme.colors.heroBackdrop}
    ),
    -webkit-image-set(url(${heroImgWebp}) 1x);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        ${p => p.theme.colors.heroBackdrop},
        ${p => p.theme.colors.heroBackdrop}
      ),
      url(${heroImg2x});

    background-image: linear-gradient(
        ${p => p.theme.colors.heroBackdrop},
        ${p => p.theme.colors.heroBackdrop}
      ),
      url(${heroImgWebp2x});
  }

  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 315px;
    padding-bottom: 377px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 auto 20px auto;
  text-align: center;
  max-width: 1085px;

  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[7]};
  line-height: ${p => p.theme.lineHeights.l};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[8]};
    line-height: ${p => p.theme.lineHeights.xs};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 10px;

    font-size: ${p => p.theme.fontSizes[10]};
  }
`;

export const HeroText = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 822px;

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.s};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const HeroLink = styled.a`
  display: inline-block;
  padding: 9px ${p => p.theme.space[4]}px;
  text-align: center;

  font-size: ${p => p.theme.fontSizes[1]};
  font-family: ${p => p.theme.fonts.header};
  line-height: ${p => p.theme.lineHeights.xl};
  text-decoration: none;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.transparent};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.hero};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 9px 23px;
    font-size: ${p => p.theme.fontSizes[2]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;
