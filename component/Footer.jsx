import Image from "next/image";
import { footerLinks } from "@/constant";
import Link from "next/link";

function Footer() {

  const links = footerLinks.map((ele)=>{
    return (
      <div>
        {ele.title}
        {
          ele.links.map((lin)=>{
            return <Link href={lin.url} className="Link">{lin.title}</Link>
          })
        }
      </div>
    )
  })

  return <>
  <div className="Footer">
    <div>
      <Image src={'/logo.svg'} alt="logo" width={118} height={18}/>
      <p>carHub 2023<br/>
        All rights reserved &copy;
      </p>
    </div>
    {links}
  </div>
  <div style={{textAlign:"center"}}>
  @2023 CarsHub. All Rights Reseved Privacy Policy
  </div>
  </>
}

export default Footer;
