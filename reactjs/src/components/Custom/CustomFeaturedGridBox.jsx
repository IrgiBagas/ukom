import React from 'react'
import CustomImageContainer from './CustomImageContainer'
import styled from 'styled-components'

const GridBox = styled.div`
  cursor: pointer;
  margin:4.5rem 1rem 0 0;
`;
const ImageBox = styled.div`
  border-radius: 2rem;
  overflow: hidden;
`;

const TextContainer = styled.div`
  text-align: center;
`;
const FeaturedTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #23262F;
  cursor: pointer;
  margin: 1rem 0;

  &:hover{
    color:blue;
  }
`;
const FeaturedDescription = styled.p`
  font-size: 1.5rem;  
  color: #777e90;

`;


const CustomFeaturedGridBox = ({data}) => {
  const {imageSrc,title,subtitle} = data;
  return (
    <GridBox>
        <ImageBox>
              <CustomImageContainer
                  src={imageSrc}
                  borderRadius="2rem"
              />
        </ImageBox>
        <TextContainer>
              <FeaturedTitle>{title}</FeaturedTitle>
              <FeaturedDescription>{subtitle}</FeaturedDescription>
        </TextContainer>
    </GridBox>
  )
}

export default CustomFeaturedGridBox