import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CardList from "../components/cardList";
import styles from "../styles/Home.module.css";

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
            <h1>Create once. Be discovered everywhere</h1>
            <h5>
              RChain Publishing is the world&apos;s greenest NFT marketplace
            </h5>
            <div className="mt-5">
              <button
                type="button"
                className={`btn btn-md ${styles.margin} ${styles.customBtnInverted}`}
              >
                <Link href="/create">
                  <a>Upload</a>
                </Link>
              </button>
              <button
                type="button"
                className={`btn btn-md ${styles.margin} ${styles.customBtn}`}
              >
                <Link href="/marketplace">
                  <a>Explore</a>
                </Link>
              </button>
            </div>
          </div>
        </section>
        <br></br>
        <section className="text-center">
          <div className="container">
            <h2>Top drops</h2>
            <CardList />
          </div>
        </section>
        <section className={`text-center ${styles.joinCommunity}`}>
          <div className={`hero-inner`}>
            <div className="container">
              <h4>Go green and join the RChain Publishing community.</h4>
              <p>be the first to know about upcoming drops.</p>
            </div>
          </div>
        </section>
        <section className={styles.tagline}>
          <div className="hero-inner">
            <h2 className="container">
              Create, sell and buy NFTs without burning the planet
            </h2>
          </div>
        </section>
        <section className={`container ${styles.info1}`}>
          <div className={`row`}>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fa fa-leaf fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>Be green</h5>
              </div>
              <p>
                We believe that minting an NFT should use less power than making
                a cup of tea.{" "}
              </p>

              <p>
                We can do this by using the RChain blockchain, which enables a
                high degree of concurrent transactions and uses a Proof-of-stake
                consensus mechanism.
              </p>

              <p>No more nasty server farms choking the environment 24/7.</p>
              <p>
               
              <Link href="/about">
                    <a className={`btn btn-md mt-4 ${styles.margin} ${styles.customBtnColored}`}>Read more</a>
                  </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fas fa-lock fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>Be safe</h5>
              </div>
              <p>
                We are the first NFT marketplace that allows you to store your
                actual digital file alongside the NFT record ‘on chain’.
              </p>

              <p>
                This means that your files are stored in multiple locations,
                only accessible by you.
              </p>

              <p>
                You maintain full governance of your data and art, keeping it
                safe from ever being deleted or lost.
              </p>
              <p>
               
              <Link href="/about">
                    <a className={`btn btn-md mt-4 ${styles.margin} ${styles.customBtnColored}`}>Read more</a>
                  </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fa fa-globe fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>Be everywhere</h5>
              </div>
              <p>
                Use our platform to create your own marketplace on your own
                website, without any need for custom development.
              </p>

              <p>Just plug and play with our technology - it’s that simple. </p>

              <p>
                What’s more, be discovered everywhere by connecting directly to
                other artists in our ecosystem of artists and art lovers.
              </p>
              <p>
               
                  <Link href="/about">
                    <a className={`btn btn-md mt-4 ${styles.margin} ${styles.customBtnColored}`}>Read more</a>
                  </Link>
              
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.section2}`}>
          <div className={`hero-inner`}>
            <h5 className="container">At RChain Publishing we’re also walking the talk. All digital images that you see on this website are safely stored on our blockchain - disrupting the way digital file storage and content delivery is handled.</h5>
          </div>
        </section>
        <section className={`container mt-5 mb-5 ${styles.info1}`}>
          <h1>Create and sell your NFTs</h1>
          <div className={`row`}>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fa fa-wallet fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>connect wallet</h5>
              </div>
              <p>
                Choose your wallet, set it up and connect to RChain Publishing
                by clicking the wallet icon in the top right hand corner.{" "}
              </p>
            </div>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fa fa-upload fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>upload file</h5>
              </div>
              <p>
                Upload your creation (image, video, audio or 3D), give it a name
                and description, and customise further with properties
              </p>
            </div>
            <div className="col-sm-12 col-md-4 p-5">
              <i
                className={`fa fa-newspaper fa-2x ${styles.red}`}
                aria-hidden="true"
              ></i>
              <div className={`mb-4 ${styles.red}`}>
                <h5>publish to marketplace</h5>
              </div>
              <p>
                Choose where and how you want to sell your NFTs by connecting to
                various marketplaces in our ecosystem of artists and art lovers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
