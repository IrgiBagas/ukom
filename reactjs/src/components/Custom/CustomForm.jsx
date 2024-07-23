import { ArrowForward } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    max-width: 300px;
    position: relative;
`;
const NumberInput = styled.input`
    padding: 15px;
    border: 1px solid #777E90;
    border-radius: 50px;
    width: 100%;
`;

const Button = styled.button`
    top: 6px;
    right: -22px;
    bottom: 9px;
    background-color: #3871FE;
    border-radius: 50%;
    border: none;
    position: absolute;
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const Arrowicon = styled.div`
    color: white;`;

const CustomForm = () => {
  return (
   <Form>
      <NumberInput type="number" placeholder="Number Input"/>
      <Button>
        <Arrowicon>
          <ArrowForward/>
        </Arrowicon>
      </Button>
   </Form>
  )
}
   
export default CustomForm