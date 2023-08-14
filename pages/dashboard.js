import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";
import { BsMenuUp } from "react-icons/bs";
import Link from 'next/link';
import { AuthContext } from './Provider/AuthProvider';

const Dashboard = () => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext)
  return (

    <div className="lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center">
        {/* Page content here <main className='text-center'>{children}</main>*/}

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          <div className=" bg-slate-200 shadow-xl h-screen flex flex-col">
            <div className="px-4 mx-auto lg:max-w-7xl md:px-8">
              <div className=" items-center pr-4 py-3 md:py-5">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <GiCrossMark />
                    ) : (
                      <BsMenuUp />
                    )}
                  </button>
                </div>
              </div>
              <div
                className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center space-y-8 pt-5">
                  <h2 className="text-2xl text-[#64CCC5] font-bold">Dashboard</h2>
                  <li className="text-gray-600 hover:text-blue-600 font-semibold">
                    <Link href='/profile'>My Profile</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 font-semibold">
                    <Link href='/connections'>My Connections</Link>
                  </li>
                  {
                    user ? <li className="text-gray-600 hover:text-blue-600 font-semibold">
                      <Link href="/">LogOut</Link>
                    </li>
                      :
                      <React.Fragment>
                        <li className="text-gray-600 hover:text-blue-600 font-semibold">
                          <Link href="/login">Login</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600 font-semibold">
                          <Link href="/signup">Signup</Link>
                        </li>
                      </React.Fragment>
                  }
                </ul>
              </div>
            </div>
          </div>
        </ul>

      </div>
    </div>
  );
}

export default Dashboard
