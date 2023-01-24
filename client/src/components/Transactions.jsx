import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CircularProgress from '@mui/material/CircularProgress'

const Transactions = () => {
  const [spinner, setSpinner] = useState(true)
  const [datas, setDatas] = useState([])
  const URL = 'https://acmeinc-api.onrender.com/api/customer/getcustomer'

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
        setDatas(response.customers)
        setSpinner(false)
      })
  })

  return (
    // <div className='bg-gray-100 shadow-md shadow-gray-500 rounded-md m-1 '>
    <TableContainer className='bg-gray-100 shadow-md shadow-gray-500 md:h-full rounded-md '>
      <div className='flex w-11/12 justify-between mx-4 mt-2 mr-4'>
        <p className='flex text-gray-500  text-2xl items-center font-bold'>
          TRANSACTIONS
        </p>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        {!spinner && (
          <TableBody>
            {datas.map((item, i) => (
              <TableRow key={i}>
                <TableCell className='text-xl font-semibold'>
                  <p
                    className={`text-xl rounded-md flex items-center justify-between text-black ${
                      item.status === 'Completed'
                        ? 'text-green-600 bg-green-200'
                        : item.status === 'Cancelled'
                        ? 'text-red-600 bg-red-300'
                        : 'text-yellow-500 bg-yellow-200'
                    } w-40 p-2 font-bold `}
                  >
                    <FiberManualRecordIcon fontSize='small' />
                    {item.status}
                  </p>
                </TableCell>
                <TableCell className='text-xl font-semibold'>
                  <p className='text-xl text-black'>{item.Card}</p>
                  <p className='text-l font-semibold text-gray-500'>
                    {item.method}
                  </p>
                </TableCell>
                <TableCell className='text-xl font-semibold'>
                  <p className='text-xl text-black'>{item.amount}</p>
                  <p className='text-l font-semibold text-gray-500'>
                    {item.date}
                  </p>
                </TableCell>
                <TableCell className='text-xl font-semibold'>
                  <p className='text-xl text-black'>{item.platform}</p>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
        {spinner && (
          <TableBody className='flex items-center justify-center'>
            <CircularProgress
              className='flex ml-40 mt-40 mb-20 md:ml-96 md:mt-40 items-center justify-center'
              fontSize='large'
            />
          </TableBody>
        )}
      </Table>
    </TableContainer>
    //</div>
  )
}

export default Transactions
