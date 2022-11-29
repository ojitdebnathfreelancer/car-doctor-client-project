import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;