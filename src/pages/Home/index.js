import React, {useRef, useCallback, useState } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
// import api from '../../services/api'

import { Container, FormContainer, Title, Description, InputContainer, GridContainer, Label, Icon, ModalMessage } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Modal from '../../components/Modal';

import closeIcon from '../../assets/close.svg';


function Home() {
  const formRef = useRef(null);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleCPFKeyUp = useCallback((e) => {
    e.currentTarget.maxLength = 12
    let value = e.currentTarget.value;
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    e.currentTarget.value = value;

  }, []);

  const cpfRegex = RegExp(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({}); 
  
        const schema = Yup.object().shape({
          name: 
            Yup.string()
            .required('Nome Obrigatório!'),
          cpf: 
            Yup.string()
            .matches(cpfRegex, 'Número de CPF inválido!')
            .required("CPF Obrigatório!"),
          email: 
            Yup.string()
            .required("E-mail Obrigatório!")
            .email("E-mail inválido"),
          password: 
            Yup.string()
            .min(6, 'No mínimo 6 digitos!')
            .required("Senha Obrigatória!"),
          confirmpassword: 
            Yup.string()
            .oneOf([Yup.ref('password'), null], 'Senhas Diferentes!'),
          company: 
            Yup.string()
            .required("Empresa Obrigatória!"),
          classification: 
            Yup.string()
            .required("Classificação Obrigatório!"),
        })
        
        await schema.validate(data, {
          abortEarly: false,
        });
  
        delete data.confirmpassword;
      
        // await api.post('/costumer', data)

        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
  
        setVisibleModal(true);
  
      } catch(err) {
        const validationErrors = {};
        
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        } 
      }
    }, [cpfRegex])

  return (
    <Container>
      {
        visibleModal ? (
          <Modal onClose={() => setVisibleModal(false)}>
            <Icon src={closeIcon}  />
            <ModalMessage>Cadastro realizado com sucessso!</ModalMessage>
          </Modal>
        ) : null
      }
      <Header />
      <FormContainer>
        <Title>
          Cadastre-se
        </Title>
        <Description>
          Preencha os campos abaixo para validar sua participação <br />
          na campanha e concorrer aos prêmios.
        </Description>
        <Form ref={formRef} onSubmit={handleSubmit} className="Form">
          <Label >Nome</Label>
          <Input name="name"/>
          
          <GridContainer>
            <InputContainer>
              <Label>CPF</Label>
              <Input name="cpf" placeholder="000.000.000-00" onKeyUp={handleCPFKeyUp}/>
            </InputContainer>

            <InputContainer>
              <Label>E-mail</Label>
              <Input name="email" />
            </ InputContainer>

            <InputContainer>
              <Label>Senha</Label>
              <Input name="password" type="password"/>
            </InputContainer>

            <InputContainer>
              <Label>Senha</Label>
              <Input name="confirmpassword" type="password"/>
            </InputContainer>

            <InputContainer>
              <Label>Empresa</Label>
              <Input name="company" />
            </InputContainer>

            <InputContainer>
              <Label>Classificação</Label>
              <Select name="classification" className="Select">
                <option className="option"> </option>
                <option className="option">Gerente</option>
                <option className="option">Revendedor</option>
                <option className="option">Distribuidor</option>
              </Select>
            </InputContainer>
            
          </GridContainer>
          <Button type="submit">Enviar</Button>
        </Form>

      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Home;
