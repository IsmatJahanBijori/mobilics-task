import React from 'react'
import styles from "../styles/profile.module.css" 

const RightSide = () => {
    return (
        <div>
            <div className='w-1/2'>

                <div className={styles.profile}>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-semibold'>Professional Details</h1>
                        <img src="https://i.ibb.co/WH6nRx5/star.jpg" className='w-10 h-10 ml-10' alt="" />
                    </div>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, quia.</p>
                </div>

                {/**Certification */}
                <div className='w-[500px] h-[200px] m-3 p-3'>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-semibold'>Certification</h1>
                        <button className='btn ml-20'>Edit</button>
                    </div>
                    <div className='flex items-center rounded-full border-2 p-3 mt-3 border-blue-500'>
                        <img src="https://i.ibb.co/3z4dhM1/download.jpg" className='w-10 h-10 mr-10' alt="" />
                        <div>
                            <p className='text-lg'>Python</p>
                            <p>Coding Ninjos</p>
                        </div>
                    </div>
                </div>


                {/**Experience */}
                <div>
                    <div className='flex items-center ml-6'>
                        <h1 className='text-xl font-semibold'>Experience</h1>
                        <button className='btn ml-20'>Edit</button>
                    </div>
                    <div className={styles.profileInfo}>
                        <div className='ml-5'>
                            <p className='font-semibold'>7 years</p>
                            <p>Oruphone</p>
                        </div>

                        <div className='ml-7'>
                            <p className='font-semibold'>Full-time</p>
                            <p>Full stack developer</p>
                        </div>
                        <img src="https://i.ibb.co/rb6FDp3/download.png" className='w-[100px] ml-5 rounded-full' alt="" />

                    </div>
                    <div className={styles.profileInfo}>
                        <div className='ml-5'>
                            <p className='font-semibold'>7 years</p>
                            <p>Oruphone</p>
                        </div>

                        <div className='ml-7'>
                            <p className='font-semibold'>Intern</p>
                            <p>Frontend developer</p>
                        </div>
                        <img src="https://i.ibb.co/rb6FDp3/download.png" className='w-[100px] ml-5 rounded-full' alt="" />

                    </div>

                </div>

                {/**Education */}
                <div>
                    <div className='flex items-center ml-6'>
                        <h1 className='text-xl font-semibold'>Education</h1>
                        <button className='btn ml-20'>Edit</button>
                    </div>
                    <div className={styles.profile}>
                        <div className='flex items-center justify-between mb-2'>
                            <h1 className='text-xl font-semibold'>2019-2023</h1>
                            <p className='p'>BTech</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias aliquid nobis corrupti possimus! Tenetur laudantium ea autem officiis quo, ratione id neque eligendi fugiat at. Eveniet qui deserunt eos?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide
