import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg"
import {MenuNumber, NavDestination, NavLink, RightContainer, Subtitle, VariantBackground} from "./styles";
import {motion} from "framer-motion";
import {useState} from "react";
import getData from "./getData";


const Destination = () => {
    const [content, setContent] = useState('moon')
    const {data} = getData(content)
    return (
        <>
            <>
            <MenuNumber>01</MenuNumber>
            <Subtitle>pick your destination</Subtitle>
            </>
            <RightContainer>
                <NavDestination>
                    <NavLink onClick={() => {
                        setContent('moon')
                    }}>Moon</NavLink>
                    <NavLink onClick={() => {
                        setContent('mars')
                    }}>Mars</NavLink>
                    <NavLink onClick={() => {
                        setContent('mars')
                    }}>Europa</NavLink>
                    <NavLink onClick={() => {
                        setContent('mars')
                    }}>Titan</NavLink>
                </NavDestination>
            </RightContainer>
            <motion.div
                variants={VariantBackground}
                initial="initial"
                animate="animate"
            ><img src={backgroundDestination} style={VariantBackground} alt="background"/></motion.div>
        </>
    )
}

export default Destination