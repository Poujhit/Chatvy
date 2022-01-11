import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import { makeStyles } from 'utils/makeStyles';

interface ChatRoomListProps {}

const useStyles = makeStyles()(() => ({
  chatRoomList: {
    width: 450,
    // backgroundColor: 'white',
    flexBasis: 450,
    flexShrink: 0,
  },
}));

const ChatRoomList: React.FC<ChatRoomListProps> = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.chatRoomList}>
      <Toolbar style={{}}>
        <Input placeholder='Search contacts' />
        <Tooltip title='Search'>
          <Button>Search</Button>
        </Tooltip>
      </Toolbar>
      <Divider />
    </div>
  );
};
export default ChatRoomList;
