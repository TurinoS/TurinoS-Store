"use client";

import logo from "../assets/TurinoS_logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { StyledHeader, MenuIcon, Menu } from "@/styles/Header.style";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true);
    console.log(menu);
  };

  return (
    <StyledHeader>
      <div className="icons">
        <MenuIcon onClick={openMenu} />
        <BiSearchAlt2 />
      </div>

      {menu ?
        <Menu>
            <Link href='/men'>Men</Link>
            <Link href='/women'>Women</Link>
            <Link href='/jewelery'>Jewels</Link>
            <Link href='/electronics'>Gadgets</Link>
        </Menu> : 
        null
      }

      <Image src={logo} alt="Logo from TurinoS Store" width={130} height={60} />

      <div>
        <p>$0.00</p>
        <div>
          <HiShoppingCart />
          <span>0</span>
        </div>
      </div>
    </StyledHeader>
  );
}
