import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SimpleTransition from '../Simple/SimpleTransition'

function DynamicMain() {
  const params = useParams()
  const baseUrl = "page-transitions/" + params.transition
  return (
    <SimpleTransition>
      <div className='flex flex-wrap gap-4'>
        <h1 className='w-screen bg-[var(--accent)] h-10 text flex justify-center items-center uppercase border-b-2 border-black'>MAIN PAGE</h1>
        <Link
          className='w-40 text-black no-underline bg-[var(--accent)] border-2 border-black rounded-full p-5 flex justify-center items-center font-medium'
          to={`page/1`} state={{ baseUrl }}>Page 1</Link>
        <Link
          className='w-40 text-black no-underline bg-[var(--accent)] border-2 border-black rounded-full p-5 flex justify-center items-center font-medium'
          to={`page/2`} state={{ baseUrl }}>Page 2</Link>
        <Link
          className='w-40 text-black no-underline bg-[var(--accent)] border-2 border-black rounded-full p-5 flex justify-center items-center font-medium'
          to={`/page-transitions`}>Main Page</Link>
      </div>
    </SimpleTransition>
  )
}

export default DynamicMain
