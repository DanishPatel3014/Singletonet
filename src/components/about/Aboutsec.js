"use client";
import Image from "next/image";
import React from "react";
import ReactCurvedText from "react-curved-text";
import { BsArrow90DegDown, BsArrowUpRight } from "react-icons/bs";

export default function Aboutsec() {
  return (
    <section className="ab-sec py-36">
     
      <div className="container  mx-auto">
        <div className="abtop m-h h-wrp mb-12">
          <h1>
            We're All About Epic Gaming
            <br /> Vibes It's All We Live For
          </h1>
          <h2>
            <span>*</span> Serving Adventures <span>*</span>
          </h2>
          <h1>That Rock Your Socks Off!</h1>
        </div>
        <div className="abbtm">
          <div className="sid p1">
            <h5>
              <span>"</span> We are led by our CEO,{" "}
              <Image width={80} height={80} src={"/img/sid.jpg"} alt="ceo" />{" "}
              Sid Ahmed, an innovative and visionary leader, who has worked for
              some of the world's top companies, including German automotive
              leaders, Cern and Bang and Olufsen - where he attained a global
              patent as a young up and coming engineer. <span>"</span>
            </h5>
          </div>
          <div className="abdiv grid grid-cols-2 gap-12">
            <div className="p1 ">
              <p className="my-6">
                Mariusz's expertise in engineering and his passion for
                innovation led him to revolutionise the way the industry
                approaches 3d printing from the process to the materials used.
                His knowledge and skill in this area has been instrumental in
                the success of WOLF, and his vision for the future continues to
                inspire us.
              </p>
              <p>
                Backed by this culture of thorough Research and Development,
                here at Metahero we are committed to using the latest technology
                and techniques to create innovative solutions for our clients.
                We are always striving to stay ahead of the curve and are
                constantly exploring new ideas to push the boundaries of what is
                possible.
              </p>
            </div>

            <div class="countwrap ">
            <div className="team-wrp flex items-center gap-8 p1 my-6">
                <p>Current team size:</p>
           <ul className="tm-lst">
              <li><Image src={'/img/hamza.jpg'} width={60} height={60} alt="hamza"/></li>
              <li><Image src={'/img/hassan.jpg'} width={60} height={60} alt="hassan"/></li>
              <li><Image src={'/img/da1.jpg'} width={60} height={60} alt="danish"/></li>
              <li><Image src={'/img/safeer.jpg'} width={60} height={60} alt="safeer"/></li>
              <li><div className="gbg"><p>55+</p></div></li>
              
            </ul>
           </div>
              <div className="flex items-center gap-8">
              <div className="countbx m2 p1">
                <h2>2000<span>+</span></h2>
                <p>Scanned persons in our chambers</p>
              </div>
              <div className="countbx m2 p1">
                <h2>50<span>+</span></h2>
                <p>Companies used our scans</p>
              </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="abtRoundMain">
        <div className="roundedTextAbt">
          <ReactCurvedText
            width={240}
            height={240}
            cx={120}
            cy={120}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={true}
            text="- Single To Net - Single To Net - Single To Net - Single To Net - Single To Net - Single To Net"
            textProps={{ style: { fontSize: 12.7 } }}
            textPathProps={{ style: { fill: "#fff" } }}
            tspanProps={{
              style: { color: "#fff", textTransform: "uppercase" },
            }}
            ellipseProps={null}
            svgProps={null}
          />
        </div>
        <BsArrow90DegDown
          className=""
          style={{
            transform: "translateY(-150px)",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}
