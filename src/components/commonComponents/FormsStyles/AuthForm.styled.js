import styled, { css } from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export const AuthTitle = styled.h1`
  margin-bottom: 20px;

  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[6]};
  line-height: ${p => p.theme.lineHeights.xxs};

  color: ${p => p.theme.colors.mainBg};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]};

    color: ${p => p.theme.colors.header};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 10px;
  ${props =>
    props.$signup &&
    css`
      margin-bottom: 30px;
    `}

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.span`
  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.inputBg};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    color: ${p => p.theme.colors.black};
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Field = styled(FormikField)`
  padding: 10px 14px;
  max-width: 350px;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.inputBg};
  border-radius: ${p => p.theme.radii.main};

  color: ${p => p.theme.colors.placeholder};
  background-color: ${p => p.theme.colors.inputBg};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 14px 20px 12px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.error};
`;

export const ForgotPass = styled.p`
  margin-bottom: 30px;
  text-align: end;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.mainBg};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.placeholder};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FormButton = styled.button`
  display: block;
  max-width: 350px;
  width: 100%;

  padding: 11px 0px;
  margin-bottom: 10px;

  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.bold};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.main};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.transparent};
    border-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;
