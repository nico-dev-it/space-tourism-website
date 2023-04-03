import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {
    Intro,
    MainTextBox,
    MainTitle,
    Content,
    LinkToDestination,
    Oval,
    VariantContent,
    VariantBackground
} from "./styles";
import background from "../../assets/home/background-home-desktop.jpg";

const Home = () => {
    return (
        <>
            <motion.div
                variants={VariantContent}
                initial="initial"
                animate="animate"
            >
            <MainTextBox>
                <Intro>So, you want to travel to</Intro>
                <MainTitle>SPACE</MainTitle>
                <Content>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
                    not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                    this world experience!</Content>
            </MainTextBox>
            <motion.div whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        style={Oval}><Link to="/destination" style={LinkToDestination}>Explore</Link></motion.div>
            </motion.div>
            <motion.div
                variants={VariantBackground}
                initial="initial"
                animate="animate"
            ><img src={background} alt="background" style={VariantBackground}></img></motion.div>
        </>
    )
}

export default Home