"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebookF,FaTwitter,FaLinkedinIn   } from "react-icons/fa";

export default function Mainbanner() {

  useEffect(() => {
    document.getElementById("vid").play();
  }, []);

  return (
    <section className="mainbanner px-12">
      
      <video  className="vid"
          id="vid"
          autoPlay={true}
          loop={true}
          muted
          controls={false}  >
        <source src="/skin.mp4" />
      </video>
      <div>
      <div className="tp mid grid grid-cols-2">
        <div className="bl">
          <h1>
            <span>technology</span>
            <br /> a sustainable future
          </h1>
        </div>
        <div className="br p1">
          <p>
            Wind Power is a global investment
            <br />
            company with a focus on energy
            <br />
            transition and EGS related initiatives.
          </p>
        </div>
      </div>
      <div className="btm grid grid-cols-3 p1">
        <div>
          <p>10700 Tallahassee Dr, Frisco, TX 75035</p>
        </div>
        <div><p>sales@singletonet.com</p></div>
        <div className="grid grid-cols-3">
          <p>+1 (412) 539-7166</p>
          <ul className="sc-list">
            <li><Link href={'/'}><FaFacebookF /></Link></li>
            <li><Link href={'/'}><FaTwitter /></Link></li>
            <li><Link href={'/'}><FaLinkedinIn /></Link></li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
