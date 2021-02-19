import React from 'react';

import {Link} from 'react-router-dom';

import { Container, Content, Logo, Buttons, Image } from './styles';
import logoImg from '../../assets/logo-brinde.png';
import cloudsImg from '../../assets/clouds.png';

import Button from '../Button';

function Header() {
  return (
    <Container>
      <Content>
        <Logo src={logoImg}/>
        <Buttons>
          <Link to='/login'><Button>Login</Button></Link>
          <Link to='/'><Button>Cadastre-se</Button></Link>
        </Buttons>
      </Content>
        <Image src={cloudsImg}/>
    </Container>
  );
};

export default Header;
