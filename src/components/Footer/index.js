import React from 'react';

import { Container, Content, Title, Description, Logo, Infos, InfoText, P } from './styles';

import logoImg from '../../assets/logo-brinde.png';

function Footer() {
  return (
    <>
      <Container>
        <Content>
          <Title>
            Só quem vende curte as <br />experiências mais diferentonas!
          </Title>
          <Description>
            *Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center 
            e para o Setor Público não serão válidas. A apuração do mês de agosto 
            será retroativa. Imagens meramente ilustrativas. Realizamos todos 
            os esforços para garantir a precisão das informações, mas não somos 
            responsáveis por qualquer conteúdo editorial, fotográfico ou por erros 
            tipográficos. Todas as imagens são apenas para fins ilustrativos. 
            Para especificações completas de produto, informações de serviços 
            e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos 
            nenhuma representação ou garantia em relação a produtos ou serviços 
            de terceiros. Outros nomes de empresas, produtos e serviços podem ser 
            marcas registradas ou marcas 
            de serviços de terceiros. © 2020. Todos os direitos reservados.
          </Description>
        </Content>
        <Logo src={logoImg} />
      </Container>
      <Infos>
        <InfoText>Dúvidas? Envie um e-mail para <P>atendimento@umbrindenaeuropa.com.br</P></InfoText>
        <InfoText>Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.</InfoText>
      </Infos>
    </>
  );
};

export default Footer;
