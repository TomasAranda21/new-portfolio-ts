import React from 'react'
import { Skeleton } from '@mantine/core';

export const SkeletonFeedbackProjects = () => {
  return (
    <>
      <Skeleton  height={400} width={300} mb="xl" />
      <Skeleton height={400 } width={300}  mb="xl" />
      <Skeleton height={400} width={300}  mb="xl" />
      <Skeleton height={400} width={300}  mb="xl" />
    </>
  );
}

export const SkeletonFeedbackIndexMobile = () => {
    return (
      <>
        <Skeleton  height={180} circle width={180} mb="xl" />
        <div className='mt-10'>
                <Skeleton height={10 } width={'100%'}  mb="md" />
                <Skeleton height={10 } width={'85%'}  mb="md" />
                <Skeleton height={10 } width={'70%'}  mb="md" />
                <Skeleton height={10 } width={'76%'}  mb="md" />
                <Skeleton height={10 } width={'80%'}  mb="md" />
                <Skeleton height={10 } width={'60%'}  mb="xl" />
            </div>

            <div className='mt-32'>
            <Skeleton height={25 } width={'45%'}  mb="xl" />
            <Skeleton height={10 } width={'30%'}  mb="xl" />

            <div className='mt-10'>
                <Skeleton height={400 } width={'100%'}  mb="xl" />
            </div>
        </div>
      </>
    );
}


export const SkeletonFeedbackIndexDesktop = () => {
    return (
      <div className=''>
        <div className='grid grid-cols-3 gap-20'>
            <div className=' col-span-2 mt-5'>
            <Skeleton height={40 } width={'75%'}  mb="xl" />
            <Skeleton height={10 } width={'100%'}  mb="sm" />
            <Skeleton height={10 } width={'14%'}  mb="xl" />

            <div className='mt-10'>
                <Skeleton height={10 } width={'100%'}  mb="md" />
                <Skeleton height={10 } width={'85%'}  mb="md" />
                <Skeleton height={10 } width={'70%'}  mb="md" />
                <Skeleton height={10 } width={'76%'}  mb="md" />
                <Skeleton height={10 } width={'80%'}  mb="md" />
                <Skeleton height={10 } width={'60%'}  mb="xl" />
            </div>
            </div>
            
            <div>
                <Skeleton height={190} circle width={10} mb="xl" />
                <div className='flex justify-center flex-col items-center'>
                    <Skeleton height={15 } width={'40%'}  mb="xl" />
                    <Skeleton height={15 } width={'40%'}  mb="xl" />
                </div>
            </div>
        </div>
        <div className='mt-32'>
            <Skeleton height={25 } width={'45%'}  mb="xl" />
            <Skeleton height={10 } width={'30%'}  mb="xl" />

            <div className='mt-10'>
                <Skeleton height={400 } width={'100%'}  mb="xl" />
            </div>
        </div>
      </div>
    );
}