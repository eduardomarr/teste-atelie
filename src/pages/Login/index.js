import React, {useRef, useCallback, useState } from 'react';

import * as Yup from 'yup';

import {Link} from 'react-router-dom';

import { Container, LoginContainer, LoginContent, Title, Links, Icon, ModalMessage } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import closeIcon from '../../assets/close.svg';


function Login() {
  const [visibleModal, setVisibleModal] = useState(false);

  const currentEmail = localStorage.getItem('email');
  const currentPassword = localStorage.getItem('password');
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({}); 
  
        const schema = Yup.object().shape({
          email: 
            Yup.string()
            .required("E-mail Obrigatório!")
            .email("E-mail inválido"),
          password: 
            Yup.string()
            .min(6, 'No mínimo 6 digitos!')
            .required("Senha Obrigatória!"),
        })
        
        await schema.validate(data, {
          abortEarly: false,
        });

          if (data.email === currentEmail && data.password === currentPassword) {
            setVisibleModal(true);
          }
  
      } catch(err) {
        const validationErrors = {};
        
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        } 
      }
    }, [currentEmail, currentPassword])


  return (
    <Container>
      {
        visibleModal ? (
          <Modal onClose={() => setVisibleModal(false)}>
            <Icon src={closeIcon}  />
            <ModalMessage>Login realizado com sucessso!</ModalMessage>
          </Modal>
        ) : null
      }
      <Header />
      <LoginContainer>
        <LoginContent ref={formRef} onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Input name="email" placeholder="E-mail"/>
          <Input name="password" placeholder="Senha" type="password"/>
          <Links>
            <Link to='/'type="button" className="link">Ainda não é cadastrado?</Link>
            <Link to='' type="button" className="link">Esqueceu sua senha?</Link>
          </Links>
          <Button type="submit" >Entrar</Button>
        </LoginContent>
      </LoginContainer>
      <Footer />
    </Container>
  );
};

export default Login;
