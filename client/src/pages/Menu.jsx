import React from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

const Menu = () => {
  const navigate = useNavigate()
  const links = [
    {
      id: 1,
      link: 'Add User',
    },
    {
      id: 2,
      link: 'Users',
    },
    {
      id: 3,
      link: 'Products',
    },
    {
      id: 4,
      link: 'Orders',
    },
    {
      id: 5,
      link: 'Delivery',
    },
    {
      id: 6,
      link: 'Stats',
    },
    {
      id: 7,
      link: 'Notifications',
    },
    {
      id: 8,
      link: 'Health',
    },
    {
      id: 9,
      link: 'Logs',
    },
    {
      id: 10,
      link: 'Settings',
    },
    {
      id: 11,
      link: 'Profile',
    },
    {
      id: 12,
      link: 'Logout',
    },
  ]

  return (
    <div className='flex flex-col justify-center items-end'>
      <div className='cursor-pointer text-gray-800  pr-4 z-10 md:hidden'>
        <a href='../'>
          <CloseIcon
            style={{
              height: '30',
              width: '30',
              position: 'relative',

              fontSize: 'large',
            }}
            className='justify-end items-center'
          />
        </a>
      </div>
      <div>
        <ul className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full text-xl font-bold text-purple-500 bg-white'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 h-full cursor-pointer py-2 text-gray-800 bg-clip-text   
            animate-text'
              onClick={(e) => {
                link === 'Products'
                  ? navigate('/products')
                  : link === 'Add User'
                  ? navigate('/signup')
                  : navigate('/')
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
