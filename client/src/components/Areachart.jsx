import React from 'react'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', Total: 1200 },
  { name: 'Feb', Total: 2100 },
  { name: 'Mar', Total: 800 },
  { name: 'Apr', Total: 1600 },
  { name: 'May', Total: 900 },
  { name: 'June', Total: 1700 },
  { name: 'July', Total: 1800 },
  { name: 'Aug', Total: 1900 },
  { name: 'Sep', Total: 1100 },
  { name: 'Oct', Total: 1000 },
  { name: 'Nov', Total: 1500 },
  { name: 'Dec', Total: 1200 },
]

const Areachart = () => {
  return (
    <div className='md:h-full h-80 bg-gray-100 shadow-md shadow-gray-500 rounded-md'>
      <div className='text-xl font-bold text-gray-500'>
        Last 6 Months Revenue
      </div>
      <ResponsiveContainer width='100%' aspect={3 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 30, right: 20, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke='gray' />

          <CartesianGrid strokeDasharray='3 3' className='chartGrid' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Total'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Areachart
