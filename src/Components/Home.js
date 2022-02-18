import React, {useState} from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Footer from './Footer'
import List from './List'
import Favs from './Favs'
import { UserProvider } from './Provider'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Home = () => {
    const [view, setView] = useState(0)

    console.log("Experience is the name everyone gives to their mistakes. --- Oscar Wilde ")

    return (
        <Container>
            <UserProvider>
                <Menu setView={setView}/>
                {view === 0 ? <List /> : <Favs />}
                <Footer />
            </UserProvider>
        </Container>
    );
}

export default Home;
