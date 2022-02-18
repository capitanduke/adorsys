import React from 'react'
import styled from 'styled-components'
import {GitHubIcon} from '../GitHubSVG'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #000;
    color: #ffeb3b;
    height: 5rem;
    align-items: center;
    position: fixed;
    bottom: 0;
`

const Info = styled.div`
    display: flex;

    & > a {
      padding-left: 1rem;
    }
`

const Footer = () => {
  return (
    <Container>
        <Info>Raul Rincones <a href="https://github.com/capitanduke" target="_blank" rel="noreferrer"><GitHubIcon /></a></Info>
    </Container>
  );
}

export default Footer;
