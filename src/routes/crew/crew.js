import backgroundCrew from '../../assets/crew/background-crew-desktop.jpg'
import backgroundCrewMobile from '../../assets/crew/background-crew-tablet.jpg'
import {useEffect, useState} from "react";
import {Screen} from "./styles";
import {VariantNavBar} from "../styles";
import {MenuNumber, Subtitle} from "../destination/styles";
import {motion} from "framer-motion";

const Crew = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const imageUrl = windowWidth >= 700 ? backgroundCrew : backgroundCrewMobile

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    return (
        <Screen style={{backgroundImage: `url(${imageUrl})` }}>
            <>
                <motion.div variants={VariantNavBar}
                            initial="initial"
                            animate="animate">
                    <MenuNumber>02</MenuNumber>
                    <Subtitle>pick your crew</Subtitle>
                </motion.div>
            </>
        </Screen>
    )
}

export default Crew