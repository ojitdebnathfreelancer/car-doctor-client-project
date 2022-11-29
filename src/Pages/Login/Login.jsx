import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { authContext } from '../../AuthProvider/AuthProvider';
const Login = () => {

    const {loginUser, user} = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        loginUser(email, password)
        .then((result)=>{

            const user = result.user;
            const current = {email:user?.email};

            fetch('https://car-doctor-server-neon.vercel.app/jwt',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(current)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
            }); 

            navigate(from, {replace:true});

            e.target.reset();
        })
        .catch(error => setError(error.message));
    }

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-10">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p className='text-center text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary"type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to car doctor <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;