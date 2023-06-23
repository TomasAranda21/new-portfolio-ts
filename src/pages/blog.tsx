import React, { ReactElement } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/layouts/MainLayout'

const Blog = () => {
  return (
    <div className='h-screen -mb-40 -mt-32'>
        <div className='h-full justify-center flex items-center flex-col '>
        <h1 className='text-center text-white dark:text-black text-3xl sm:text-5xl
        font-sans lg:text-6xl '>Great things comming soon.</h1>

        <Link href={'/'} className='mt-14 border dark:border-dark-500 py-4 w-3/4 sm:w-2/3 sm:text-lg text-center
        text-white dark:text-black dark:hover:bg-neutral-800 hover:bg-neutral-200
        font-semibold rounded-sm hover:text-neutral-800 dark:hover:text-white 
        duration-200 hover:duration-150'>
          Back to home
        </Link>
    </div>
    </div>
  )
}


Blog.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    );
  };

export default Blog