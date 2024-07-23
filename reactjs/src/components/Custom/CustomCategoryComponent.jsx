import { Home } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const SliderContent = styled.div`
  margin: 0 30px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 30px;
  max-width: 100%;
  height: auto;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 3rem;
  height: auto;

  transition: transform 0.6s ease-in-out;

  &:hover{
    transform: scale(1.1);
  }
`;

const SliderTextContainer = styled.div``;

const SlideText = styled.p`
  font-size: 2rem;
  margin: 2rem 0;
  color:black;

  &:hover{
    color:blue;
  }

`;

const SliderDescription = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #777e90;
  display: flex;
  align-items: center;
`;


const CustomCategoryComponent = ({data}) => {
  const{ imageSrc,name,description}=data;
  return (
    <SliderContent>
      <ImageContainer>
        <Image src={imageSrc}/>
      </ImageContainer>
      <SliderTextContainer>
        <SlideText>{name}</SlideText>
        <SliderDescription><Home/>{description}</SliderDescription>
      </SliderTextContainer>
    </SliderContent>
  )
}

export default CustomCategoryComponent