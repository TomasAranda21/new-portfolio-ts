import Image from 'next/image'
import React from 'react'

export const CardWorkExperience = ({data}) => {
  return (
    <div className='flex flex-col gap-2 p-4 xs:p-5 hover:scale-105 duration-300
    border border-opacity-20 border-white dark:border-dark-900 rounded-md'>
        <div className='flex sm:flex-row flex-col justify-between'>
            <div className='flex gap-3 items-start'>
              <div className='w-[45px] h-[45px] overflow-hidden relative border border-dark-200 rounded-full'>
                  <Image alt="image" src={data.logo ? data.logo : "/image/logo.png"} width={45} height={45} className='rounded absolute'/>
              </div>

                <div className='flex flex-col gap-1'>
                    <p className='text-white dark:text-dark-900 font-medium text-sm sm:text-base'>{data.position}</p>
                    <p className='text-white hidden xs:block
                    dark:text-dark-900 text-opacity-60 text-sm'>{data.company} • <span className='text-white 
                    dark:text-dark-900 text-opacity-80 font-medium text-sm'>{data.name.spanish}</span></p>
                </div>
            </div>
            <p className='text-white xs:hidden mt-1
              dark:text-dark-900 text-opacity-60 text-sm'>{data.company} • <span className='text-white 
              dark:text-dark-900 text-opacity-80 font-medium text-sm'>{data.name.spanish}</span></p>

              <p className='text-white dark:text-dark-900 dark:text-opacity-90 mt-3 sm:mt-0
              dark:font-normal text-opacity-70 font-thin text-sm'>
               {/* {data.fromDateAndToDate}{' '}{data.currently && <span>• {moment(data.date).startOf('days').fromNow().split(' ').splice(0, 2).join(' ')}</span>} */}
              </p>
        </div>
          {typeof data.description.spanish === 'object' ?
          <>
          <p className='text-white dark:text-dark-900 text-opacity-80'>{data.description.spanish[0]}</p>
          <p className='text-white dark:text-dark-900 text-opacity-80'>{data.description.spanish[1]}</p>
          </>
          :
          <p className='text-white dark:text-dark-900 text-opacity-80'>{data.description.spanish}</p>
          }

        <div className='flex items-center gap-1.5 mt-1 text-white/50 flex-wrap'>
          {data.tech.map((item,index) => (
            <p key={`12${index}rp`} className="text-xs">•{' '}{item}</p>
          ))}
        </div>
    </div>
  )
}

 