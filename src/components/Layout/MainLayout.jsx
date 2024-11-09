import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-20">Simple Firebase</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;