import { AppContext, AppInitialProps} from 'next/app';
import AppLayoutProps from "next/app";
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { MantineWrapper } from '@/components/MantineWrapper';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps ,
}: any) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return <SessionProvider session={pageProps.session}>
    { getLayout( 
    <>
     <Head>
      <title>Tomás Aranda</title>
     </Head>
     <Analytics />
     <MantineWrapper>
      <Component {...pageProps} />
     </MantineWrapper>
    </>
  )}
  </SessionProvider>
};
    
export default MyApp;


