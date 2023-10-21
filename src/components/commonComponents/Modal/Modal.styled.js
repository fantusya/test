import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBackdrop = styled(motion.div)`
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

export const ModalContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 380px;

  border: ${p => p.theme.borders.white} ${p => p.theme.colors.header};
  border-radius: ${p => p.theme.radii.main};

  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 420px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 600px;
  }

  ${props =>
    props.$burger &&
    css`
      top: 0;
      left: 0;
      transform: none;

      padding: 20px;

      width: 100vw;
      max-width: none;

      border-radius: 0 0 ${p => p.theme.radii.main} ${p => p.theme.radii.main};

      background-color: ${p => p.theme.colors.header};

      box-shadow: 1px 1px 5px 0px;
    `}
`;
