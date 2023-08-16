"use client";

import logo from "../assets/TurinoS_logo.png";
import Image from "next/image";
import {
  StyledHeader,
  MenuIcon,
  CartIcon,
  MenuMobile,
  MenuDesktop,
} from "@/styles/Header.style";
import { useContext, useState } from "react";
import Link from "next/link";
import { GiSamusHelmet, GiJewelCrown, GiFlowerHat } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";
import { AppContext } from "@/context/AppContext";
import Cart from "./Cart";

export default function Header() {
  const { cartPrice, cartItems } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  const openMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
      setCart(false);
    }
  };

  const openCart = () => {
    if (cart) {
      setCart(false);
    } else {
      setCart(true);
      setMenu(false);
    }
  };

  return (
    <StyledHeader>
      <MenuIcon onClick={openMenu} />

      {menu ? (
        <MenuMobile>
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
        </MenuMobile>
      ) : null}

      <MenuDesktop>
        <Link href="/men">
          <FaRedhat /> Men
        </Link>
        <Link href="/women">
          <GiFlowerHat /> Women
        </Link>
        <Link href="/jewelery">
          <GiJewelCrown /> Jewels
        </Link>
        <Link href="/electronics" className="electronic">
          <GiSamusHelmet /> Gadgets
        </Link>
      </MenuDesktop>

      <Link href="/">
        <Image
          src={logo}
          alt="Logo from TurinoS Store"
          width={130}
          height={60}
          className="img"
        />
      </Link>

      <div>
        <p>${cartPrice}</p>
        <div>
          <CartIcon onClick={openCart} />
          {cartItems != 0 && <span>{cartItems}</span>}
        </div>
      </div>

      {cart ? <Cart /> : null}
    </StyledHeader>
  );
}
