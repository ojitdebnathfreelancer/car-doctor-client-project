import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { authContext } from '../../AuthProvider/AuthProvider';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const { user, logoutUser } = useContext(authContext);
    const navigate = useNavigate();

    const hendelLogout = () => {
        logoutUser()
        .then(() =>{
            navigate('/signup')
        })
        .catch(()=>{});
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold lg:ml-5'><Link to='/orderdetails'>Orders</Link></li>
        <li className='lg:ml-5' title='Profile'>
            <Link>{user?.displayName}</Link>
        </li>
        {
            user?.email ?
                <li className='lg:ml-5'>
                    <button onClick={hendelLogout} className="btn btn-outline btn-primary">Sign Out</button>
                </li>
                :
                <li className='font-semibold ml-5'><Link to='/signup'>Sign Up</Link></li>
        }
    </>
    return (
        <div className="navbar h-24 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars size={20} />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='h-14' src={logo} alt="brand-logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div>
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:w-40">
                <button className="btn btn-outline">Appointment</button>
            </div>
        </div>
    );
};

export default Header;