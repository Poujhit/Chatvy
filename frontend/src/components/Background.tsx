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
        height: '100vh',
        width: '100vw',
        backgroundColor: '#171926',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {props.children}
    </Box>
  );
};
export default Background;
