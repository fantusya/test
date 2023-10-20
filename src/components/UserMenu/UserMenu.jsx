import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { logOut } from 'redux/auth/operations';
import toast from 'react-hot-toast';

import { LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const { error, payload } = await dispatch(logOut());

    if (error) {
      toast.error(payload.message);
    }
  };

  return (
    <Box display="flex" alignItems="center" gridGap="5px">
      <LogOutBtn type="button" onClick={handleSubmit}>
        Logout
      </LogOutBtn>
    </Box>
  );
};

export default UserMenu;
