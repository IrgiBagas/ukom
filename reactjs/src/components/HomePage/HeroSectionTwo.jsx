import React from 'react'
import styled from 'styled-components';
import CustomForm from '../Custom/CustomForm';
import { mobile } from '../../utils/responsiveness';

const Container=styled.section`
    margin: 10rem 0;
`;

const Wrapper=styled.div`
    display: flex;
    align-items: center;
    padding:4rem;
    margin:0 auto;
    justify-content: space-between;

    ${mobile({
    padding: "4rem",
    flexDirection: "column",
  })}
`;

const TextContainer=styled.div`
    max-width:440px ;
    padding-bottom: 5rem;
`;

const IntroText=styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    color: #777E90;
`;

const Title=styled.h1`
    font-size: 5rem;
    margin: 1.5rem 0;
`;

const Description=styled.p`
    font-size: 1.5rem;
    color: #777E90; 
    margin-bottom: 4rem;

    ${mobile({
    fontSize: "2rem",
  })}
`;

const ImageContainer=styled.div`
    position: relative;
`;

const MainImage=styled.img`

${mobile({
    maxWidth: "100%",
  })}
`;

const SecondImage=styled.div`
    position: absolute;
    bottom: 16.5%;
    left: 1.5%;
    width: 39.7%;

    ${mobile({
        
    })}
`;  

const Image=styled.img``;

const ThirdImage=styled.div`
    position: absolute;
    right: 10%;
    bottom: 40%;

    ${mobile({
        
    })}
  
`;

const HeroSectionTwo = () => {
  return (
    <Container>
        <Wrapper>
          <TextContainer>
              <IntroText>Pesona Penginapan</IntroText>
              <Title>keliling ke mana saja</Title>
              <Description>pilihlah tempat yang nyaman</Description>
              <CustomForm/>
          </TextContainer>

          <ImageContainer>
              <MainImage style={{ width: "500px" }} src="../../../public/assets/images/adventure6.jpeg"/>
              <SecondImage>
                  <Image style={{ width: "100px" }} src="../../../public/assets/images/rating.jpeg"/>
              </SecondImage>
              <ThirdImage>
                  <Image style={{ width: "100px" }} src="../../../public/assets/images/rating.jpeg"/>
              </ThirdImage>
          </ImageContainer>
        </Wrapper>
    </Container>
  )
}

export default HeroSectionTwo