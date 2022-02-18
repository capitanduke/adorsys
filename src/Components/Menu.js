import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #000;
    color: #ffeb3b;
    height: 5rem;
    align-items: center;
    position: absolute;
    top: 0;
`

const Title = styled.div`
    display: flex;
`

const List = styled.div`
    display: flex;
    cursor: pointer;
`

const Favs = styled.div`
    display: flex;
    cursor: pointer;
`

const Menu = ({setView}) => {

    const test = (index) => {
        index === 0 ? setView(0) : setView(1)
    }

    return (
        <Container>
            <Title>ADORSYS</Title>
            <List onClick={() => test(0)}>FILMS</List>
            <Favs onClick={() => test(1)}>FAVS FILMS</Favs>
        </Container>
    );
}

export default Menu;
