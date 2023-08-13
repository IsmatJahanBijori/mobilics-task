import ProfileNavbar from '@/components/ProfileNavbar'
// import Image from 'next/image'
import React from 'react'
// <a href="https://ibb.co/Hp0zBbQ"><img src="https://i.ibb.co/sJhwbNr/profile.webp" alt="profile" border="0"></a>
const Profile = () => {
  return (
    <div className='flex flex-col w-full pr-5'>
      <ProfileNavbar className="mb-5" />
      <div className='w-full bg-blue-600 h-[150px] rounded-md '>
        <p className='text-xl p-5 text-white'>My Profile</p>
      </div>


      {/* main div */}
      <div className='bg-[#FFFFFF] w-3/4 mx-auto h-full rounded-md grid grid-cols-1 md:grid-cols-2'>


        {/*left side */}
        <div className='w-1/2'>
          <div className='p-3 flex'>
            <img src="https://i.ibb.co/sJhwbNr/profile.webp" className='rounded-full ' width={90} height={90} />
            <button className='btn mt-5 ml-20'>Upload Photo</button>
          </div>

          {/* personal info */}
          <div className='w-[500px] h-[200px] m-3 p-3 border-2 border-blue-900 rounded-lg shadow-lg'>
            <div className='flex'>
              <input type="text" placeholder="Your Name" className="input input-bordered input-md mr-3 mb-3 w-full max-w-xs" />
              <button className='btn '>Edit</button>
            </div>
            <div className='flex'>
              <input type="text" placeholder="Your Email" className="input input-bordered input-md mr-3 mb-3 w-full max-w-xs" />
              <button className='btn '>Edit</button>
            </div>
            <div className='flex'>
              <input type="text" placeholder="Your Phone Number" className="input input-bordered mr-3 input-md mb-3 w-full max-w-xs" />
              <button className='btn'>Edit</button>
            </div>
          </div>

          {/* About */}
          <div className='w-[500px] h-[200px] m-3 p-3 border-2 border-blue-800 rounded-lg shadow-lg'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold'>About John</h1>
              <button className='btn ml-20'>Edit</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias aliquid nobis corrupti possimus! Tenetur laudantium ea autem officiis quo, ratione id neque eligendi fugiat at. Eveniet qui deserunt eos?</p>
          </div>

          {/* Skill */}
          <div className='w-[500px] h-[200px] m-3 p-3 border-2 border-blue-800 rounded-lg shadow-lg'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold'>Skill</h1>
              <button className='btn ml-20'>Edit</button>
            </div>
            <p className='mt-4'>NodeJS</p>
            <p>NextJS</p>
          </div>
        </div>


        {/*right side */}
        <div className='w-1/2'>

          <div className='w-[500px] h-[200px] m-3 p-3 border-2 border-blue-800 rounded-lg shadow-lg'>
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
            <div className='w-[500px] h-[100px] m-3 p-3 border-2 border-blue-800 rounded-lg flex shadow-lg'>
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
            <div className='w-[500px] h-[100px] m-3 p-3 border-2 border-blue-800 rounded-lg flex shadow-lg'>
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
            <div className='w-[500px] h-[200px] m-3 p-3 border-2 border-blue-800 rounded-lg shadow-lg'>
              <div className='flex items-center justify-between mb-2'>
                <h1 className='text-xl font-semibold'>2019-2023</h1>
                <p className='p'>BTech</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias aliquid nobis corrupti possimus! Tenetur laudantium ea autem officiis quo, ratione id neque eligendi fugiat at. Eveniet qui deserunt eos?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
