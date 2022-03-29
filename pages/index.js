import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

import CardList from '../components/cardList';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RChain Publishing Marketplace</title>
        <meta name="description" content="RPC Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
    <section className={styles.hero}>
        <div className="hero-inner">
          <h1>
          <ReactTypingEffect 
            text={`Create Once. Be discovered everywhere`}
            speed={200}
          /></h1>
            <h5>RChain Publishing is the world's greenest NFT marketplace</h5>
            <div>
              <button type="button" className={`btn btn-md btn-danger ${styles.margin}`}><Link href="/create"><a>Upload</a></Link></button>
              <button type="button" className={`btn btn-md btn-outline-danger ${styles.margin}`}><Link href="/marketplace"><a>Explore</a></Link></button>
            </div>
        </div>
    </section>
    <br></br>
    <section>
      <div className="container">
        <h2>Top drops</h2>
        <CardList />
      </div>
    </section>
    <section className={styles.tagline}>
        <div className="hero-inner">
            <h2 className="container">
              <ReactTypingEffect
                text={`Create, sell and buy NFTs without burning the planet`}
                speed={200}
                />
            </h2>
        </div>
    </section>
    <section className={`container ${styles.info1}`}>
    <div className={`row`}>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-smile fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Be green</h5></div>
                <p>We believe that minting an NFT should use less power than making a cup of tea. </p>

<p>We can do this by using the RChain blockchain, which enables a high degree of concurrent transactions and uses a Proof-of-stake consensus mechanism.</p>

<p>No more nasty server farms choking the environment 24/7.</p>
<p>
<button type="button" className={`btn btn-md btn-outline-danger ${styles.margin}`}><Link href="/about"><a>Read more</a></Link></button>
</p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fas fa-lock fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Be safe</h5></div>
                <p>We are the first NFT marketplace that allows you to store your actual digital file alongside the NFT record - ‘on chain’.</p>

<p>This means that your files are stored in multiple locations, only accessible by you.</p>
  
  <p>You maintain full governance of your data and art, keeping it safe from ever being deleted or lost.</p>
<p>
<button type="button" className={`btn btn-md btn-outline-danger ${styles.margin}`}><Link href="/about"><a>Read more</a></Link></button>
</p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-globe fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Be everywhere</h5></div>
                <p>Use our platform to create your own marketplace on your own website, without any need for custom development.</p>
                  
                <p>Just plug and play with our technology - it’s that simple. </p>

<p>What’s more, be discovered everywhere by connecting directly to other artists in our ecosystem of artists and art lovers.</p>
<p>
<button type="button" className={`btn btn-md btn-outline-danger ${styles.margin}`}><Link href="/about"><a>Read more</a></Link></button>
                </p>
            </div>
        </div>
    </section>
    <section className={`${styles.section2}`}>
        <div className={`hero-inner`}>
        <h2 className="container">
              <ReactTypingEffect
                text={`Create and sell your NFTs`}
                speed={200}
                />
            </h2>
        </div>
    </section>
    {/* <section className={styles.moreinfo}>
        <div className="hero-inner">
            <h2 className="container">More information</h2>
        </div>
    </section> */}
    <section className={`container ${styles.info1}`}>
    <div className={`row`}>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-wallet fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Connect Wallet</h5></div>
                <p>Choose your wallet, set it up and connect to RChain Publishing by clicking the wallet icon in the top right hand corner. </p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-upload fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Upload File</h5></div>
                <p>Upload your creation (image, video, audio or 3D), give it a name and description, and customise further with properties</p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-newspaper fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Publish to Marketplace</h5></div>
                <p>Choose where and how you want to sell your NFTs by connecting to various marketplaces in our ecosystem of artists and art lovers.
                </p>
            </div>
        </div>
    </section>
    </main>
      
    </div>
  )
}
