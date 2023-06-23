import { ReactElement, useEffect, useState } from "react"
import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image"
import Link from "next/link"
import { IconArrowNarrowRight, IconArrowsShuffle } from "@tabler/icons-react";
import { ButtonCustom } from "@/components/Buttons";
import { CardMaterias } from "@/components/CardMaterias";
import { useRouter } from "next/router";
// import { materias } from "@/utils/json";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Skeleton } from "@mantine/core";
import { useWidth } from "@/utils/helpers";

export interface Materias {
  name: string;
  image: string
}
export default function Home() {
  const router = useRouter()
  const [materias, setMaterias] = useState<Materias[]>()
  const [loading, setLoading] = useState<boolean>()
  const width = useWidth()
  
  useEffect(() => {
    const getDataQuiz = async () => {
      setLoading(true)
      let arrDocs : Materias[] = []
      try {
        const querySnapshot = await getDocs(collection(db, 'materias'));
        querySnapshot.forEach((doc) => {
          arrDocs.push(doc.data() as Materias)
        });
        setMaterias(arrDocs)
      } catch (error) {
          console.log(error)
      }
      setLoading(false)
    }
      getDataQuiz()
   }, [])

  return (
    <div className="">
          <div className="flex justify-around  gap-20 my-5 lg:my-10   ">
            <div className="">
              <div className="my-3 lg:mt-10">
                <h1 className="text-xl text-neutral-700 font-medium mb-4">¡Bienvenido a MedDesafio!</h1>
                <h2 className="text-4xl xl:text-6xl font-bold mb-4">Prepárate para tu ingreso a Medicina.</h2>
                <p className="text-neutral-700">Supera el ingreso a Medicina con éxito: Tu camino hacia una carrera de excelencia médica comienza aquí, con MedDesafio.</p>
              </div>
              <div className="flex items-center gap-3 mt-10 lg:mt-20 sm:w-1/2 lg:w-[80%] xl:w-2/3 2xl:w-1/2">
               <ButtonCustom icon={<IconArrowNarrowRight/>} text="Comenzar ahora" onClick={() => router.push(`/quiz/quizAlAzar`)} />
              </div>
            </div>

          <div className="hidden lg:block">
            <Image src={'/banner_home.png'} height={600} width={1000} alt="banner_home" 
            className=" object-container z-0"/>
          </div>
          </div>

          <div className="mt-32">
            <h3 className="text-2xl font-semibold sm:text-center">Desafía tus conocimientos en las cuatro materias claves.</h3>
            
            <div className="grid xs:justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 items-center w-full">
                { !loading ?
                  materias?.map(item => (
                    item.name !== 'quizAlAzar' && <Link href={`/quiz/${item.name}`} key={`${item.name}012adasd`}>
                      <CardMaterias item={item}/>
                    </Link>
                  ))
                :
                [0, 1, 3, 4].map((_, idx) => (
                  <div key={`${idx}001334`} className="flex justify-center">
                    <Skeleton visible={loading} radius={8} height={ 260} width={'100%'}></Skeleton>
                  </div>
                  ))
                }
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 justify-center items-center">
            <p className="text-lg w-full md:w-3/4 xl:w-1/2 font-medium text-left md:text-center">O también puedes hacer un cuestionario con preguntas al azar de las cuatro materias.</p>
            <ButtonCustom 
            icon={<IconArrowsShuffle/>}
            textSize="lg" width={'w-full md:w-3/4 xl:w-1/2'} text="Preguntas al azar" 
            onClick={() => router.push(`/quiz/quizAlAzar`)} typeButton = {3}/>
          </div>
    </div>
  );
}



Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};
