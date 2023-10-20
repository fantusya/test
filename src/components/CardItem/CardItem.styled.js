import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;

  overflow: hidden;

  border-radius: ${p => p.theme.radii.main};
`;

export const CardImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;

  width: 448px;
  height: 293px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 352px;
    height: 230px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 630px;
    height: 400px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 10px 14px 20px;

  width: 100%;
`;

export const CardTitle = styled.h3`
  margin-bottom: 5px;

  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.lineHeights.xl};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 5px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    column-gap: 60px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    row-gap: 10px;
  }
`;

export const CardLi = styled.li`
  min-width: 90px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    min-width: 160px;
  }
`;

export const CardItemText = styled.p`
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.xxs};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;
