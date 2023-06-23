import React, { useEffect } from 'react'
import { Sidebar } from '@/components/AdminSidebar'
import AdminHeader from '@/components/AdminHeader'
import { Wrapper } from '@/components/Wrapper'
import { AdminResponsiveHeader } from '@/components/AdminResponsiveHeader'
import { signOut as signOutFirebse } from "firebase/auth";
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { auth } from '@/utils/firebase'

interface childrenProp {
    children : JSX.Element
}

export const AdminLayout = ({children}: childrenProp) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuthState = () => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log('Usuario no autenticado');
          signOut()
          signOutFirebse(auth)
          router.push('/login')
        }
      });
    };
  checkAuthState();
}), []

  return (
    <div className=''>
      <Sidebar />
      <div className='relative lg:pr-5 responsiveWidth
      max-w-full sm:overflow-hidden  h-full min-h-screen'>
          <AdminHeader/>
          <AdminResponsiveHeader />
          <div className='mt-6 md:mt-[50px] pb-16 py-7 md:pb-10 md:pt-10'>
            <Wrapper>
              {children}
            </Wrapper>
          </div>
      </div>
    </div>
  )
}
