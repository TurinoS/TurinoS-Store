import { styled } from "styled-components"
import Image from "next/image"
import logo from "../assets/TurinoS_logo.png"
import Link from "next/link"
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs"

const StyledFooter = styled.footer`
    background-color: var(--plum);
    color: var(--cream);
    display: flex;
    flex-direction: column;
` 

export default function Footer() {
    return(
        <StyledFooter>
            <div>
                <Image src={logo} alt="Logo from TurinoS Store" width={130} height={60} />
                <p>Você mais elegante é nossa missão</p>
                <div className="links">
                    <Link href='https://www.instagram.com/paulo_turino/'><BsInstagram /></Link>
                    <Link href='https://www.linkedin.com/in/paulo-turino/'><BsGithub /></Link>
                    <Link href='https://github.com/TurinoS'><BsLinkedin /></Link>
                </div>
            </div>
            <div>
                <h3>Information</h3>
                <Link href='/about'>About us</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <div>
                <h3>Discover</h3>
                <Link href='/about'>Dresses</Link>
                <Link href='/contact'>Bottons</Link>
                <Link href='/contact'>Acessories</Link>
            </div>
            <div>
                <h3>Locate Us</h3>
                <p>Rua 12 de Outubro, 1153, 19020-520, SP</p>
                <p>+55 (18) 99666-7708</p>
                <Link href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXxwnzgzLjGhTDGrlCPvsdFdnrmdtqQtLKZNVQmzcKZGRXrqMPhdTwHMhhXZbpWgCmBKg'>paulo.turino01@gmail.com</Link>
            </div>
        </StyledFooter>
    )
}