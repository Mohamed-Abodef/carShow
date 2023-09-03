'use client';
import { calculateCarRent } from "@/utills";
import { useState } from "react";
import Image from "next/image";
import { Button, CarInfo } from "./indx";


export default function CarCard({car}){

    const [isOpend,setIsOpend] = useState(false)

    const {city_mpg ,year,make,model,transmission,drive}=car

    const carRent = calculateCarRent(city_mpg,year)

    return <div className="carCard">
        <h2>
            {make} {model}
        </h2>
        <span style={{display:'inline-block',alignSelf:"flex-start",height:"1px"}}>
            $
        </span>
        <span style={{fontWeight:"bold",fontSize:'30px',color:"black"}}>
            {carRent}
        </span>
        <span style={{alignSelf:"end"}}>
            /day
        </span>
        <div style={{margin:'9px',width:"100%",height:"200px",position:"relative"}}>
            <Image src={"/hero.png"} alt="car image" fill />
        </div>
        <div className="option" style={{width:"100%" ,display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex" , flexDirection:"column",alignItems:"center"}}>
            <Image src={"/steering-wheel.svg"} alt="" width={20} height={20}/>
            <span>
                {transmission === "a" ? "Automatic":"Manual"}
            </span>
        </div>
        <div style={{display:"flex" , flexDirection:"column",alignItems:"center"}}>
            <Image src={"/tire.svg"} alt="" width={20} height={20}/>
            <span>
                {drive.toUpperCase()}
            </span>
        </div>
        <div style={{display:"flex" , flexDirection:"column",alignItems:"center"}}>
            <Image src={"/gas.svg"} alt="" width={20} height={20}/>
            <span>
                {city_mpg}MPG
            </span>
        </div>
        </div>
        <Button
        style="exploreCarsButton"
        title="View More"  
        handleClick={()=>setIsOpend(true)}
          />
        <CarInfo car={car} isOpend={isOpend} handleOpen={setIsOpend}/>
    </div>
}