import React from 'react'

export const TitleSection = ({title, subtitle}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-4xl font-bold capitalize'>{title}</h2>
        <p className='text-white text-opacity-60 dark:text-dark-900 ml-[2px]'>{subtitle}</p>
    </div>
  )
}
