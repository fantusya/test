import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.heroBackdrop};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 380px;

  border: ${p => p.theme.borders.white} ${p => p.theme.colors.header};
  border-radius: ${p => p.theme.radii.main};

  /* max-height: 600px;
  max-width: 900px;
  width: 100%; 
  /* width: 100px;
  height: 100px; */
  background-color: white;

  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 420px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 600px;
  }
`;
