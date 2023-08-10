import logo from "../assets/TurinoS_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import StyledHeader from "@/styles/Header.style";

export default function Header() {
    return(
        <StyledHeader>
            <div className="icons">
                <GiHamburgerMenu />
                <BiSearchAlt2 />
            </div>

            <Image src={logo} alt="Logo from TurinoS Store" width={130} height={60} />
            
            <div>
                <p>$0.00</p>
                <div>
                    <HiShoppingCart />
                    <span>0</span>
                </div>
            </div>
        </StyledHeader>
    )
}