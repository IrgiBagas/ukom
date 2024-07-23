import React from 'react'
import styled from 'styled-components'


const Container = styled.section`
    position: relative;
`;
const ImageContainer = styled.div`
    margin: 35px;
`;
const Image = styled.img`
    width: 100%;
	height: 70rem;
    border-radius: 30px;
`;
const TextContainer = styled.div`
    position: absolute;
    top: 7rem;
    left: 15%;
    padding: 8rem 19rem;
    text-align: center;
    color: white;
`;
const TitleText = styled.h1`
    font-size: 9rem;
`;
const DescriptionText = styled.p`
    font-size: 2rem;
    font-weight: bold;
`;
    
const HeroSection = () => {
  return (
     <Container>
        <ImageContainer>
            <Image src="../../../public/assets/images/bg-hero.jpeg" alt=""/>
        </ImageContainer>

        <TextContainer>
            <TitleText>South Island</TitleText>
            <DescriptionText>NZ New Zealand</DescriptionText>
        </TextContainer>
     </Container>
  )
}

export default HeroSection