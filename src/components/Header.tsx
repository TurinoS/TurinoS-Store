"use client";

import logo from "../assets/TurinoS_logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { StyledHeader, MenuIcon, Menu } from "@/styles/Header.style";
import { useState } from "react";
import Link from "next/link";
import { GiSamusHelmet, GiJewelCrown, GiFlowerHat } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";

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

      {!menu ?
        <Menu>
            <Link href='/men'><FaRedhat /> Men</Link>
            <Link href='/women'><GiFlowerHat /> Women</Link>
            <Link href='/jewelery'><GiJewelCrown /> Jewels</Link>
            <Link href='/electronics'><GiSamusHelmet /> Gadgets</Link>
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
