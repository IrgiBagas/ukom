import React from 'react'
import CustomImageContainer from './CustomImageContainer'
import styled from 'styled-components';
import { FreeBreakfast, Star, Wifi } from '@material-ui/icons';


const GridBox = styled.div`
  background-color: #fcfcfd;
  overflow: hidden;
  cursor: pointer;
  margin: 3rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid #E6E8EC;

  &:hover{
    color:blue;
    border: 1px solid #9DA1A8;
  }
`;
const Content = styled.div`
  padding: 3rem;
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
  font-size: 1.1rem;
  color: #777e90;
  display: flex;
  column-gap: 1rem;
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
  color: black;
  font-weight: bold;
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

const CustomCategoryGridBox = () => {
  return (
    <GridBox>
        <CustomImageContainer
            src="../../../public/assets/images/promo.jpeg"
        />

      <Content>
          <TitleContainer>
            <PlaceContainer>
              <NameText>Entire Service Classy Nature House</NameText>
              <PlaceText>
                <FreeBreakfast/>Breakfast Included
                <Wifi/>Free Wifi 24/7
              </PlaceText>
            </PlaceContainer>
            <PriceContainer>
              <DiscountPrice>$200</DiscountPrice>
              <NormalPrice>$150</NormalPrice>
            </PriceContainer>
          </TitleContainer>
          <Hr/>
          <DateContainer>
            <DateText>$150 total</DateText>
            <Rating>
              <Star style={{ fontSize:'1.5rem',color:'gold' }}/>
              <RatingText>4.9</RatingText>
            </Rating>
          </DateContainer>
      </Content>
    </GridBox>
  )
}

export default CustomCategoryGridBox