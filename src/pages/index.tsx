import Head from 'next/head'
import Image from 'next/image'
// import Loading from '../components/Loading'
import { headerText } from '../utils/text'
import { SkeletonFeedbackIndexMobile, SkeletonFeedbackIndexDesktop } from '../components/SkeletonFeedback'
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement, useEffect, useState } from 'react'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { TitleSection } from '@/components/TitleSection'
import { getExperiences, getInfoMe } from '@/services/getDataFirebase'
import { CardWorkExperience } from '@/components/CardWorkExperience'


function Home() {
  const [dataExperiences, setDataExperiences] = useState([])
  const [dataMe, setDataMe] = useState([])
  const [loading, serLoading] = useState(true)
  

  useEffect(() => {
    const fetchExperiences = async () => {
      serLoading(true)
      const data = await getExperiences()
      setDataExperiences(data)
    }

    const fetchInfoMe = async () => {
      serLoading(true)
      const data = await getInfoMe()
      setDataMe(data)
      serLoading(false)
    }

    fetchExperiences()
    fetchInfoMe()
  }, [])

  if(loading) return <div>
    <div className='hidden lg:block'>
      <SkeletonFeedbackIndexDesktop/>
    </div>
    <div className='lg:hidden'>
      <SkeletonFeedbackIndexMobile/>
    </div>
  </div>


  const socialMedia = [
    {
      href: dataMe.links.linkedin,
      name: 'LinkedIn',
      icon: <IconBrandLinkedin/>
    },
    // {
    //   href: dataMe.links.instagram,
    //   name: 'Instagram',
    //   icon: instagramIcon
    // },
    {
      href: dataMe.links.github,
      name: 'GitHub',
      icon: <IconBrandGithub/>
    },
  ]

  return (

    <div>
      <header className=''>
        <div className='flex flex-col-reverse md:flex-row md:justify-between mt-10'>
          <div className='md:w-[65%] lg:-[73%] items-start flex flex-col gap-4'>
              <h1 className='font-bold text-4xl'>👋🏼{" "}{headerText.title}{' '}{dataMe.name}.</h1>
              <h2 className='text-gray-50 dark:text-gray-800 text-opacity-80 font-medium'>I am working as {dataMe.position}{" "}in{" "}
              <a href={dataMe.webWork} rel="noreferrer" target="_blank" className='text-gray-50 duration-200
              hover:text-opacity-75 dark:text-gray-800 text-opacity-60'>{dataMe.work}</a>
              </h2>
              <h3 className='text-base text-gray-100 dark:text-dark-800 text-opacity-80'>{dataMe?.description?.english}</h3>
          </div>
          <div className='flex md:flex-col md:justify-center md:items-start sm:items-center gap-3 mb-7'>
            <Image alt="image" src={dataMe.img} height={190} width={190}/> 
            <div className='md:flex hidden items-end md:items-start mx-auto w-1/2 flex-col gap-2 mt-3 md:mt-1 '>
              {
                socialMedia.map(social => (
                    <a href={social.href}  target="_blank" rel="noreferrer" className="flex items-center  
                    hover:scale-105 duration-200 
                    gap-2 text-white dark:text-dark-800 text-xl
                    sm:text-base text-opacity-60 hover:text-white" key={social.name}>
                        {social.icon}
                        {social.name}
                    </a>
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex  md:hidden md:flex-col gap-4  w-[90%] md:my-0 my-5'>
            {
              socialMedia.map(social => (
                  <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center 
                  hover:scale-105 duration-200 
                  gap-2 text-white dark:text-dark-800 text-base text-opacity-60 hover:text-white" key={social.name}>
                      {social.icon}
                      {social.name}
                  </a>
              ))
            }
          </div>

        <div className='mt-10 md:mt-[0px]'>
          <p className='mb-3 text-gray-50 dark:text-dark-800 text-opacity-80'>My favorite tech</p>
          <div className='flex gap-3 items-center md:w-[70%]'>
            <div className='flex flex-wrap gap-5'>
              {headerText.tecn.map((tecn) => (
                  <div className='flex items-center gap-1' key={tecn.name}>
                    {!tecn.svg ? <Image alt="image" src={`/icons/${tecn.icon}.svg`} height={18} width={18}/>: tecn.icon}
                    <p className='text-xs text-white dark:text-dark-900 text-opacity-50'>{tecn.name}</p>
                  </div>  
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Section work Experience */}
      <section className='mt-14'>
        <TitleSection title="Work Experience" subtitle="My work experience so far."/>


        <div className='flex flex-col gap-5 mt-10' >
        {dataExperiences.map(work => (
          <div key={work.company + work.position}>
            <CardWorkExperience data={work}/>
          </div>
        ))}
        
        </div>
        
    </section>
      
    {/* <section className='mt-14'>
        <TitleSection title="Projects" 
        subtitle={"I created a few projects to learn more about the technologies I use. You can check them out here. Let me know what you think!"}/>

        <div className='flex flex-col gap-4 mt-10 '>
          {currentProjects.map((data, index) => (
              <ProjectsCardsIndex projects={data} key={data.id}/>
          ))}

        </div>

        <Link href={'/projects'}>
          <button type='button' 
          className='flex gap-1 text-white dark:text-dark-900 hover:translate-x-1 duration-300 hover:duration-200
          text-opacity-70 text-[13px] items-center mt-5'>
            See all projects
            <FiArrowRight />
          </button>
        </Link>

    </section> */}


    </div>
  )
}


export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};
