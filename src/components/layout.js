import {Link, Outlet} from 'react-router-dom'
import styled from "styled-components";
import background from "../assets/home/background-home-desktop.jpg"
import {motion} from "framer-motion";

const Nav = styled.div`
    display: flex;
    justify-content: end;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    gap: 5%;
    align-items: center;
    font-family: 'Barlow Condensed', sans-serif;
    width: 55%;
    justify-content: center;
`

const Logo = styled.svg`
    position: relative;
    top: 30px;
`

const NavBar = styled.div `
position: absolute;
height: 96px;
left: 55px;
top: 40px;
right: 10px;
display: flex;
justify-content: space-between;
`
const LinkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    display: "flex",
    alignItems:"center",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "2.7px",
}

const Number = styled.p `
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    margin-right: 10px;
`

const VariantBackground = {
    initial: {
        width: '100vw',
        height: '100vh',
        opacity: '0.5'
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0,
            duration: 1,
            type: 'tween',
        },
    },
}

const VariantNavBar = {
    initial: {
        x: '-500px'
    },
    animate: {
        x: 0,
        transition: {
            delay: 1,
            duration: 1.5,
            type: 'spring',
        },
    },
}

const Layout = () => {
    return (
        <>
            <motion.div
                variants={VariantNavBar}
                initial="initial"
                animate="animate"
            >
            <NavBar>
            <Logo>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF"/>
                        <path fill="#0B0D17"
                              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                    </g>
                </svg>
            </Logo>
            <Nav>
                <Link to="/" style={LinkStyle}><Number>00</Number>HOME</Link>
                <Link to="/destination" style={LinkStyle}><Number>01</Number>DESTINATION</Link>
                <Link to="/crew" style={LinkStyle}><Number>02</Number>CREW</Link>
                <Link to="/technology" style={LinkStyle}><Number>03</Number>TECHNOLOGY</Link>
            </Nav>
            </NavBar>
            </motion.div>
            <Outlet/>
            <motion.div
                variants={VariantBackground}
                initial="initial"
                animate="animate"
            ><img src={background} alt="background" style={VariantBackground}></img></motion.div>
        </>
    )
}

export default Layout