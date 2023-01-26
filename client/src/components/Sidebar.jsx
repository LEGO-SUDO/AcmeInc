import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import StoreIcon from '@mui/icons-material/Store'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsIcon from '@mui/icons-material/Settings'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate()
  const handleproduct = () => {
    navigate('/products')
  }

  return (
    <div className='flex flex-col justify-between w-full h-screen border-r border-solid bg-gray-100  border-gray-500'>
      <div>
        <div
          className={`justify-center items-center text-indigo-700 text-3xl font-bold border-b-2 h-14 ml-4 mt-2 shadow-md ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          AcmeInc
        </div>
        <div
          className={`justify-center items-center text-indigo-700 text-3xl font-bold border-b-2 h-14 ml-4 mr-4 ${
            isOpen ? 'hidden' : 'flex'
          }`}
        >
          AI
        </div>

        <div className='mt-4 ml-1'>
          <ul className='mb-2 ml-1 bg-indigo-700 rounded-md mt-4'>
            <a href='../signup'>
              <li className='text-white hover:bg-indigo-500 flex flex-row rounded-md text-2xl font-semibold justify-center cursor-pointer'>
                <PersonAddAltOutlinedIcon
                  className='text-white  mr-3'
                  fontSize='large'
                />
                <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                  Add User
                </div>
              </li>
            </a>
          </ul>
          <ul className='mb-2 mt-4'>
            <li className='text-gray-600 hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold justify-center cursor-pointer'>
              <HomeOutlinedIcon
                className='text-indigo-700  mr-3'
                fontSize='large'
              />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                DashBoard
              </div>
            </li>
          </ul>
          <ul className='mb-2 mt-4'>
            <li
              className={`flex text-2xl font-bold text-gray-600 h-8 ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              ANALYTICS
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <BarChartRoundedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={` items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Performance
              </div>{' '}
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <StoreIcon className='text-indigo-700 m-2' fontSize='large' />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Hotjar
              </div>{' '}
            </li>
          </ul>
          <ul className='mb-2 mt-4'>
            <li
              className={` items-center flex text-2xl font-bold text-gray-600 h-8 ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              SUPPORT
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <AirplaneTicketOutlinedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={` items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Tickets
              </div>{' '}
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <PersonOutlineOutlinedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Agents
              </div>{' '}
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <GroupOutlinedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Customers
              </div>{' '}
            </li>
          </ul>
          <ul className='mb-2 mt-4'>
            <li
              className={`flex text-2xl font-bold text-gray-600 h-8 ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              SHOP
            </li>
            <li
              className='text-white cursor-pointer bg-indigo-700 hover:bg-indigo-500 flex flex-row rounded-md text-2xl font-semibold'
              onClick={handleproduct}
            >
              <FolderOutlinedIcon className='text-white m-2' fontSize='large' />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Products
              </div>{' '}
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <NotificationsNoneOutlinedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Orders
              </div>{' '}
            </li>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <InsertChartOutlinedIcon
                className='text-indigo-700 m-2'
                fontSize='large'
              />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Reports
              </div>{' '}
            </li>
          </ul>
          <ul className='mb-2'>
            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <SettingsIcon className='text-indigo-700 m-2' fontSize='large' />
              <div className={`items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Settings
              </div>{' '}
            </li>

            <li className='text-gray-600 cursor-pointer hover:bg-purple-200 flex flex-row rounded-md text-2xl font-semibold'>
              <ExitToAppIcon className='text-indigo-700 m-2' fontSize='large' />
              <div className={` items-center ${isOpen ? 'flex' : 'hidden'}`}>
                Logout
              </div>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
