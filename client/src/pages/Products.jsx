import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Products = () => {
  const [spinner, setSpinner] = useState(true)
  const [datas, setDatas] = useState([])
  const URL = 'https://dummyjson.com/products'

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
        setDatas(response.products)
        setSpinner(false)
      })
  })
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex w-full justify-start'>
        <a href='../'>
          <ArrowBackIcon />
        </a>
      </div>
      {!spinner && (
        <TableContainer className='bg-gray-100 shadow-md shadow-gray-500 h-2/5 md:h-full mt-4 md:mt-0 rounded-md mr-2'>
          <div className='flex w-11/12 justify-between mx-4 mt-2 mr-4'>
            <p className='flex  items-center font-bold text-2xl'>
              AVAILABLE PRODUCTS
            </p>
          </div>

          <Table sx={{ minWidth: 400 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>PRICE</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>RATING</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {datas.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className='tableCell'>{item.price}</TableCell>
                  <TableCell className='tableCell'>{item.title}</TableCell>
                  <TableCell className='tableCell'>{item.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {spinner && <CircularProgress className='mt-80 ' />}
    </div>
  )
}
export default Products
