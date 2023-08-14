import LeftSide from '@/components/LeftSide'
import ProfileNavbar from '@/components/ProfileNavbar'
import RightSide from '@/components/RightSide'
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
        <LeftSide/>


        {/*right side */}
        <RightSide/>
      </div>
    </div>
  )
}

export default Profile
