import bg from '@/public/showcar.jpg'
import Image from 'next/image'

export default function CarInfo({car,handleOpen,isOpend}){
    let lock = false

    return(
        isOpend && (<div className="overLay" onClick={()=>!lock&&handleOpen(false)}>
                 <div className="carInfo" onMouseEnter={()=>lock =true} onMouseLeave={()=>lock=false}>
                    <span className="x" onClick={()=>handleOpen(false)}>
                        X
                    </span>
                    <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
                    
                        <div className="mainPic" style={{backgroundImage:`url(${bg.src})`}}>
                            <Image src={'/hero.png'} alt='' width={350} height={200}/>               
                        </div>
                    </div>



                    <div style={{width:"100%"}}>
                    <h2 style={{margin:'10px 0px' ,textTransform:"capitalize"}}>{`${car.make} ${car.model}`}</h2>
                    {
                        Object.entries(car).map(([key,value])=>(<div key={key} className='data'>
                            <span>{key.split('_').join(' ')}</span>
                            <span>{value}</span>
                        </div>))
                    }
                    </div>
                </div>
        </div>)
    )
}