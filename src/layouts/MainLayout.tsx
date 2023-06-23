import { FooterMain } from '@/components/FooterMain'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export interface childrenProps {
    children: JSX.Element | JSX.Element[]
    heightScreen?: boolean 
 }

export const MainLayout = ({children, heightScreen=false}: childrenProps) => {
  return (
    <div className='w-full'>
        <Header/>
        <div className={`text-black h-full pt-10 
        w-full p-3 md:p-6 lg:px-0 lg:w-[70%] mx-auto relative`}>
            {children}
        </div>
        <FooterMain/> 
    </div>
  )
}