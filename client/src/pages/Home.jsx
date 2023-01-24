import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'

import Areachart from '../components/Areachart'
import TrafficSource from '../components/TrafficSource'
import Transactions from '../components/Transactions'
import Recent from '../components/Recent'
//import './home.scss'
//import Widget from '../../components/widget/Widget'
//import Featured from '../../components/featured/Featured'
//import Chart from '../../components/chart/Chart'
//import List from '../../components/table/Table'
//import ReorderIcon from '@mui/icons-material/Reorder'
//import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
//import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp'
//import axios from 'axios'

const Home = () => {
  // const [datas, setDatas] = useState([])

  // const fetchData = async () => {
  //   const res = await axios.get(`/data1/all`)

  //   setDatas(res.data)
  // }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='max-h-screen'>
      <div
        className='hidden md:flex bg-gray-100 fixed border-gray-500 shadow-black hover:w-52 w-16 '
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      <div className={`flex-grow ${isOpen ? 'md:ml-52' : 'md:ml-16'} `}>
        <Navbar />
        <Widget />

        <div className=' md:mr-2  ml-4'>
          <div className='grid  grid-cols-1 gap-4  mr-2 md:mr-6 md:grid-cols-[70%_30%]  mb-8 md:mb-0 md:h-1/2'>
            <Areachart />
            <TrafficSource />
          </div>
          <div className='grid  grid-cols-1 gap-4  mr-2 md:mr-6  md:grid-cols-[70%_30%] md:mt-4 mb-40 md:mb-0 md:h-96'>
            <Transactions />
            <Recent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
