import React, { useContext } from 'react'
import styles from "../styles/profile.module.css" 
// import { AuthContext } from '@/pages/Provider/AuthProvider'
const LeftSide = () => {
    // const {user}=useContext(AuthContext)
    return (
        <div>
            <div className='w-1/2'>
                <div className='p-3 flex'>
                    <img src="https://i.ibb.co/sJhwbNr/profile.webp" className='rounded-full ' width={90} height={90} />
                    <button className='btn mt-5 ml-20'>Upload Photo</button>
                </div>

                {/* personal info */}
                <div className={styles.profile}>
                    <div className='flex'>
                        <input type="text" placeholder="Your Name" className={styles.inputField} />
                        <button className='btn '>Edit</button>
                    </div>
                    <div className='flex'>
                        <input type="text" placeholder="Your Email"  className={styles.inputField} />
                        <button className='btn '>Edit</button>
                    </div>
                    <div className='flex'>
                        <input type="text" placeholder="Your Phone Number" className={styles.inputField} />
                        <button className='btn'>Edit</button>
                    </div>
                </div>

                {/* About */}
                <div className={styles.profile}>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-semibold'>About John</h1>
                        <button className='btn ml-20'>Edit</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias aliquid nobis corrupti possimus! Tenetur laudantium ea autem officiis quo, ratione id neque eligendi fugiat at. Eveniet qui deserunt eos?</p>
                </div>

                {/* Skill */}
                <div className={styles.profile}>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-semibold'>Skill</h1>
                        <button className='btn ml-20'>Edit</button>
                    </div>
                    <p className='mt-4'>NodeJS</p>
                    <p>NextJS</p>
                </div>
            </div>

        </div>
    )
}

export default LeftSide
