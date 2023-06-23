import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Navigation } from '../routes'

export const FooterMain = () => {
    const router = useRouter()

    const getPath = (data: string) => {
        if(data === '/'){
            const home = router.pathname === '/'
            return home
        }else{
            const pages = router.pathname.includes(data)
            return pages
        }
    }
  return (
    <footer className='border-t border-dark-50 grid grid-cols-3 py-10 mt-20 '>

        <nav className='flex flex-col gap-2 '>
            {Navigation.map(routes => (
                <Link href={routes.href} key={routes.name} className={`${getPath(routes.href) ? 'text-white dark:text-dark-900' : "text-white text-opacity-60 dark:text-opacity-60 dark:text-dark-900 dark:hover:text-dark-900 hover:text-white"}`}>
                    {routes.name}
                </Link>
            ))}
        </nav>

        <div className='flex flex-col gap-2 '>
            {/* {
                socialMedia.map(social => (
                    <a href={social.href} key={social.name} className="flex items-center gap-2 text-white text-opacity-60 hover:text-white">
                        {social.icon}
                        {social.name}
                    </a>

                ))
            } */}
        </div>

        <div>
            {/* <Image src={"/firma.png"} width={200} height={200}/> */}
        </div>
        
    </footer>
  )
}