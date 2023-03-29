import styled from "styled-components"

export const Nav = styled.div`
    display: flex;
    justify-content: end;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    gap: 5%;
    align-items: center;
    font-family: 'Barlow Condensed', sans-serif;
    width: 55%;
    justify-content: center;
`

export const Logo = styled.svg`
    position: relative;
    top: 30px;
`

export const NavBar = styled.div`
    position: absolute;
    height: 96px;
    left: 55px;
    top: 40px;
    right: 10px;
    display: flex;
    justify-content: space-between;
`

export const Number = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    margin-right: 10px;
`

export const LinkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "2.7px",
}

export const VariantNavBar = {
    initial: {
        x: '-500px'
    },
    animate: {
        x: 0,
        transition: {
            delay: 1,
            duration: 1.5,
            type: 'spring',
        },
    },
}