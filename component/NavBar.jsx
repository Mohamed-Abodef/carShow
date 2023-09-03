import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function NavBar() {
  return (
    <nav>
      <Link href={"/"}>
        <Image src={"./logo.svg"} alt="logo" width={118} height={18} />
      </Link>
      <Link href={"/signIn"} className="signInButton">
        <div className={inter.className}>Sing In</div>
      </Link>
    </nav>
  );
}

export default NavBar;
