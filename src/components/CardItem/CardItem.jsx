import {
  CardWrapper,
  CardImg,
  TextWrapper,
  CardTitle,
  CardsList,
  CardLi,
  CardItemText,
} from './CardItem.styled';

const CardItem = ({ deal }) => {
  return (
    <CardWrapper>
      <CardImg src={deal.img} alt={deal.title}></CardImg>
      <TextWrapper>
        <CardTitle>{deal.title}</CardTitle>
        <CardsList>
          <CardLi>
            <CardItemText>
              {deal.price} {deal.currency}
            </CardItemText>
          </CardLi>
          <CardLi>
            <CardItemText>Yield {deal.yield}%</CardItemText>
          </CardLi>
          <CardLi>
            <CardItemText>Sold {deal.sold}%</CardItemText>
          </CardLi>
          <CardLi>
            <CardItemText>
              Ticket - {deal.ticket} {deal.currency}
            </CardItemText>
          </CardLi>
          <CardLi>
            <CardItemText>Days left {deal.daysLeft}</CardItemText>
          </CardLi>
        </CardsList>
      </TextWrapper>
    </CardWrapper>
  );
};

export default CardItem;
