import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'

import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <div >
      <Head>
        <title>CRUD Next.JS</title>
        <meta name="description" content="CRUD de usuarios em Next.JS" />
        <link rel="icon" href="./images/crud.png" />
      </Head>

      <main >

        <HomePage/>

      </main>


    </div>
  )
}
