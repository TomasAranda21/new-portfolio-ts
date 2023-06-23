import { FooterMain } from '@/components/FooterMain'
import { HeaderMain, HeaderResponsive } from '@/components/Header'
import { useWidth } from '@/hook/useWidth'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'

export interface childrenProps {
    children:  ReactNode
 }

export const MainLayout : React.FC<childrenProps> = ({children}) => {
  const width = useWidth()

  useEffect(() => {
    if (localStorage.theme === "light") {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className='bg-dark-800 dark:bg-gray-50'>
      <div className="md:w-[95%] lg:w-[70%] xl:w-[55%] 
      2xl:w-[43%] 3xl:w-[40%] px-4 sm:px-5 lg:px-0 mx-auto pt-10 text-white dark:text-dark-900">
        {width > 650 ? <HeaderMain/> :
        <HeaderResponsive/>}
        
        <div className='mt-14'>
          {children}
        </div>
        <FooterMain/>
        </div>
    </div>
  )
}