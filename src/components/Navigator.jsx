import React from 'react';
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigator = () => {
  return (
    <NavBar sticky='top' className='px-3' bg='dark' variant='dark'>
      <HomeLink to='/'>
        <Navbar.Brand>Home</Navbar.Brand>
      </HomeLink>
    </NavBar>
  );
};

const HomeLink = styled(Link)`
  text-decoration: none
`
const NavBar = styled(Navbar)`
  min-height: 7vh
`


export default Navigator;