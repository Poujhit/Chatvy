import React, { useState } from 'react';

import { Form, Formik } from 'formik';

import { makeStyles } from 'utils/makeStyles';

import { useHistory } from 'react-router-dom';
import CustomTextField from './CustomTextField';

import { Box } from '@mui/system';
import { Button, CircularProgress, Typography } from '@mui/material';

import { user } from 'utils/gun';
import CustomSnackbar from 'components/CustomSnackbar/CustomSnackbar';

const useStyles = makeStyles()(() => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { classes } = useStyles();
  const router = useHistory();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      initialValues={{
        username: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};

        const passwordExp = new RegExp(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        );

        if (values.username.length <= 5)
          errors.username = 'Username should be more than 4 characters.';

        if (!passwordExp.test(values.password))
          errors.password =
            'Shouble be atleast a 8 letter password, with at least a symbol, upper and lower case letters and a number';

        return errors;
      }}
      onSubmit={async ({ username, password }) => {
        setLoading(true);
        user.create(username, password, (ack) => {
          console.log(ack);
          user.auth(username, password, (ack) => {
            // console.log(user.is);
            // gun.user(user.is.pub).once((data) => {
            //   console.log(data);
            // });
            if (Object.keys(ack).includes('err')) {
              setOpen(true);
              setLoading(false);
            } else router.push('/chat-rooms');
          });
        });
      }}
    >
      {({ errors }) => (
        <Form className={classes.form} id='Chatvy'>
          <Box sx={{ m: 2 }} />
          <CustomTextField
            name='username'
            label='Enter the username'
            helperText={errors.username}
            error={!!errors.username}
          />
          <Box sx={{ m: 2 }} />
          <CustomTextField
            name='password'
            label='Enter the password'
            type='password'
            helperText={errors.password}
            error={!!errors.password}
          />
          <Box sx={{ m: 2.5 }} />
          <Button
            variant='contained'
            type='submit'
            disabled={loading}
            sx={{
              width: '30%',
              backgroundColor: ' #E94560',
              borderRadius: '6px',
            }}
          >
            {loading ? (
              <CircularProgress
                sx={{
                  color: 'white',
                  padding: '2px',
                }}
              />
            ) : (
              <Typography sx={{ color: 'white' }}>Submit</Typography>
            )}
          </Button>
          <CustomSnackbar
            open={open}
            severity='error'
            handleClose={() => setOpen(false)}
            message={'Wrong password'}
          />
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
