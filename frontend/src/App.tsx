import React from 'react';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthPage from 'views/Login/LoginPage';
import HomePage from 'views/ChatsPage/ChatsPage';
import { theme } from './theme/Theme';

import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={AuthPage} />
            <Route path='/home' exact component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
