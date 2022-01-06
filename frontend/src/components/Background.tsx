import React from 'react';

import { Box } from '@mui/material';

interface BackgroundProps {
  isHome?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isHome, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: !isHome ? 'center' : '',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#1A1A2E',
      }}
    >
      {children}
    </Box>
  );
};
export default Background;
