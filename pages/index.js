import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/MainPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  )
}
