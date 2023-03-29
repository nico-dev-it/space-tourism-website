import {Link, Outlet} from 'react-router-dom';
import {motion} from "framer-motion";
import {LinkStyle, Logo, Nav, NavBar, Number, VariantBackground, VariantNavBar} from "./styles";

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
        </>
    )
}

export default Layout