import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from 'components/Box/Box';
import toast from 'react-hot-toast';

import { FormLabel, Input, Button } from './ForgotPassword.styled';
import { confirmEmail, changePassword } from 'redux/auth/operations';

const ForgotPassword = ({ onShow }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  const dispatch = useDispatch();

  const handleEmailSubmit = async e => {
    e.preventDefault();

    if (email.trim() === '') {
      toast.error('Type something to send!');
      return;
    }

    const { error, payload } = await dispatch(confirmEmail({ email }));

    if (error) {
      toast.error(payload.response.data.message);
    } else {
      setIsEmailConfirmed(true);
    }
  };

  const handlePasswordSubmit = async e => {
    e.preventDefault();

    if (password.trim() === '') {
      toast.error('Type something to send!');
      return;
    }

    const { error, payload } = await dispatch(
      changePassword({ email, password })
    );

    if (error) {
      toast.error(payload.response.data.message);
    } else {
      toast.success('Password was changed');
      onShow(false);
    }
  };

  return (
    <Box
      p={[5, null, '40px', 6]}
      display="flex"
      flexDirection="column"
      gridGap="5px"
    >
      {isEmailConfirmed ? (
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          gridGap={[4, null, '20px']}
          onSubmit={handlePasswordSubmit}
        >
          <FormLabel>Enter new password</FormLabel>
          <Input
            type="password"
            onChange={e => setPassword(e.currentTarget.value)}
            value={password}
            placeholder="Password"
            minlength="6"
          />
          <Button type="submit">Submit</Button>
        </Box>
      ) : (
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          gridGap={[4, null, '20px']}
          onSubmit={handleEmailSubmit}
        >
          <FormLabel>Type your email</FormLabel>
          <Input
            type="text"
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
            placeholder="Email"
            minlength="5"
          />
          <Button type="submit">Submit</Button>
        </Box>
      )}
    </Box>
  );
};

export default ForgotPassword;
