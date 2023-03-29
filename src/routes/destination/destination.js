import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg"
import {VariantBackground, NavDestination, RightContainer, NavLink} from "./styles";
import {motion} from "framer-motion";
import {useState} from "react";
import getData from "./getData";


const Destination = () => {
    const [content, setContent] = useState('moon')
    const {data} = getData(content)
    return (
        <>
        <RightContainer>
            <NavDestination>
                <NavLink onClick={() => {setContent('moon')}}>Moon</NavLink>
                <NavLink onClick={() => {setContent('mars')}}>Mars</NavLink>
            </NavDestination>
        </RightContainer>
            <motion.div
                variants={VariantBackground}
                initial="initial"
                animate="animate"
            >

                <img src={backgroundDestination} style={VariantBackground} alt="background"/></motion.div>

        </>
    )
}

export default Destination