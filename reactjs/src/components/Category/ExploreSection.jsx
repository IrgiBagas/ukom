import React from 'react'
import CustomButton from '../Custom/CustomButton'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import Slider from 'react-slick';
import categoryData from '../../models/category';
import CustomCategoryComponent from '../Custom/CustomCategoryComponent';

const Container = styled.section``;
const Hr = styled.hr`
    margin: 0 3rem 9rem 3rem;
    color:#E6E8EC;
`;

const StyledSlider = styled(Slider)`
	.slick-slide{
		outline:none;
		width:100%;
		padding:5rem 0;
	}`;

const ExploreSection = () => {

    const settings ={
		slidesToShow:3,
		speed:750,
		infinite:true,
		slidesToScroll:1,
		dots:false,
		initialSlide:0,
		responsive:[
			{
				breakpoint: 629,
				settings:{
				slidesToShow:1,
				}
			}
		]
	}	

  return (
    <Container>
        <CustomButton
            title="Go Home"
            padding="1rem 2rem"
            margin="1rem 3rem"
            fontSize="1.5rem"
            borderRadius="2rem"
        />

        <CustomHeader
            title="Place to  Stay"
            textAlign="flex-start"
            fontSize="5.5rem"
            marginLeft="3rem"
        />

        <Hr/>

        <CustomHeader
            title="Explore mountain in New Zealand"
            fontSize="3.5rem"
        />

    <StyledSlider {...settings}>
		{categoryData.map((data,index)=>(
			<CustomCategoryComponent
				key={index}
				data={data}
			/>
		))}
    </StyledSlider>

    </Container>
  )
}

export default ExploreSection