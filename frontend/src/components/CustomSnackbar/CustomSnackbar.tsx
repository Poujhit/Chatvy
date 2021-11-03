import React from 'react';

import MuiAlert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface CustomSnackbarProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity: AlertColor;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={props.handleClose}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
    >
      <MuiAlert
        variant='filled'
        severity={props.severity}
        onClose={props.handleClose}
      >
        {props.message}
      </MuiAlert>
    </Snackbar>
  );
};
export default CustomSnackbar;
