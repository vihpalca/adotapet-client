import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/core'
import { theme } from '../theme';
import { useActions } from "../configureStore";
import SecondContainer from '../components/Example/secondContainer';

const Example = () => {
  const addCount = useActions((state) => state.example.addCount);
  
  return (
    <>
      <Container>
        <MyButton variantColor="teal" variant="solid" onClick={() => addCount() }>
          AddCount
        </MyButton>
      </Container>
      <SecondContainer />
    </>
  );  
}

const Container = styled.div `
  width: 100;
  background-color: ${theme.color.primary};
  color: white;
`

const MyButton = styled(Button) `

`


export default Example;