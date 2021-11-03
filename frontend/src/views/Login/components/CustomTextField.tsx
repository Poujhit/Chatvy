import React from 'react';

import { Field } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type CustomTextFieldProps = TextFieldProps;

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <Field
      {...props}
      InputProps={{
        style: {
          borderRadius: '16px',
        },
      }}
      sx={{
        width: '85%',
      }}
      as={TextField}
    />
  );
};
export default CustomTextField;
