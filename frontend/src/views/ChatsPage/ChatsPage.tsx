import React from 'react';
import Background from 'components/Background';
import { Typography } from '@mui/material';
import MainLayout from 'components/MainLayout/MainLayout';

import { makeStyles } from 'utils/makeStyles';

interface ChatsPageProps {}

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    // cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
  },
}));

const ChatsPage: React.FC<ChatsPageProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Background isHome={true}>
      <MainLayout />
      <div className={classes.root}></div>
    </Background>
  );
};
export default ChatsPage;
