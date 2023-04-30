import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg"
import backgroundMobile from "../../assets/destination/background-destination-tablet.jpg"
import {
    Content,
    DestinationName,
    Divider,
    ExtraInfoData,
    ExtraInfoDistance,
    ExtraInfoTitle,
    ExtraInfoTravel,
    Image,
    MenuNumber,
    NavDestination,
    NavLink,
    RightContainer,
    Subtitle,
    Screen,
    VariantBackground,
    VariantContent,
    VariantImage
} from "./styles";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import GetData from "./getData";
import {VariantNavBar} from "../styles";


const Destination = () => {
    const [content, setContent] = useState('moon')
    const {data} = GetData(content)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 770 ? backgroundDestination : backgroundMobile;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <motion.div
            variants={VariantBackground}
            initial="initial"
            animate="animate"
        >
        <Screen style={{backgroundImage: `url(${imageUrl})` }}>
            <>
                <motion.div variants={VariantNavBar}
                            initial="initial"
                            animate="animate">
                    <MenuNumber>01</MenuNumber>
                    <Subtitle>pick your destination</Subtitle>
                </motion.div>
                <motion.div variants={VariantImage}
                            initial="initial"
                            animate="animate" >
                <img style={Image} src={require(`../../assets/destination/image-${content}.webp`)} alt="image"/>
                </motion.div>
                </>
            <RightContainer>
                <motion.div variants={VariantImage}
                            initial="initial"
                            animate="animate">
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
                <Content>{data.description}</Content>
                <Divider></Divider>
                </motion.div>
                <motion.div variants={VariantContent}
                            initial="initial"
                            animate="animate">
                <ExtraInfoDistance>
                    <p style={ExtraInfoTitle}>AVG. DISTANCE</p>
                    <p style={ExtraInfoData}>{data.distance}</p>
                </ExtraInfoDistance>
                <ExtraInfoTravel>
                    <p style={ExtraInfoTitle}>EST. TRAVEL TIME</p>
                    <p style={ExtraInfoData}>{data.travel}</p>
                </ExtraInfoTravel>
                </motion.div>
            </RightContainer>
        </Screen>
    </motion.div>
    )
}

export default Destination