import React from 'react'
import styled from 'styled-components'

const ImageContainer =styled.div`
  border-radius:${(props)=>props.borderRadius}; 
  transition: transform 0.6s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
`;

const Image =styled.img`
  width: 100%;
  height: auto;
`;


const CustomImageContainer = ({src,alt,borderRadius}) => {
  return (
    <ImageContainer borderRadius={borderRadius}>
        <Image src={src} alt={alt} />
    </ImageContainer>
  )
}

export default CustomImageContainer