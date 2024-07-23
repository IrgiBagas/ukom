import React from 'react'
import styled from 'styled-components'
import CustomHeader from '../Custom/CustomHeader';
import CustomPlaceGridBox from '../Custom/CustomPlaceGridBox';
import CustomButton from '../Custom/CustomButton';
import { mobile } from '../../utils/responsiveness';

const Container =styled.section`
  margin: 5rem 4rem;

  ${mobile({
    margin: "0",
  })}
`;
const Wrapper =styled.div`
  padding: 6rem 4rem;
  background-color: #f0f0f0;
  border-radius: 2rem;

  ${mobile({
    borderRadius:"0",
  })}

`;
const PlaceGridContainer =styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const PlaceSection = () => {
  return (
    <Container>
        <Wrapper>
            <CustomHeader
                title="Go Somewhere"
                description="Let's go on an adventure"
                textAlign="left"
            />

            <PlaceGridContainer>
               <CustomPlaceGridBox/>
               <CustomPlaceGridBox/>
               <CustomPlaceGridBox/>
            </PlaceGridContainer>
            <CustomButton
              title="View All"
              fontSize="15px"
              fontWeight="bold"
              padding="8px"
              display="block"
              margin="4rem auto"
            />
        </Wrapper>
    </Container>
  )
}

export default PlaceSection