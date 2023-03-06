import Data from '../../../../data/blogs.json'
import React from 'react'

export default function Blogs() {
  return (
    <div>
        <div>
            Blogs
        </div>
        <div className='p-2'>
            {Data.map(data=>(
                <div key={data.id}className='bg-gray-500 mt-3 y-2' >
                    <h1>{data.title}</h1>
                    <p>{data.author}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
