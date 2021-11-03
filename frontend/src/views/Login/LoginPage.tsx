import React from 'react';

import { Card, Typography } from '@mui/material';

import Background from 'components/Background';
import LoginForm from './components/LoginForm';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Background>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '40%',
          height: '82%',
          padding: '15px',
          border: '1px solid rgba(112, 124, 151, 0.25)',
          boxSizing: 'border-box',
          boxShadow:
            '10px 10px 25px rgba(112, 124, 151, 0.05), 10px 15px 35px rgba(112, 124, 151, 0.05)',
        }}
      >
        <Typography variant='h3' sx={{ m: 2, fontWeight: 'bold' }}>
          Chatvy
        </Typography>
        <Typography variant='h6' sx={{ color: '#707C97' }}>
          Decentralised, Peer-to-Peer, Reliable, Private Chat room app powered
          by{' '}
          <a
            style={{
              textDecoration: 'none',
              color: '#2A8BF2',
              fontWeight: 'bold',
            }}
            href='https://gun.eco/'
            target='_blank'
            rel='noreferrer'
          >
            Gun.js
          </a>
        </Typography>
        <Typography variant='h4' sx={{ m: 2, fontWeight: 'bold' }}>
          Login
        </Typography>

        <LoginForm />
      </Card>
    </Background>
  );
};
export default LoginPage;
