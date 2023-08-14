import ProfileNavbar from '@/components/ProfileNavbar'
import React from 'react'
import styles from "../styles/profile.module.css"
const Connections = () => {
    return (
        <div className='flex flex-col w-full pr-5'>
            <ProfileNavbar className="mb-5" />
            <div className='w-full bg-blue-600 h-[150px] rounded-md '>
                <p className='text-xl p-5 text-white'>My Connections</p>
            </div>
            <div className={styles.profile} >
                <div className='flex justify-between'>
                    <div className='mt-10 ml-5'>
                        <h1>Vishnu</h1>
                        <p>Full Stack Developer</p>
                        <button className='btn bg-blue-200 rounded-full'>Remove Connection</button>
                    </div>
                    <div className='flex'>
                        <img src="https://i.ibb.co/sJhwbNr/profile.webp" alt="" className='w-[150px] rounded-full' />
                    </div>
                </div>
            </div>
            <div> 
            <h1 className='ml-5 my-10'>This People You may Connected</h1>
            <div className={styles.profile} >
                <div className='flex justify-between'>
                    <div className='mt-10 ml-5'>
                        <h1>Kumar</h1>
                        <p>MERN Stack Developer</p>
                        <button className='btn bg-blue-200 rounded-full'>Connect</button>
                    </div>
                    <div className='flex'>
                        <img src="https://i.ibb.co/sJhwbNr/profile.webp" alt="" className='w-[150px] rounded-full' />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Connections
