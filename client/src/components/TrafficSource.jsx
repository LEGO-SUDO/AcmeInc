import React from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'

import { Pie } from 'react-chartjs-2'

const TrafficSource = () => {
  const [isPie, setIsPie] = useState(false)

  const datas = {
    datasets: [
      {
        data: [48, 29, 15, 8],
        backgroundColor: [
          'rgba(76, 175, 80, 0.6)',
          'rgba(255,0,0,0.6)',
          'rgba(0,110,255,0.6)',
          'rgba(89,0,255,0.6)',
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Direct', 'Referral', 'Social Media', 'Twitter'],
  }
  const options = {}

  const handlePie = (event, newAlignment) => {
    setIsPie(true)
    console.log(isPie)
  }
  const handleProgress = (event, newAlignment) => {
    setIsPie(false)
    console.log(isPie)
  }

  const data = [
    {
      id: 1,
      title: 'Direct',
      value: 143382,
      percentage: 48,
    },
    {
      id: 2,
      title: 'Referral',
      value: 87974,
      percentage: 29,
    },
    {
      id: 3,
      title: 'Social media',
      value: 45211,
      percentage: 15,
    },
    {
      id: 4,
      title: 'Twitter',
      value: 21893,
      percentage: 8,
    },
  ]

  return (
    <div className='h-80 md:h-full bg-gray-100 md:mb-20 md:m-0 shadow-md shadow-gray-500 rounded-md'>
      <div className='flex m-4 flex-row justify-between items-center'>
        <p className='text-2xl text-gray-500 font-bold'>TRAFFIC SOURCE</p>
        <ToggleButtonGroup exclusive aria-label='text alignment'>
          <ToggleButton
            value='left'
            aria-label='left aligned'
            onClick={handleProgress}
          >
            ProgressBar
          </ToggleButton>

          <ToggleButton
            value='right'
            aria-label='right aligned'
            onClick={handlePie}
          >
            PieChart
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className='flex h-full '>
        {!isPie && (
          <div className='w-11/12  md:mt-20'>
            {data.map(({ id, title, value, percentage }) => (
              <div key={id}>
                <div className='flex ml-2 items-center justify-between h-6'>
                  <p className='m-2 flex font-bold'>{title}</p>
                  <p className='m-2 flex font-bold'>{value}</p>
                </div>
                <div className='h-3 mt-2 w-full bg-gray-300 rounded-full m-2'>
                  <div
                    className='h-full  rounded-full bg-indigo-700 text-right'
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isPie && (
          <div className='ml-24 w-52 h-52 mb-8 md:mb-0 md:ml-24'>
            <Pie data={datas} options={options} className='' />
          </div>
        )}
      </div>
    </div>
  )
}

export default TrafficSource
