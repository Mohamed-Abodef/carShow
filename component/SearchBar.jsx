'use client';
import { useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import { AutoComplete } from './indx'
import {manufacturers} from '@/constant/index'
import Image from 'next/image';



function SearchBar() {

    const [manufacture,setManFacture] = useState('');
    const [model,setmodel] = useState('');
    const router =useRouter();

    const handleSearch =(e)=>{
      e.preventDefault()

      if(!manufacture || !model){
        alert("Please , write something!")
      }else{
        updateSearchParams(manufacture,model)
      }
    }

    function updateSearchParams(manufacture,model)
    {
      const searchParams = new URLSearchParams(window.location.search);

      if(manufacture){
        searchParams.set("manufacture",manufacture);
      }else{
        searchParams.delete("manufacture");
      }
      if(model){
        searchParams.set("model",model);
      }else{
        searchParams.delete("model");
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
      router.push(newPathName);

    }
    
    return (
      <form id='exploreCars' onSubmit={handleSearch} style={{padding:"10px",width:"70%",backgroundColor:"#eee",borderRadius:"10px",display:"flex",alignItems:"center"}}>
          <div style={{width:"50%",display:"flex"}}>

              <Image src={"car-icon.svg"}
              alt='car'
              width={30}
              height={15}/>

              <AutoComplete
                setstate={setManFacture}
                resourc={manufacturers}
                className={'SearchManufectureBar'}
                placeholder={'Manufecture...'}
                />

          </div>
          <div style={{width:"50%", display:"flex"}}>
            <Image src={'/car-side.svg'} alt='model' width={20} height={20}/>
            <input type='text' className='SearchManufectureBar' placeholder='Model...' onChange={(e)=>setmodel(e.target.value)}/>
          </div>
          <button type='submit' style={{border:"none", cursor:"pointer"}}>
            <Image src={'/magnifying-glass.svg'} alt='' width={30} height={30}/>
          </button>
      </form>
    )
}

export default SearchBar