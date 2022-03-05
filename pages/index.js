import Head from 'next/head'
import Image from 'next/image'

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
            <h1>RChain Publishing Marketplace</h1>
            <h5>Publish once and be discovered everywhere!</h5>
            <div>
              <button type="button" className={`btn btn-md btn-danger ${styles.margin}`}>Upload file</button>
              <button type="button" className={`btn btn-md btn-outline-danger ${styles.margin}`}>Browse NFTs</button>
            </div>
        </div>
    </section>
    <br></br>
    <section>
      <div className="container">
        <h2>Latest NFTs</h2>
        <CardList />
      </div>
    </section>
    <section className={styles.tagline}>
        <div className="hero-inner">
            <h2 className="container">Publish once and be discovered everywhere!</h2>
        </div>
    </section>
    <section className={`container ${styles.info1}`}>
    <div className={`row`}>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-wallet fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Connect Wallet</h5></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-upload fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Upload File</h5></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
            <div className="col-sm-12 col-md-4">
                <i className={`fa fa-newspaper fa-2x ${styles.red}`} aria-hidden="true"></i>
                <div className={styles.red}><h5>Publish to Marketplace</h5></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
            </div>
        </div>
    </section>
    <section className={`${styles.section2}`}>
        <div className={`row container ${styles.info1}`}>
            <div className="col-md-6">
              <h2>Store Files onchain</h2>
            </div>
            <div className="col-md-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
        </div>
    </section>
    <section className={styles.moreinfo}>
        <div className="hero-inner">
            <h2 className="container">More information</h2>
        </div>
    </section>
    </main>
      
    </div>
  )
}
