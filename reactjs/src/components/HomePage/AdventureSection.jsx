import React from 'react'
import styled from 'styled-components'
import CustomHeader from '../Custom/CustomHeader';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from '../../models/adventure';

const Container = styled.section`
	margin:7rem 3rem;
`

const StyledSlider = styled(Slider)`
	.slick-slide{
		outline:none;
		width:100%;
		padding:5rem 0;
	}
`
const SliderContent = styled.div`
	display:flex !important;
	align-items: center;
`	
const Image = styled.img`
		max-width: 100%;
		height: 18rem;
		margin-top:1rem;
`

const SliderTextContainer = styled.div`

`
const SlideText = styled.p`
	margin:1.5rem 0;
	font-size: 2.5rem;
`
const Places = styled.a`
	font-size: 1.5rem;
	font-weight: bold;
	background-color:#E6E8EC;
	padding: 0.5rem 1rem;
	border-radius: 2rem;
`

const AdventureSection = () => {

	const settings ={
		slidesToShow:3,
		speed:750,
		infinite:true,
		slidesToScroll:1,
		dots:true,

		responsive:[
			{
				breakpoint:629,
				settings:{
					slidesToShow:1,
				}
			}
		]
	}	
  return (
    <Container>
		<CustomHeader
			title="Let's go on an adventure"
			description="Find and book great experience"
		/>

		<StyledSlider {...settings}>
			{sliderData.map((data,index)=>(
				<SliderContent key={data.id}>
						<Image src={data.img} alt="adventure"/>
						<SliderTextContainer>
							<SlideText>{data.slideText}</SlideText>
							<Places>{data.linkText}</Places>
						</SliderTextContainer>
				</SliderContent>
			))}
		</StyledSlider>
	</Container>
  )
}

export default AdventureSection