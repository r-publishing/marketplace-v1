import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="RPC Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      RPC Marketplace
    </main>
      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
