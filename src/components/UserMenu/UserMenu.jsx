import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/Box/Box';
import { logOut } from 'redux/auth/operations';
import toast from 'react-hot-toast';

import { WelcomeText, LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleSubmit = async () => {
    const { error, payload } = await dispatch(logOut());

    if (error) {
      toast.error(payload.message);
    }
  };

  return (
    <Box display="flex" alignItems="center" gridGap="5px">
      {/* <WelcomeText>Welcome, {user.name}</WelcomeText> */}

      <LogOutBtn type="button" onClick={handleSubmit}>
        Logout
      </LogOutBtn>
    </Box>
  );
};

export default UserMenu;
