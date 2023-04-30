import styled from "styled-components";

export const Screen = styled.div `
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`

export const NavCrew = styled.div `
    color: #ffffff;
    &: hover { 
       cursor: pointer;
    }
`

export const CrewRole = styled.div `
    position: absolute;
    width: 214px;
    height: 37px;
    left: 165.5px;
    top: 400px;
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`

export const CrewName = styled.div `
    position: absolute;
    width: 488px;
    height: 64px;
    left: 165.5px;
    top: 452px;
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const CrewBio = styled.div `
    position: absolute;
    width: 444px;
    height: 128px;
    left: 165px;
    top: 543px;
    font-family: 'Barlow';
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
`
export const CrewImage = {
    position: "absolute",
    width: "512.1px",
    height: "640px",
    left: "734.93px",
    bottom: "0",
}