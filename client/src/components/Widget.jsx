import React from 'react'

const Widget = () => {
  return (
    <div>
      <div className='grid m-2  grid-cols-2 md:grid-cols-4'>
        <div className='bg-gray-100 mx-2 my-2 md:my-0  rounded-md h-28  shadow-md shadow-gray-500'>
          <div className='flex h-full flex-col'>
            <div className=' h-1/2 m-2 text-xl text-gray-700 font-semibold'>
              TODAY'S SALE
            </div>
            <div className=' flex h-1/2 m-2 justify-between items-end '>
              <div className='flex text-xl md:text-2xl font-semibold text-gray-500'>
                $147,400
              </div>
              <div className='flex text-xl text-green-500'>+20%</div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 mx-2 my-2 md:my-0 rounded-md h-28  shadow-md shadow-gray-500'>
          <div className='flex h-full flex-col'>
            <div className=' h-1/2 m-2 text-xl text-gray-700 font-semibold'>
              TOTAL SALE
            </div>
            <div className=' flex h-1/2 m-2 justify-between items-end '>
              <div className='flex text-xl md:text-2xl font-semibold text-gray-500 '>
                $2,35,400
              </div>
              <div className='flex text-xl text-red-500'>-14%</div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 mx-2 my-2 md:my-0 rounded-md h-28  shadow-md shadow-gray-500'>
          <div className='flex h-full flex-col'>
            <div className=' h-1/2 m-2 text-xl text-gray-700 font-semibold'>
              TOTAL ORDERS
            </div>
            <div className=' flex h-1/2 m-2 justify-between items-end '>
              <div className='flex text-xl md:text-2xl font-semibold text-gray-500 '>
                89,400
              </div>
              <div className='flex text-xl text-green-500'>+36%</div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 mx-2 my-2 md:my-0 rounded-md h-28  shadow-md shadow-gray-500'>
          <div className='flex h-full flex-col'>
            <div className=' h-1/2 m-2 text-xl text-gray-700 font-semibold'>
              TOTAL CUSTOMERS
            </div>
            <div className=' flex h-1/2 m-2 justify-between items-end '>
              <div className='flex text-xl md:text-2xl font-semibold text-gray-500 '>
                33,400
              </div>
              <div className='flex text-xl text-green-500'>+33%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget
