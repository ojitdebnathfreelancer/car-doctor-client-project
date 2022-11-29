import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { authContext } from '../../AuthProvider/AuthProvider';

const Signup = () => {

    const {createUser, updateUser} = useContext(authContext);
    const naviagte = useNavigate();
    const [error, setError] = useState('');

    const handelSignup = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUser(email, password)
        .then(() =>{
            hendelUpdate(name);
            naviagte('/');
            e.target.reset();
        })
        .catch(error => setError(error.message))
    }
    // sign up submit funtion 

    const hendelUpdate = (name) =>{
        const profile = {
            displayName:name,
            photoURL:''
        };
        updateUser(profile)
        .then(()=>{})
        .catch(error => setError(error.message))
    }
    // update user funtion 

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-10">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={handelSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <p className='text-center mt-2'>{error}</p>
                            <div className="form-control mt-4">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;