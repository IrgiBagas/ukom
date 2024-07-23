import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import CustomCategoryGridBox from '../Custom/CustomCategoryGridBox';

const Container =styled.section``;
const Wrapper =styled.div`
  padding: 5rem 8rem;
`;
const CategoryGridContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

const PlaceSection = () => {
  return (
    <Container>
      <Wrapper>
        <CustomHeader
          title="Let's book"
          textAlign="flex-start"
          marginLeft="2rem"
          fontSize="3.5rem"
        />

        <CategoryGridContainer>
          <CustomCategoryGridBox/>
        </CategoryGridContainer>
      </Wrapper>
    </Container>
  )
}

export default PlaceSection