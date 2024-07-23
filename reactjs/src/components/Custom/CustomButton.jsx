import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props)=> props.backgroundColor || 'transparent'};
    border-radius: ${(props)=>props.borderRadius || '30px'};
    border: ${(props)=>props.border || '2px solid black'};
    cursor: pointer;
    margin:${(props)=>props.margin};
    display: ${(props)=>props.display};

    &:hover{
      background-color: black;
      color: white;
    }
`;

const Text = styled.p`
    padding: ${(props)=>props.padding};
    font-size: ${(props)=>props.fontSize || '2rem'};
    font-weight: ${(props)=>props.fontWeight || 'bold'};

    &:hover{
      color: white;
    }

`;

const CustomButton = ({title,display,margin,backgroundColor,borderRadius,border,padding,fontSize,fontWeight}) => {
  return (
    <Button 
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border} 
      display={display}
      margin={margin}
    >
      <Text 
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        
      >{title}</Text>

    </Button>
  )
}

export default CustomButton