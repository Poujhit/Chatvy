import React from 'react';
import Background from 'components/Background';
import { Typography } from '@mui/material';
import MainLayout from 'components/MainLayout/MainLayout';

interface ChatsPageProps {}

const ChatsPage: React.FC<ChatsPageProps> = (props) => {
  console.log('here');
  return (
    <Background>
      <MainLayout />
      <div
        style={{
          height: '100vh',
        }}
      >
        pklk
      </div>
      <Typography>Home page</Typography>
    </Background>
  );
};
export default ChatsPage;
