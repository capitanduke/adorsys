import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {UserContext, UserDispatchContext } from './Provider'
import Card from './Card'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 4rem;
`


const Favs = () => {

    let userDetails = React.useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);
    const [favsFilms, set] = useState(userDetails)


    const remove = (id) => {
        userDetails = favsFilms.filter(value => value.id !== id);
        set(userDetails)
        setUserDetails(userDetails)
    }
    

    console.log("favsFilmsss", favsFilms);

    return (
        <Container>
            {favsFilms.length === 0 ? <div>It seems that you don´t have favorites films</div> : favsFilms.map((item, i) => (
                <Card key={i} film={item} remove={remove} isFav={true} />
            ))}
        </Container>
    );
}

export default Favs;
