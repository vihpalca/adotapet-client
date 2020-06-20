import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Home = () => {
  return (
    <Container title={'teste'}>
      teste
    </Container>
  );  
}

const Container = styled.div `
  width: 100;
  background-color: ${theme.color.primary};
  color: white;
`

export default Home;