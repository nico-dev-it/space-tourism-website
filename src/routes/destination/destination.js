import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg"
import {
    MenuNumber,
    NavDestination,
    NavLink,
    RightContainer,
    Subtitle,
    VariantBackground,
    Image,
    DestinationName
} from "./styles";
import {motion} from "framer-motion";
import {useState} from "react";
import GetData from "./getData";


const Destination = () => {
    const [content, setContent] = useState('moon')
    const {data} = GetData(content)
    return (
        <>
            <>
            <MenuNumber>01</MenuNumber>
            <Subtitle>pick your destination</Subtitle>
                <img style={Image} src={require(`../../assets/destination/image-${content}.webp`)} alt="image"/>
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
                        setContent('europa')
                    }}>Europa</NavLink>
                    <NavLink onClick={() => {
                        setContent('titan')
                    }}>Titan</NavLink>
                </NavDestination>
            <DestinationName>{data.name}</DestinationName>
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