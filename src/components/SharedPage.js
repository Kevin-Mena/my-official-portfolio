import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedPage = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedPage;
