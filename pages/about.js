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
import Steve from "../public/Steve.jpg";
import Ru from "../public/RU-mug.jpg";
import Bill from "../public/Bill 2.jpg";
import Darryl from "../public/Darryl_Neudorf_BW.png";
import Sanda from "../public/Sanda.JPG";

export default function about() {
  return (
    <>
      <div className={` ${styles.wrapper}`}>
        <section className={`container ${styles.aboutRpcSection}`}>
          <div className={`row`}>
            <div className={`col-md-6`}>
              <h2 className={`${styles.red}`}>About RChain Publishing</h2>
              <p>
                At RChain Publishing we are on a mission to empower the art and
                collectibles world to become conscious travellers on their
                Web3.0 journey and join together to create a more sustainable
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
                users store self sovereign digital assets (or data?) on chain.
                It will be the backbone of data transactions in Web 3.0.
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
              <Image src={logo} alt="wrapkit" layout="responsive" />
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

        <section className={`${styles.tableSection}`}>
          <div className={`container`}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">.</th>
                  <th scope="col">
                    <b>KWh per transaction</b>
                  </th>
                  <th scope="col">Transactions per second</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Bitcoin</th>
                  <td>473</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">Ethereum</th>
                  <td>31</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">Tezos</th>
                  <td>0.00003</td>
                  <td>52</td>
                </tr>
                <tr>
                  <th scope="row" className={`${styles.green}`}>
                    RChain
                  </th>
                  <td>0.00003</td>
                  <td>28000</td>
                </tr>
              </tbody>
            </table>
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

        <section className={`container ${styles.safeSection}`}>
          <div className={`row`}>
            <h2 className={styles.red}>A safe haven</h2>
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

        <section className={`container ${styles.teamSection}`}>
          <div className="container">
            <div className={`row ${styles.blog}`}>
              <h1 className="center mx-auto text-center py-4">
                Management Team
              </h1>

              <div className="col-md-12">
                <div
                  id="blogCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className={`invisible ${styles.carouselIndicators}`}>
                    <li
                      data-target="#blogCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image
                                src={Steve}
                                alt={"mug"}
                                width={100}
                                height={100}
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Steve Ross-Talbot
                              </h3>
                              <span className={`${styles.post}`}>
                                Chief Executive Officer
                              </span>
                            </div>

                            <div className={`${styles.desc}`}>
                              <p>
                                RChain board member, ex W3C chair, Professor of
                                Distributed Computing at Kingston University
                                (London) and deep Web3.0 expertise.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image
                                src={Ru}
                                alt={"mug"}
                                width={100}
                                height={100}
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Ru Van Vuuren
                              </h3>
                              <span className={`${styles.post}`}>
                                Chief Operating Officer
                              </span>
                            </div>
                            <div className={`${styles.desc}`}>
                              <p>
                                Business analyst with over 20 years of
                                international experience and keen professional
                                photographer.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image
                                src={Bill}
                                alt={"mug"}
                                width={100}
                                height={100}
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Bill Kuentje
                              </h3>
                              <span className={`${styles.post}`}>
                                Chief Technology Officer
                              </span>
                            </div>
                            <div className={`${styles.desc}`}>
                              <p>
                                Bill has over 30 years of experience in
                                software, spanning multiple industries,
                                countries and technologies.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image
                                src={Darryl}
                                alt={"mug"}
                                width={100}
                                height={100}
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Darryl Neudorf
                              </h3>
                              <span className={`${styles.post}`}>
                                Chief Security Officer
                              </span>
                            </div>
                            <div className={`${styles.desc}`}>
                              <p>
                                Platinum selling, Grammy nominated music
                                producer. Five year blockchain music start-up
                                strategist.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image
                                src={Sanda}
                                alt={"mug"}
                                width={100}
                                height={100}
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Sanda Ringsma
                              </h3>
                              <span className={`${styles.post}`}>
                                Chief Marketing Officer
                              </span>
                            </div>
                            <div className={`${styles.desc}`}>
                              <p>
                                Two decades plus of experience with positioning
                                new or complex offerings for start-ups,
                                scale-ups and enterprises and a deep care for
                                the planet.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className={`${styles.ourTeam}`}>
                            <div className={`${styles.pic}`}>
                              <Image src={placeholder} alt={"mug"} />
                            </div>
                            <div className={`${styles.teamContent}`}>
                              <h3 className={`${styles.title}`}>
                                Greg Meredith
                              </h3>
                              <span className={`${styles.post}`}>
                                Board Member
                              </span>
                            </div>
                            <div className={`${styles.desc}`}>
                              <p>
                                President of the RChain Cooperative,
                                mathematician and discoverer of the
                                rho-calculus.
                              </p>
                              <p>
                                {" "}
                                <Link href="/">
                                  <a
                                    className={`fab fa-linkedin ${styles.red}`}
                                  ></a>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.aboutRpcSection}`}>
          <div className={`row`}>
            <div className={`col-md-6`}>
              <h2 className={styles.red}>What is RChain?</h2>
              <p>
                At RChain Publishing we are on a mission to empower the art and
                collectibles world to become conscious travellers on their
                Web3.0 journey and join together to create a more sustainable
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
                users store self sovereign digital assets (or data?) on chain.
                It will be the backbone of data transactions in Web 3.0.
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
              <div className={styles.rchainlogo}>
                <Image
                  src={rchainLogo}
                  alt="wrapkit"
                  className="img-fluid rounded-circle"
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
