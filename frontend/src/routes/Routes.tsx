import { lazy } from 'react';
// import { Redirect } from 'react-router-dom';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';

import MainLayout from 'components/MainLayout/MainLayout';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import LoginPage from 'views/Login/LoginPage';
// import PrivacyPage from 'pages/Privacy/Privacy';
// import Page404 from 'pages/404/404';
// import PrivateRoute from 'widgets/PrivateRoute/PrivateRoute';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: LoginPage,
  },

  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/chat-rooms',
        exact: true,
        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('views/ChatsPage/ChatsPage'))}
          </PrivateRoute>
        ),
      },
    ],
  },

  //   {
  //     component: () => <Redirect to='/error/404' />,
  //   },
];

export default routes;
