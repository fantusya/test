import styled from 'styled-components';

import authImg from 'images/auth/auth.png';
import authImgWebp from 'images/auth/auth.webp';

import authImg2x from 'images/auth/auth@2x.png';
import authImgWebp2x from 'images/auth/auth@2x.webp';

// export const Diva = styled.div`
//   height: 100%;
//   width: 100%;
//   max-width: 943px;
//   background-image: url(${authImg});
//   background-image: -webkit-image-set(url(${authImgWebp}) 1x);

//   @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${authImg2x});
//     background-image: url(${authImgWebp2x});
//   }

//   background-repeat: no-repeat;
//   background-position: left top;
//   background-size: contain;
// `;

// export const AuthSection = styled.section`
//   display: flex;
//   justify-content: flex-end;

//   height: 100%;
// `;

// export const FormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;

//   padding: 255px 100px 0px;
//   height: 100%;
//   /* width: 550px; */

//   background-color: ${p => p.theme.colors.mainBg};
//   @media (min-width: ${p => p.theme.breakpoints[1]}) {
//     /* width: 350px; */
//     padding: 0px 50px;
//   }

//   @media (min-width: ${p => p.theme.breakpoints[2]}) {
//     /* width: 550px; */
//     padding: 0px 100px;
//   }
// `;

// export const AuthTitle = styled.h1`
//   margin-bottom: 20px;
//   font-family: ${p => p.theme.fonts.header};
//   font-size: ${p => p.theme.fontSizes[6]};
//   line-height: ${p => p.theme.lineHeights.xxs};

//   color: ${p => p.theme.colors.header};
// `;

export const AuthSection = styled.section`
  height: 100%;
  padding-top: 60px;

  background-image: linear-gradient(
      ${p => p.theme.colors.heroBackdrop},
      ${p => p.theme.colors.heroBackdrop}
    ),
    url(${authImg});
  background-image: linear-gradient(
      ${p => p.theme.colors.heroBackdrop},
      ${p => p.theme.colors.heroBackdrop}
    ),
    -webkit-image-set(url(${authImgWebp}) 1x);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        ${p => p.theme.colors.heroBackdrop},
        ${p => p.theme.colors.heroBackdrop}
      ),
      url(${authImg2x});
    background-image: linear-gradient(
        ${p => p.theme.colors.heroBackdrop},
        ${p => p.theme.colors.heroBackdrop}
      ),
      url(${authImgWebp2x});
  }

  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 0px;

    display: flex;
    justify-content: flex-end;

    background-image: url(${authImg});
    background-image: -webkit-image-set(url(${authImgWebp}) 1x);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${authImg2x});
      background-image: url(${authImgWebp2x});
    }

    background-color: ${p => p.theme.colors.transparent};
  }
`;

export const FormContainer = styled.div`
  padding: 0 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 350px;
    height: 100%;

    padding: 0px 50px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    /* padding: 255px 100px 0px; */

    background-color: ${p => p.theme.colors.mainBg};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 550px;
    padding: 0px 100px;
  }
`;
