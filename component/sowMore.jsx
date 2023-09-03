"use client";
import { useState } from 'react';
import {Button} from './indx'
import { useRouter } from 'next/navigation';

export default function ShowMore (){
    

    const limitParams =new URLSearchParams(window.location.search)
    const router =useRouter();
    
    const[limit,setLimit]=useState(5);
    
    function handleClick(){
        setLimit(prev=>prev+5)
        limitParams.set("limit",limit)
        const newsearch =`${window.location.pathname}?${limitParams.toString()}`;
        router.push(newsearch);


    }

    return(      
    <div style={{width:"100%",display:"flex",padding:"10px",justifyContent:"center"}}>
        <Button title={'Show more!'} style={"exploreCarsButton"} handleClick={()=>handleClick()} />
    </div>);
}