import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components';
import CustomFeaturedGridBox from '../Custom/CustomFeaturedGridBox';
import featuredData from '../../models/featured';



const Container = styled.section`
    padding: 0 8rem;
`;

const FeaturedGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 4rem;
`;


const FeaturedSection = () => {
  return (
    <Container>
        <CustomHeader
            title="Live Anywhere"
            description="Keep calm and Travel On"
        />

        <FeaturedGridContainer>
            {featuredData.map((data, index) => (
                <CustomFeaturedGridBox key={index} data={data} />
            ))}
        </FeaturedGridContainer>
    </Container>
  )
}

export default FeaturedSection