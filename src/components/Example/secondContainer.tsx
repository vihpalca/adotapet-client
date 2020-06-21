import React from 'react';
import styled from 'styled-components';
import { useStore } from "../../configureStore";

const SecondContainer = () => {
  const count = useStore((state) => state.example.count);
  
  return (
    <Container>
      {count}
    </Container>
  );  
}

const Container = styled.div `
  width: 100;
  background-color: #c9c9c9;
  height: 200px;  
`

export default SecondContainer;