import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";
import logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON WHT TEXT TRNS BACKGRND horizontal tight.png";

export default function footer() {
  return (
    <div className={`${styles.footer}`}>
     <footer>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12">
                <ul className={styles.about}>
                <Image src={logo} alt={"logo"} width={200} height={50} />    
                     <li>
                        <p>&copy; 2022 RChain Publishing Cooperative</p>
                      </li>
                           
                     
                 </ul>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <ul className={styles.contact}>
                     <span>Links</span>    
                     <li>
                       <Link href="/about">
                       <a>About us</a>
                       </Link>
                      
                      </li>
                           
                      <li>
                       <Link href="/marketplace">
                       <a>Explore</a>
                       </Link>
                      
                      </li>
                           
                      <li>
                       <Link href="/about">
                       <a>Meet the team</a>
                       </Link>
                      
                      </li>
                      <li>
                       <Link href="#">
                       <a>Careers</a>
                       </Link>
                      
                      </li>
                           
                      <li>
                       <Link href="#">
                       <a>Investors</a>
                       </Link>
                      
                      </li>
                      <li>
                       <Link href="#">
                       <a>FAQs</a>
                       </Link>
                      
                      </li>
                     
                </ul>
            </div>
       
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                <ul className={styles.social}>
                   <span>Follow our journey</span>    
                   <li>
                     <Link href="#">
                     <a><i className="fab fa-discord fa-2x"></i></a>
                     </Link>
                   </li>
                   <li>
                     <Link href="#">
                     <a><i className="fab fa-linkedin fa-2x"></i></a>
                     </Link>
                   </li>
                   <li>
                     <Link href="#">
                     <a><i className="fab fa-telegram fa-2x"></i></a>
                     </Link>
                   </li>
                   <li>
                     <Link href="#">
                     <a><i className="fab fa-github fa-2x"></i></a>
                     </Link>
                   </li>
                 </ul>
            </div>
       </div> 
    </div>
</footer>
    </div>
  );
}
