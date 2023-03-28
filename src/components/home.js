import {Link} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

const Intro = styled.div`
    position: absolute;
    height: 34px;
    left: 0.11%;
    right: 15.67%;
    top: calc(50% - 34px/2 - 100px);
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #D0D6F9;
    width: 400px;
`
const MainTextBox = styled.div`
    position: absolute;
    width: 450px;
    height: 382px;
    left: 165px;
    top: 250px;
`

const MainTitle = styled.h1`
    position: absolute;
    height: 172px;
    left: -3%;
    right: 1.11%;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    color: #FFFFFF;
`

const Content = styled.p`
    position: absolute;
    height: 128px;
    left: 0.11%;
    right: 1.22%;
    top: calc(50% - 128px/2 + 127px);
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
`

const LinkToDestination = {
    textDecoration: "none",
    fontFamily: "Bellefair",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "37px",
    letterSpacing: "2px",
    color: "#0B0D17",
}

const Oval = {
    position: "absolute",
    background: "#FFFFFF",
    borderRadius: "100%",
    height: "174px",
    width: "174px",
    display: "flex",
    right: "19.56%",
    bottom: "19.56%",
    alignItems: "center",
    justifyContent: "center"
}

const VariantContent = {
    initial: {
        opacity: '0'
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2,
            type: 'spring',
        },
    },
}

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
        </>
    )
}

export default Home