import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Recent = () => {
  const [datas, setDatas] = useState([])
  const [spinner, setSpinner] = useState(true)
  const URL = 'https://dummyjson.com/users'

  const delayFetch = (url, options) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(url, options))
      }, options.delay)
    })

  useEffect(() => {
    delayFetch(URL, {
      delay: 2000,
    })
      .then((res) => res.json())
      .then((response) => {
        setDatas(response.users)
        setSpinner(false)
      })
  })

  return (
    <TableContainer className='bg-gray-100 shadow-md shadow-gray-500 h-96 md:h-full mt-4 md:mt-0 rounded-md mr-2'>
      <div className='flex w-11/12 justify-between mx-4 mt-2 mr-4'>
        <p className='flex  items-center font-bold text-gray-500 text-2xl'>
          RECENT CUSTOMERS
        </p>
      </div>
      {!spinner && (
        <Table sx={{ minWidth: 400 }} aria-label='simple table'>
          <TableBody>
            {datas.map((item, i) => (
              <TableRow key={i} className='flex items-center'>
                <TableCell className='tableCell'>
                  <div className='flex  '>
                    <img
                      src={item.image}
                      alt=''
                      className='w-12 h-12 rounded-full '
                    />
                  </div>
                </TableCell>
                <TableCell className='tableCell'>
                  <p className='font-semibold text-gray-800'>{item.lastName}</p>
                  <p className='font-semibold text-gray-500'>{item.email}</p>
                </TableCell>
                <TableCell className='tableCell'>
                  {' '}
                  <p className='font-semibold text-gray-800'>
                    {item.address.city}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {spinner && (
        <CircularProgress className='ml-40 mt-40 md:ml-48 md:mt-40' />
      )}
    </TableContainer>
  )
}

export default Recent
