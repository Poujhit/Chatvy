import React from 'react';

import { Box } from '@mui/material';

interface BackgroundProps {}

const Background: React.FC<BackgroundProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#171926',
      }}
    >
      {props.children}
    </Box>
  );
};
export default Background;
