"use client";

import Image from "next/image";
import {useRef} from "react";
import { Roboto } from "next/font/google";
import { Button } from "./indx";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});



function hero() {
  function click() {
    console.log("It work");
  
    a.current.click()
  }
  
  
  const a =useRef();
  return (
    <div
      style={{
        overflow: "hidden",

        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div className="hero__text-container">
        <div className={roboto.className}>
          <h1 className="hero__title">
            Find, book, or rent a car - quickly and easily!
          </h1>
          <p>
            streamline your car rental expenrience with our effortiess booking
            process.
          </p>
        </div>
        <Button
          style="exploreCarsButton"
          title="explore cars"
          handleClick={click}
        />
        <a href="#exploreCars" ref={a} />
      </div>
      <div className="hero__image-container">
        <Image src={"/hero-bg.png"}  alt="" fill />
        <Image src={"/hero.png"} alt="" fill />
      </div>
    </div>
  );
}

export default hero;
