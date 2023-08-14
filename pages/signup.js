
import React, { useContext, useState } from 'react'
import { AuthContext } from './Provider/AuthProvider'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';


const Signup = () => {
    const {  createUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
    // const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data.name, data.email, data.password, data.photo)
        createUser(data.name, data.email, data.password, data.photo)
            .then(result => {

                console.log(result.user)
                // navigate("/");

            })

            .catch(error =>
                console.log(error)
                // console.log(error.message)
                )
        // return (<Link href="/"></Link>)
    };
    const notify = () => {
        toast.success('Successfully user profile updated!')
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/dQkJ6cD/signup.jpg" className='w-full h-[350px]' />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full ml-5 mr-5 md:w-1/2 md:mx-auto mt-20 mb-10'>

                    {/*Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered "
                            {...register("name", { maxLength: 20 })}
                            
                        />
                    </div>

                    {/*Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered "
                            {...register("email")}
                        />
                    </div>


                    {/*photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="photo"
                            className="input input-bordered "
                            {...register("photo")}
                        />
                    </div>

                    {/*password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input placeholder='Give your Password' className="input input-bordered "
                            type={passwordVisible ? 'text' : 'password'}
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                            })}
                        />
                        {errors.password?.type === 'required' && <span className='text-red-700'>This field is required</span>}
                        {errors.password?.type === 'minLength' && (
                            <span className='text-red-700'>Password must be at least 6 characters long</span>
                        )}
                        {errors.password?.type === 'pattern' && (
                            <span className='text-red-700'>Password must contain a capital letter and a special character</span>
                        )}
                        <div className='btn bg-white mt-5 w-1/3' onClick={togglePassword}>{passwordVisible ? <FaEyeSlash className='w-10' /> : <FaEye className='w-10' />}</div>
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input placeholder='Confirm your Password' className="input input-bordered "
                            type={passwordVisible ? 'text' : 'password'}
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === watch("password"),
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className='text-red-700'>Passwords do not match</span>
                        )}
                    </div>
                    <input type="submit" onClick={notify} className='btn bg-blue-600 text-white mt-5 w-2/3' value="Submit" />
                    <Toaster
                        position="top-center" />
                    <p className='mt-3'>Already Have An Account?Please <Link href='/login' className='font-bold'>Login</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Signup
