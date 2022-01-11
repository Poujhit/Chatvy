import React from 'react';
import Background from 'components/Background';
// import { Typography } from '@mui/material';
import MainLayout from 'components/MainLayout/MainLayout';

import { makeStyles } from 'utils/makeStyles';
import ChatRoomList from './components/ChatRoomList';
import ConverstionDetails from './components/ConverstionDetails';

interface ChatsPageProps {}

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    // cursor: 'pointer',
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
  },
}));

const ChatsPage: React.FC<ChatsPageProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Background isHome={true}>
      <MainLayout />
      <div className={classes.root}>
        <ChatRoomList />
        <ConverstionDetails />
      </div>
    </Background>
  );
};
export default ChatsPage;
