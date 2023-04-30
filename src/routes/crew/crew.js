import backgroundCrew from '../../assets/crew/background-crew-desktop.jpg'
import backgroundCrewMobile from '../../assets/crew/background-crew-tablet.jpg'
import {useEffect, useState} from "react";
import {CrewName, CrewRole, NavCrew, NavCrewLink, Screen, CrewBio, CrewImage} from "./styles";
import {VariantNavBar} from "../styles";
import {MenuNumber, Subtitle} from "../destination/styles";
import {motion} from "framer-motion";
import getData from "./getData";

const Crew = () => {
    const [content, setContent] = useState('douglas-hurley')
    const {data} = getData(content)

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
                <NavCrew>
                    <NavCrewLink onClick={() => {
                        setContent('douglas-hurley')
                    }}>●</NavCrewLink>
                    <NavCrewLink onClick={() => {
                        setContent('mark-shuttleworth')
                    }}>●</NavCrewLink>
                    <NavCrewLink onClick={() => {
                        setContent('victor-glover')
                    }}>●</NavCrewLink>
                    <NavCrewLink onClick={() => {
                        setContent('anousheh-ansari')
                    }}>●</NavCrewLink>
                </NavCrew>

                <CrewRole>{data.role}</CrewRole>
                <CrewName>{data.name}</CrewName>
                <CrewBio>{data.bio}</CrewBio>
                <img style={CrewImage} src={require(`../../assets/crew/image-${content}.webp`)}/>
            </>
        </Screen>
    )
}

export default Crew