import React, { useEffect } from 'react';
import { Container } from '../container';
import { NavBar } from '../nav-bar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../header';

export const Layout = () => {
  const navigate = useNavigate();

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
