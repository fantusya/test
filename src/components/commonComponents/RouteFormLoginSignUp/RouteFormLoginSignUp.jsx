import { Text, LinkToOtherPage } from './RouteFormLoginSignUp.styled';

const RouteFormLoginSignUp = ({ link, question, pageName }) => {
  return (
    <Text>
      <span>{question}</span>{' '}
      <LinkToOtherPage to={link}>{pageName}</LinkToOtherPage>
    </Text>
  );
};
export default RouteFormLoginSignUp;
