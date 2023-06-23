// import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  // static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Prepárate para el ingreso a la carrera de medicina en Argentina con MedDesafio. Practica y evalúa tus conocimientos en biología, química, física e introducción a la medicina. Accede a preguntas actualizadas del examen y personaliza tu experiencia de estudio. ¡Prepárate para brillar en el ingreso a medicina con MedDesafio!" />
          <link rel="icon" href="/favicon.png" />
          {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://www.meddesafio.com/"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MedDesafio" />
            <meta property="og:description" content="Prepárate para el ingreso a la carrera de medicina en Argentina con MedDesafio. Practica y evalúa tus conocimientos en biología, química, física e introducción a la medicina. Accede a preguntas actualizadas del examen y personaliza tu experiencia de estudio. ¡Prepárate para brillar en el ingreso a medicina con MedDesafio!" />
            {/* <meta property="og:image" content="/images/og_image.png" /> */}

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="meddesafio.com" />
            <meta property="twitter:url" content="https://www.meddesafio.com/" />
            <meta name="twitter:title" content="MedDesafio" />
            <meta name="twitter:description" content="Prepárate para el ingreso a la carrera de medicina en Argentina con MedDesafio. Practica y evalúa tus conocimientos en biología, química, física e introducción a la medicina. Accede a preguntas actualizadas del examen y personaliza tu experiencia de estudio. ¡Prepárate para brillar en el ingreso a medicina con MedDesafio!" />
            {/* <meta name="twitter:image" content="/images/og_image.png" /> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}