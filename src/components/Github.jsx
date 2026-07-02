import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    
    return (
        <>
        <div className='border-2 border-green-500 shadow-md rounded w-100 p-5 mx-auto text-red-800 px-4 my-10'>
           <img src={data?.avatar_url} alt='GitHub Profile' className='w-32 h-32 rounded-full mx-auto mb-4' />
           <h1 className='text-2xl font-bold text-center'>Followers: {data?.followers ?? 'Loading...'}</h1>
           <p className='text-center text-sm mt-2'>{data?.name || 'GitHub User'}</p>
        </div>

        <Link to='/' className='bg-blue-500 ml-120 cursor-pointer w-100 mx-auto my-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center'>
          Go to Password Generator
        </Link>
        </>
    )
}

export default Github

