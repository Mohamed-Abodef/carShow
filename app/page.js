
import Image from "next/image";
import { Button, CarCard, CustomFilter , Hero , SearchBar ,ShowMore } from "@/component/indx";
import "./globals.css";
import { fetchCar } from "@/utills";

export default async function Home({searchParams}) {
  
  const cars =await fetchCar(searchParams.manufacture||''.toLowerCase(),searchParams.model||''.toLowerCase(),searchParams.limit||5);



  
  
  const isCarsEmpty = !Array.isArray(cars) || cars.length<1 || !cars;
  return (
    <main>
      <Hero />
      <div style={{marginTop:"20px" ,display:"flex",flexWrap:"wrap"}}>
        <h1 style={{width:"100%",marginBottom:"0px",fontSize:"40px"}}>Cars Catalogue</h1>
        <p style={{marginTop:"5px",width:"100%"}}>Explore the cars you might like</p>
        <div style={{display:'flex' ,justifyContent:'space-between',width:'100%'}}>
        <SearchBar />
        <div style={{width:"30%"}}>
        </div>
        </div>
      </div>
      {!isCarsEmpty?(
        <section>
          <div style={{display:"flex" ,flexWrap:"wrap" ,justifyContent:"start",gap:"7px",margin:"10px 0px"}}>
              {cars.map((car,indx)=><CarCard key={indx} car={car}/>)}
          </div>
          <ShowMore/>
        </section>
      ):(
        <div>
          <h2>
          Oops ,we don't have
          </h2>
        </div>
      )
    }
    </main>
  );
}
