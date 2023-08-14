"use client";

import logo from "../assets/TurinoS_logo.png";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import {
  StyledHeader,
  MenuIcon,
  Menu,
} from "@/styles/Header.style";
import { useContext, useState } from "react";
import Link from "next/link";
import { GiSamusHelmet, GiJewelCrown, GiFlowerHat } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";
import { AppContext } from "@/context/AppContext";

export default function Header() {
  const { cartPrice, cartItems } = useContext(AppContext)
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    if(menu) {
      setMenu(false);
    } else {
      setMenu(true);
    };
  };

  return (
    <StyledHeader>
      
      <MenuIcon onClick={openMenu} />

      {menu ? (
        <Menu>
          <Link href="/men">
            <FaRedhat /> Men
          </Link>
          <Link href="/women">
            <GiFlowerHat /> Women
          </Link>
          <Link href="/jewelery">
            <GiJewelCrown /> Jewels
          </Link>
          <Link href="/electronics">
            <GiSamusHelmet /> Gadgets
          </Link>
        </Menu>
      ) : null}

      <Image src={logo} alt="Logo from TurinoS Store" width={130} height={60} />

      <div>
        <p>${cartPrice}</p>
        <div>
          <HiShoppingCart />
          <span>{cartItems}</span>
        </div>
      </div>
    </StyledHeader>
  );
}
