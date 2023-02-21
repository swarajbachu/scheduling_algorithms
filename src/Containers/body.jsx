import React from 'react'
import Form from '../components/form'
import Table from '../components/table'
import { useContext } from 'react'
import { AppContext } from '../App'

const Body = () => {

    const { results } = useContext(AppContext);

  return (
    <div className='flex justify-center  p-16'>

        <div className='rounded-lg shadow-2xl p-10 m-8 border-2 border-gray-200'>
            <Form />
        </div>
        <div className='rounded-lg shadow-2xl m-8 p-8 w-[60vw] border-2 border-gray-200'>
            <h1 className='text-3xl font-bold mb-4'>
                OUTPUT
            </h1>

            { results.length > 0 &&
            <Table />
            }
        </div>    
      
    </div>
  )
}

export default Body
