import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWrapper } from './DynamicTransitionContext'

function DynamicPage2() {
  const { SimpleTransition } = useWrapper();
  const location = useLocation();
  const baseUrl = location.state.baseUrl
  return (
    <SimpleTransition>
      <div className='flex flex-wrap gap-4'>
        <h1 className='w-screen bg-[var(--accent)] h-10 text flex justify-center items-center uppercase border-b-2 border-black'>Page 2</h1>
        <Link
          className='w-40 text-black no-underline bg-[var(--accent)] border-2 border-black rounded-full p-5 flex justify-center items-center font-medium'
          to={`/${baseUrl}/page/1`} state={{ baseUrl }}>Page 1</Link>
        <Link
          className='w-40 text-black no-underline bg-[var(--accent)] border-2 border-black rounded-full p-5 flex justify-center items-center font-medium'
          to={`/${baseUrl}`} state={{ baseUrl }}>Main</Link>
      </div>
    </SimpleTransition>
  )
}

export default DynamicPage2
