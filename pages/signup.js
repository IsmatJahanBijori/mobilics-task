import Image from 'next/image'
import React from 'react'
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/hK5gRRf/signup.jpg" alt="signup" border="0"></a>

//https://res.cloudinary.com/ducah1mnz/image/upload/v1691948523/signup_lhmbil.jpg
const Signup = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/dQkJ6cD/signup.jpg" className='w-full h-[350px]'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
