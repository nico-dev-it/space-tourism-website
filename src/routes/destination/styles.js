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
    right: 5%;
    top: 300px;
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
    left: 166.5px;
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
    left: 100px;
    right: 93.19%;
    top: 212px;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    opacity: 0.25;
`