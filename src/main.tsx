import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextUIProvider } from '@nextui-org/react';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Auth } from './pages/auth';
import { Posts } from './pages/posts';
import { ThemeProvider } from './components/theme-provider';
import { Layout } from './components/layout';
import { UserProfile } from './pages/user-profile';
import { CurrentPost } from './pages/current-post';
import { Followers } from './pages/followers';
import { Following } from './pages/following';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Posts />,
      },
      {
        path: 'posts/:id',
        element: <CurrentPost />,
      },
      {
        path: 'users/:id',
        element: <UserProfile />,
      },
      {
        path: 'followers',
        element: <Followers />,
      },
      {
        path: 'following',
        element: <Following />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
