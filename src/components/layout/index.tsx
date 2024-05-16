// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FC } from 'react';
import { Container } from '../container';
import { NavBar } from '../nav-bar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  selectUser,
  selectIsAuthenticated,
} from '../../features/user/userSlice';
import { Header } from '../header';

export const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <Container>
        <div className="flex-2 p-4">
          <NavBar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
        <div className="flex-2 p-4"></div>
      </Container>
    </>
  );
};
