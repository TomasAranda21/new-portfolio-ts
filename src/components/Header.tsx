import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navigation } from '../routes'
import { useRouter } from 'next/router';
import Image from 'next/image';
import useDarkMode from '../hook/useDarkMode';
import { Burger, Tooltip } from '@mantine/core';
import { IconMoon } from '@tabler/icons-react';
import { IconSunFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export const changeTheme = (theme : string, router: any) => {
    if (theme === "dark") {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}  

export const getPath = (data : string, router: any) => {
    if(data === '/'){
        const home = router.pathname === '/'
        return home
    }else{
        const pages = router.pathname.includes(data)
        return pages
    }
}


export const HeaderMain = () => {
    const router = useRouter()
    const darkMode = useDarkMode()



  return (
    <>
        <nav className='flex items-center justify-between text-white py-8'>
            <div className='flex gap-5'>
                {Navigation.map(routes => (
                    <Link href={routes.href} key={routes.name}
                        className={`${getPath(routes.href, router) 
                        ? "text-white dark:text-dark-900 bg-dark-200 scale-105 dark:bg-dark-50/10 bg-opacity-50 " 
                        : "text-white dark:text-dark-900 text-opacity-50 dark:text-opacity-50"}

                        hover:bg-dark-200 duration-200 hover:duration-150 cursor-pointer dark:hover:bg-dark-50/10  hover:bg-opacity-50 
                        p-[5px] px-[14px] rounded-md`}>
                        {routes.name}
                    </Link>
                ))}   
            </div>

            <div className='flex gap-5 items-center'>
                {/* <a href={dataMe.resume} target="_blank" rel="noreferrer"
                className='bg-dark-200 hover:ring-[1.3px] hover:ring-white dark:hover:ring-dark-900 hover:ring-opacity-40 dark:hover:ring-opacity-50
                dark:bg-dark-50/20 dark:bg-opacity-30 dark:hover:bg-opacity-50 rounded-md p-1.5
                px-4 cursor-pointer hover:bg-dark-300 text-white dark:text-dark-900 duration-200 hover:duration-150 text-medium transition'>
                    Resume
                </a> */}
                
                {!darkMode ? 
                    <button type='button' onClick={() => changeTheme('dark', router)}
                    className='dark:bg-dark-50 dark:bg-opacity-30 dark:hover:bg-opacity-50 hover:ring-[1.3px] hover:ring-opacity-40 dark:hover:ring-opacity-50 hover:bg-dark-300 hover:ring-white dark:hover:ring-dark-900 cursor-pointer
                    w-full bg-dark-200 p-1.5 rounded-md duration-200 ease-in-out flex items-center justify-center'>
                        <IconSunFilled className='h-[22px] w-[22px] text-center dark:text-dark-900 font-bold'/>
                    </button>
                    :
                    <button type='button' onClick={() => changeTheme('light', router)}
                    className=' dark:bg-opacity-30 dark:hover:bg-opacity-50 hover:ring-[1.3px] 
                    hover:ring-opacity-40 dark:hover:ring-opacity-50 hover:bg-dark-300 hover:ring-white
                    dark:hover:ring-dark-900 cursor-pointer
                    w-full bg-dark-200 dark:bg-dark-50/20 p-1.5 rounded-md duration-200 ease-in-out flex items-center justify-center '>
                        <IconMoon className='h-[18px] w-[18px] text-center dark:text-dark-900'/>  
                    </button>
                }
        </div>

        </nav>
    </>
  )
}



export const HeaderResponsive = () => {
    const router = useRouter()
    const [isHovering, setIsHovering] = useState(false);
    const [open, setIsOpen] = useState(false)
    const darkMode = useDarkMode()
    const [opened, { toggle }] = useDisclosure(false);

    useEffect(() => {
        opened ? setIsOpen(true) : setIsOpen(false) 
    }, [opened])

  return (
    <>
        <nav className='flex flex-col justify-between text-white'>

            <div className='w-full flex justify-between 
            items-center fixed top-0 left-0 px-4 sm:px-5 py-5 bg-dark-800 dark:bg-gray-100 
            z-50 border-b-[1px] border-white dark:border-dark-50/10 border-opacity-10'>
                <div className='flex items-center gap-5'>
                {!darkMode ? 
        
                    <button type='button' onClick={() => changeTheme('dark', router)}
                    className='dark:bg-dark-50 dark:bg-opacity-30 dark:hover:bg-opacity-50 hover:ring-[1.3px] hover:ring-opacity-40 dark:hover:ring-opacity-50 hover:bg-dark-300 hover:ring-white dark:hover:ring-dark-900 cursor-pointer
                    w-full bg-dark-200 p-1.5 rounded-md duration-200 ease-in-out flex items-center justify-center'>
                        <IconSunFilled className='h-[24px] w-[24px] text-center dark:text-dark-900 font-bold'/>
                    </button>
                    :
                    <button type='button' onClick={() => changeTheme('light', router)}
                    className=' dark:bg-opacity-30 dark:hover:bg-opacity-50 hover:ring-[1.3px] 
                    hover:ring-opacity-40 dark:hover:ring-opacity-50 hover:bg-dark-300 hover:ring-white
                    dark:hover:ring-dark-900 cursor-pointer
                    w-full bg-dark-200 dark:bg-dark-50/20 p-1.5 rounded-md duration-200 ease-in-out flex items-center justify-center '>
                        <IconMoon className='h-[22px] w-[22px] text-center dark:text-dark-900'/>  
                    </button>
                }

                {/* <div className=''>
                    <button 
                    type='button' className=' w-[30px] h-[30px]  hover:ring-[1.3px] ring-dark-300 duration-200 rounded-full flex items-center'
                    >
                        <Image src="/icons/english.png" width="30px" height="30px"/>
                    </button>
                </div> */}

                </div>

                    <button  className={open ? 'buttonMobileOpen' : 'buttonMobile'} type='button' onClick={() => setIsOpen(!open)} >
                        <div className='bg-white dark:bg-dark-900'></div>
                        <div className='bg-white dark:bg-dark-900'></div>
                        <div className='bg-white dark:bg-dark-900'></div>
                    </button>
                    <Burger opened={open} color={!darkMode ? '#fff' : '#000'}onClick={toggle} />
            </div>

             <div className={`${open ? 'top-14 opacity-100' : ' top-14 opacity-0 -z-50'} fixed bg-dark-800 dark:bg-gray-100 shadow transition-all duration-300
             z-50 w-full border-b border-white ease-in-out
             border-opacity-10 left-0 px-1.5 py-7 pb-3`}>
                <div className='flex flex-col gap-5 w-full '>
                    {Navigation.map(routes => (
                        <Link href={routes.href} key={routes.name} onClick={() => setIsOpen(false)}
                            className={`${getPath(routes.href, router)
                            ? "text-white dark:text-dark-900  " 
                            : "text-white dark:text-dark-900 text-opacity-50 dark:text-opacity-50 "}
                            ${routes.name !== 'Blog' && 'border-b'} border-white border-opacity-20
                            p-1.5 px-[14px] text-lg`}>
                            {routes.name}
                        </Link>
                    ))}   
                    {/* <a href={dataMe.resume} target="_blank" rel="noreferrer"
                    className=' ring-[1.3px] ml-[10px] ring-white dark:ring-dark-900 ring-opacity-40 dark:ring-opacity-50
                    dark:bg-dark-50/20  dark:bg-opacity-50 rounded-md p-1.5 text-center w-fit mt-2
                    px-4 cursor-pointer bg-dark-300 text-white dark:text-dark-900 duration-150 text-medium transition'>
                        Resume
                    </a> */}
                </div>

            </div>

        </nav>
    </>
  )
}

