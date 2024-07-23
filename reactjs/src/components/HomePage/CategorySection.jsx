import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import Slider from 'react-slick'
import CustomCategoryComponent from '../Custom/CustomCategoryComponent'
import categoryData from '../../models/category'



const Container =styled.section``;
const StyledSlider = styled(Slider)`
	.slick-slide{
		outline:none;
		width:100%;
		padding:5rem 0;
	}`;
const CategorySection = () => {

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
        <CustomHeader
           title="Browse By Category"
           description="Let's go on an adventure"
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

export default CategorySection