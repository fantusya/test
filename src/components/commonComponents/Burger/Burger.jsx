import { Icon, Button } from './Burger.styled';

const Burger = ({ setOpen, open }) => {
  return (
    <Button onClick={() => setOpen(!open)}>
      <Icon />
    </Button>
  );
};

export default Burger;
