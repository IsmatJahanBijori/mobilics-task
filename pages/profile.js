import LeftSide from '@/components/LeftSide'
import ProfileNavbar from '@/components/ProfileNavbar'
import RightSide from '@/components/RightSide'
import styles from "../styles/profile.module.css" 
import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col w-full pr-5'>
      <ProfileNavbar className="mb-5" />
      <div className='w-full bg-blue-600 h-[150px] rounded-md '>
        <p className='text-xl p-5 text-white'>My Profile</p>
      </div>

      {/* main div */}
      <div className={styles.container}>

        {/*left side */}
        <LeftSide />

        {/*right side */}
        <RightSide />
      </div>
    </div>
  )
}

export default Profile
