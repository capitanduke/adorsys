import React, {useState} from 'react'
import styled from 'styled-components'
import Card from './Card'
import QueryFilm from './Queries/QueryFilm'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 4rem;
`


const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const Input = styled.input`
    width: 80%;
    height: 35px;
    border: 2px solid #111;
    border-radius: 2px;

    
    @media (min-width: 768px) {
        width: 60%;
        height: 50px;
        border: 2px solid #111;
        border-radius: 2px;
    }
`

const Button = styled.button`
    margin-top: 1rem;
    width: 40%;
    align-items: center;
    background-color: #000;
    border: 2px solid #111;
    border-radius: 2px;
    box-sizing: border-box;
    color: #ffeb3b;
    cursor: pointer;
    display: flex;
    font-family: Inter,sans-serif;
    font-size: 20px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 50%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    @media (min-width: 768px) {
        padding: 0 40px;
        width: 20%;
    }
`

const List = () => {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState(0);


    const { data, isLoading, isError, error, isFetching } = QueryFilm(query);
    if (!data) {
        return null;
    }
   
    const updateSearch = e => {
        setSearch(e.target.value);
      }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch('')
        
    }


    return (
        <MainContainer>
            <Container>
                <FormContainer>
                    <Formulario onSubmit={getSearch}>
                        <Input  type="text" value={search} onChange={updateSearch} placeholder="Search your favorite films" />
                        <Button type="submit" color="primary">Search</Button>
                    </Formulario>
                </FormContainer>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isError ? (
                    <div>Error: {error.message}</div>
                ) : (
                <>
                    {data.results.map((item, i) => (
                        <Card key={i} film={item} isFav={false}/>
                    ))}
                </>
                )}
            </Container>
            {isFetching ? <span> Loading...</span> : null}{' '}
        </MainContainer>
        
    );
}

export default List;
