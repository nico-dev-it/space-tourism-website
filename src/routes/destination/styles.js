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
