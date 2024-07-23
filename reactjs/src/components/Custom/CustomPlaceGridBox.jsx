import React from 'react'
import CustomImageContainer from './CustomImageContainer'
import styled from 'styled-components';
import { Star } from '@material-ui/icons';

const GridBox = styled.div`
  background-color: #fcfcfd;
  overflow: hidden;
  cursor: pointer;
  margin: 3rem 1.5rem;
  border-radius: 1.5rem;

  &:hover{
    color:blue;
  }
`;
const Content = styled.div`
  padding: 2rem 1rem;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const PlaceContainer = styled.div``;
const NameText = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;


`;
const PlaceText = styled.p`
  font-size: 1.4rem;
  color: #777e90;
`;
const PriceContainer = styled.div`
  border: 3px solid #58c27d;
  border-radius: 5px;
  color: #58c27d;
  font-size: 1.5rem;
  padding: 8px;
`;
const DiscountPrice = styled.p`
  font-weight: bold;
  text-decoration: line-through;
  margin: 4px 0;
`;
const NormalPrice = styled.p`
  font-weight: bold;
`;
const Hr = styled.hr`
  margin-bottom: 10px;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateText = styled.p`
  font-size: 1.4rem;
  color: #777e90;
`;
const Rating = styled.div`
  display: flex;
`;
const RatingText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 5px;
  color: black;
`;

const CustomPlaceGridBox = () => {
  return (
    <GridBox>
        <CustomImageContainer
            src="../../../public/assets/images/promo.jpeg"
        />

      <Content>
          <TitleContainer>
            <PlaceContainer>
              <NameText>Entire Service Classy Nature House</NameText>
              <PlaceText>SomeWhere, Place</PlaceText>
            </PlaceContainer>
            <PriceContainer>
              <DiscountPrice>$200</DiscountPrice>
              <NormalPrice>$150</NormalPrice>
            </PriceContainer>
          </TitleContainer>
          <Hr/>
          <DateContainer>
            <DateText>2024-10-11 - 2024-11-11</DateText>
            <Rating>
              <Star style={{ fontSize:'1.5rem',color:'gold' }}/>
              <RatingText>4.9</RatingText>
            </Rating>
          </DateContainer>
      </Content>
    </GridBox>
  )
}

export default CustomPlaceGridBox