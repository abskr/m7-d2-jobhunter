import React from 'react';
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigator = () => {
  return (
    <Navbar className='px-3' bg='dark' variant='dark'>
      <HomeLink to='/'>
        <Navbar.Brand>Home</Navbar.Brand>
      </HomeLink>
    </Navbar>
  );
};

const HomeLink = styled(Link)`
  text-decoration: none
`


export default Navigator;