import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg"
import {VariantBackground} from "./styles";
import {motion} from "framer-motion";


const Destination = () => {
    return (
        <>
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