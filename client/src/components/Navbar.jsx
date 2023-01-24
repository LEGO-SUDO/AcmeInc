import React, { useState } from 'react'
//import ReorderIcon from '@mui/icons-material/Reorder'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import dp from '../assets/dp1.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='flex flex-row bg-opacity-100 w-full h-16 border-b border-solid bg-white border-gray-500 '>
      <div className='md:hidden w-full  bg-gray-100 flex justify-between items-center'>
        <div className='w-1/2 border-r rounded-full ml-2 border-solid border-gray-500 flex items-center '>
          <input
            type='text'
            className='w-11/12 border border-solid border-gray-500  rounded-lg p-2'
            placeholder='Search...'
          />
          <SearchOutlinedIcon
            className='ml-2 cursor-pointer'
            fontSize='large'
          />
        </div>
        <strong class='relative inline-flex items-center  px-1 py-0.5 text-xs font-medium'>
          <span class='absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-indigo-500 flex justify-center items-center items'>
            <span className='text-white cursor-pointer font-bold'>10</span>
          </span>
          <span class='ml-1.5'>
            {' '}
            <NotificationsNoneOutlinedIcon
              fontSize='large'
              className='cursor-pointer'
            />{' '}
          </span>
        </strong>
        <strong class='relative inline-flex items-center  px-1 py-0.5 text-xs font-medium'>
          <span class='absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-indigo-500 flex justify-between items-center items'>
            <span className='text-white cursor-pointer font-bold'>10</span>
          </span>
          <span class='ml-1.5'>
            {' '}
            <ChatBubbleOutlineOutlinedIcon
              fontSize='large'
              className='cursor-pointer'
            />{' '}
          </span>
        </strong>
        <div
          className='cursor-pointer text-gray-800  pr-4 z-10 md:hidden'
          onClick={() => setNav(!nav)}
        >
          <a href='../menu'>
            <img
              src={dp}
              alt=''
              className='w-10 cursor-pointer h-10  rounded-full'
            />
          </a>
        </div>
      </div>

      <div className='hidden md:flex text-2xl w-full items-center  ml-4 justify-between'>
        <div className='w-1/2 border-r rounded-full border-solid border-gray-500 flex items-center '>
          <input
            type='text'
            className='w-11/12 border border-solid border-gray-500  rounded-lg p-2'
            placeholder='Search...'
          />
          <SearchOutlinedIcon
            className='ml-2 cursor-pointer'
            fontSize='large'
          />
        </div>
        <div className='flex  justify-start items-center'>
          <strong class='relative inline-flex items-center  px-1 py-0.5 text-xs font-medium'>
            <span class='absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-indigo-500 flex justify-center items-center items'>
              <span className='text-white cursor-pointer font-bold'>10</span>
            </span>
            <span class='ml-1.5'>
              {' '}
              <NotificationsNoneOutlinedIcon
                fontSize='large'
                className='cursor-pointer'
              />{' '}
            </span>
          </strong>
          <strong class='relative inline-flex items-center  px-1 py-0.5 text-xs font-medium'>
            <span class='absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-indigo-500 flex justify-center items-center items'>
              <span className='text-white cursor-pointer font-bold'>10</span>
            </span>
            <span class='ml-1.5'>
              {' '}
              <ChatBubbleOutlineOutlinedIcon
                fontSize='large'
                className='cursor-pointer'
              />{' '}
            </span>
          </strong>

          <div className='item'>
            <img
              src={dp}
              alt=''
              className='w-10 cursor-pointer h-10 ml-10 m-4 rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
