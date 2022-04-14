import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/About.module.css";
import placeholder from "../public/IMG_6440.jpg";
import logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON BLK TEXT TRNS BCKGRND.png";
import tree from "../public/—Pngtree—tree silhouette vector for cutting_5107644.png";
import rchainLogo from "../public/RChain_Icon_Red_512px-2.png";
import earth from "../public/PngItem_3275048.png";
import castle from "../public/PngItem_1096095.png";
import Steve from "../public/srt.png";
import Ru from "../public/ru.png";
import Bill from "../public/bill.png";
import Darryl from "../public/darryl.png";
import Sanda from "../public/IMG_1331.JPG";
import David from "../public/david.png";
import SteveH from "../public/Steve_Henley_Headshot-closeup-GrayScale.jpg";
import theo from "../public/theo.png";
import greg from "../public/greg.png";

export default function about() {
  return (
    <>
      <div className={` ${styles.wrapper}`}>
        <div className={`container my-5 ${styles.update}`}>
          <h5>Watch the latest RChain Publishing videos</h5>
          <div className={`${styles.prLink}`}>
            <Link
              className={`${styles.prLink}`}
              href="https://drive.google.com/file/d/1PnhbGoUtf4aVPkbjd63fwq_c0oZCaqNx/view?usp=sharing"
            >
              <a>NFT marketplace demo</a>
            </Link>
            <br></br>
            <Link
              className={`${styles.prLink}`}
              href="https://streamable.com/znuusy"
            >
              RDrive demo
            </Link>
          </div>
        </div>
        <section className={`container ${styles.aboutRpcSection}`}>
          <div className={`row`}>
            <div className={`col-md-6`}>
              <h2 className={`${styles.red}`}>About RChain Publishing</h2>
              <br></br>
              <p>
                At RChain Publishing we are on a mission to empower the art and
                collectibles world to become conscious travellers on their Web
                3.0 journey and join together to create a more sustainable
                world.
              </p>

              <p>
                We believe that creating, selling and buying NFTs should be
                accessible to everyone in a way that doesn’t hurt the planet.
                The way we do this is by using the RChain blockchain, which
                achieves a faster transaction speed than any other blockchain,
                while consuming far less energy.
              </p>

              <p>
                We are building the first truly green NFT marketplace for
                creators and admirers of art that uses less power than making a
                cup of tea when minting an NFT. No carbon offsetting. No coin
                mining. No hiding the true environmental impact.
              </p>

              <p>
                Extending beyond NFTs, this marketplace will serve as a
                launchpad for a larger, decentralised platform which will let
                users store self sovereign digital data on chain. It will be the
                backbone of data transactions in Web 3.0.
              </p>

              <p>
                In the spirit of Web3.0, we have set RChain Publishing up as a
                cooperative governance community. With a decentralised ownership
                and governance, our members control, own, and develop the
                open-source platform and help create the future of RChain
                Publishing.
              </p>
            </div>
            <div className={`col-md-6`}>
              <Image
                src={logo}
                alt="wrapkit"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.planetSection}`}>
          <div className={`container ${styles.padding}`}>
            <div className={`row`}>
              <div className={`col-md-6`}>
                <div className={styles.tree}>
                  <Image src={tree} alt="wrapkit" layout="responsive" />
                </div>
              </div>
              <div className={`col-md-6`}>
                <h2 className={``}>For the planet</h2>
                <p>
                  Unlike other marketplaces that claim to be “eco-friendly”, we
                  are using the RChain blockchain. This uses a number of
                  innovative methods from computational mathematics, blockchain,
                  and programming to achieve faster transactions at scale
                  without burning the planet.
                </p>
                <p>
                  RChain provides linear scale as the network grows, higher
                  degrees of concurrency across executing transactions and a
                  consensus mechanism based on Proof of Stake as opposed to an
                  energy hungry Proof of Work mechanism. These three things are
                  what enables RChain to deliver both internet scale and climate
                  sustainability at the same time.
                </p>
                <p>
                  We believe that minting an NFT should use less power than
                  making a cup of tea and we can do this because of the way that
                  the RChain blockchain was designed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`mt-5 container text-center ${styles.safeSection}`}>
          <div className={`row`}>
            <h2 className={`mx-auto ${styles.red}`}>A safe haven</h2>
            <p>
              Right now, NFTs are just a record of sale and point to your actual
              file, which is stored “somewhere else”. But what if that
              “somewhere else” was to go down? Losing work is any artist’s worst
              nightmare.
            </p>

            <p>
              Our solution provides you with the ability to store your files
              (any file type and any size) “on chain”. This means that your
              files are stored in multiple locations, only accessible by you and
              you maintain full governance of your data and art. Your NFT is
              safe from ever being deleted or lost.
            </p>

            <p>
              If you then choose to mint and sell it as an NFT, you can do this
              with only a few clicks. Our smart contracts will ensure that you
              are compensated with every sale, forever.
            </p>
          </div>
        </section>

        <section className="mt-5 my-5">
          <div className="text-center mb-5">
            <div className="container">
              <div className="row pt-4">
                <div className="col-md-3 box-shadow shadow-lg">
                  <div
                    className={`card mb-4 box-shadow shadow-lg ${styles.cardShadow}`}
                  >
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Bitcoin</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>
                          <b className="font-weight-bold">473 KWh</b>{" "}
                          transaction per hour
                        </li>
                        <li>5 transaction per second</li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className={`card mb-4 box-shadow shadow-lg ${styles.cardShadow}`}
                  >
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Ethereum</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>
                          <b className="font-weight-bold">31 KWh</b> transaction
                          per hour
                        </li>
                        <li>15 transaction per second</li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
                <div className={`col-md-3`}>
                  <div className={`card mb-4 box-shadow ${styles.mainCard}`}>
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">RChain</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>
                          <b className="font-weight-bold">0.00003 KWh</b>{" "}
                          transaction per hour
                        </li>
                        <li>28000 transaction per second</li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className={`card mb-4 box-shadow shadow-lg ${styles.cardShadow}`}
                  >
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Tezos</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>
                          <b className="font-weight-bold">0.00003 KWh</b>{" "}
                          transaction per hour
                        </li>
                        <li>52 transaction per second</li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <em>
              * The amount of energy used to make a cup of tea is roughly
              0.0408kWh (Source: Uswitch)
            </em>
          </div>
        </section>
        <section className={`${styles.createSection}`}>
          <div className={`container ${styles.padding}`}>
            <div className={`row`}>
              <div className={`col-md-6`}>
                <h2 className={``}>Create once. Be discovered everywhere</h2>
                <p>
                  With the rollout of our future marketplace platform, you can
                  create a marketplace of your own on your website without any
                  need for custom development. Just plug and play with our
                  technology.
                </p>
                <p>
                  You can also connect your marketplace with each and every
                  other marketplace in our ecosystem. This makes you
                  discoverable everywhere where our platform is used, exposing
                  you to markets previously unreachable. It will also open the
                  door to revenue streaming opportunities if other artists’ are
                  discovered when using your marketplace.
                </p>
              </div>
              <div className={`col-md-6`}>
                <div className></div>
                <Image
                  src={earth}
                  alt="wrapkit"
                  className="img-fluid rounded-circle"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.teamSection}`}>
          <div className="team-grid">
            <div className="container">
              <div className={`${styles.intro}`}>
                <h2 className="text-center">Meet the team</h2>
              </div>
              <div
                className={`row ${styles.people} d-flex justify-content-center`}
              >
                <div
                  className={`col-sm-6 col-md-4 col-lg-3 my-3 ${styles.item}`}
                >
                  <div className={`${styles.box}`}>
                    <Image
                      className={`img-fluid`}
                      src={Steve}
                      alt={"mug"}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Steve Ross-Talbot</h3>
                      <p className={`${styles.title}`}>
                        Chief Executive Officer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-sm-6 col-md-4 col-lg-3 my-3 ${styles.item}`}
                >
                  <div className={`${styles.box}`}>
                    <Image
                      className={`img-fluid`}
                      src={Bill}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Bill Keuntje</h3>
                      <p className={`${styles.title}`}>
                        Chief Technology Officer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-sm-6 col-md-4 col-lg-3 my-3 ${styles.item}`}
                >
                  <div className={`${styles.box}`}>
                    <Image
                      src={Ru}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Ruhan van Vuuren</h3>
                      <p className={`${styles.title}`}>
                        Cheif Operating Officer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-sm-6 col-md-4 col-lg-3 my-3 ${styles.item}`}
                >
                  <div className={`${styles.box}`}>
                    <Image
                      src={Darryl}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Darryl Neudorf</h3>
                      <p className={`${styles.title}`}>
                        Chief Strategy Officer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`row ${styles.people} d-flex justify-content-center`}
              >
                <div
                  className={`col-sm-6 col-md-4 col-lg-3 my-3 ${styles.item}`}
                >
                  <div className={`${styles.box}`}>
                    <Image
                      src={Sanda}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Sanda Ringsma</h3>
                      <p className={`${styles.title}`}>
                        Chief Marketing Officer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4 col-lg-3 my-3 ${styles.item}`}>
                  <div className={`${styles.box}`}>
                    <Image src={David} alt={"mug"} layout="responsive" />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>David Asamonye</h3>
                      <p className={`${styles.title}`}>Senior Software Engineer</p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4 col-lg-3 my-3 ${styles.item}`}>
                  <div className={`${styles.box}`}>
                    <Image
                      src={theo}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Theo Hallinus</h3>
                      <p className={`${styles.title}`}>
                        Senior Software Engineer
                      </p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4 col-lg-3 my-3 ${styles.item}`}>
                  <div className={`${styles.box}`}>
                    <Image
                      src={greg}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Greg Meredith</h3>
                      <p className={`${styles.title}`}>Board Member</p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4 col-lg-3 mt-5 ${styles.item}`}>
                  <div className={`${styles.box}`}>
                    <Image
                      src={SteveH}
                      alt={"mug"}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={`${styles.cover}`}>
                      <h3 className={`${styles.name}`}>Steve Henley</h3>
                      <p className={`${styles.title}`}>Board Member</p>
                      <div className={`${styles.social}`}>
                        <a href="#">
                          <i className="fab fa-facebook-official"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`container text-center ${styles.aboutRpcSection}`}>
          <h2 className={styles.red}>What is RChain?</h2>
          <p>
            RChain is a PoS (Proof-of-Stake) blockchain platform for distributed
            applications. Intelligent, concurrent execution throughout the
            network unlocks the blockchain&apos;s potential for transactions of
            every type and scale. It is capable of processing anything between
            40,000 to 100,000 transactions per second. This is much faster than
            transaction speeds on the majority of the bigger blockchains.
          </p>
          <Link href="https://rchain.coop/">
            <a className={`btn btn-md mt-4 ${styles.customBtnColored}`}>
              Read more
            </a>
          </Link>
        </section>
      </div>
    </>
  );
}
