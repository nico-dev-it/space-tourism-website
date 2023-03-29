import styled from "styled-components";

export const VariantBackground = {
    width:'100vw',
    height: '100vh',
    initial: {
        opacity: '0.5'
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0,
            duration: 1,
            type: 'tween',
        },
    },
}

export const NavDestination = styled.div `
    position: absolute;
    left: 0%;
    right: 35.84%;
    top: 0%;
    bottom: 92.8%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
`

export const RightContainer = styled.div `
    position: absolute;
    width: 445px;
    height: 472px;
    right: 10%;
    top: 35%;
`

export const NavLink = styled.button `
    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 2.700000047683716px;
    text-align: left;
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    background: none;
    border: none;
    &:hover {
    cursor: pointer;
    }
`

export const Subtitle = styled.h1 `
    position: absolute;
    width: 382px;
    height: 34px;
    left: 7%;
    top: 212px;
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const MenuNumber = styled.h1 `
    position: absolute;
    left: 2%;
    right: 93.19%;
    top: 212px;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    opacity: 0.25;
`

export const Image = {
    position: "absolute",
    width: "445px",
    height: "445px",
    left: "7%",
    top: "40%"
}

export const DestinationName = styled.p `
    position: absolute;
    left: 4%;
    top: 10%;
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
`
export const Content = styled.p `
    position: absolute;
    height: 128px;
    left: 4%;
    right: 0.22%;
    top: calc(50% - 80px + 20px);
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
`

export const Divider = styled.div`
    height: 1px;
    width: 444px;
    left: 4%;
    top: 382px;
    border-radius: 0px;
    position: absolute;
    top: 80.93%;
    bottom: 18.86%;
    background: #383B4B;
`

export const ExtraInfoDistance = styled.div `
    position: absolute;
    left: 4%;
    top: 87.08%;
`
export const ExtraInfoTravel = styled.div `
    position: absolute;
    left: 50%;
    right: 22.58%;
    top: 87.08%;
    bottom: 0%;
`

export const ExtraInfoTitle = {
    fontFamily: 'Barlow Condensed',
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: "2.3625px",
    textTransform: "uppercase",
    color: "#D0D6F9",
}

export const ExtraInfoData = {
    fontFamily: 'Bellefair',
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "32px",
    textTransform: "uppercase",
    color: "#ffffff",
    marginTop: "5px"
}
