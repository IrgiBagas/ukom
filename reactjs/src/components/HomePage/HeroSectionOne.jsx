import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../utils/responsiveness'

const Container = styled.section`
	margin:0 4.75rem;
	position: relative;

	${mobile({
    margin: "0 2rem",
  })} 
`
const ImageContainer = styled.div``
const Image = styled.img`
	width: 100%;
	height: 70rem;
	border-radius: 2rem;

	${mobile({
	height: "40rem",
  })}
`
const InfoContainer = styled.div`
	top: 8rem;
	padding:9rem 8rem;
	position: absolute;
	width: 40%;

	${mobile({
	width: "90%",
    padding: "0 3rem",
	margin:"2.5rem 0"
  })} 
`
const Heading = styled.h1`
	color:white;
	font-size: 7rem;
	margin:0;

	${mobile({
    fontSize: "4rem",
  })} 
`
const Desc = styled.p`
	color:white;
	font-size: 3rem;
	margin:1rem 0 3rem 0;

	${mobile({
    fontSize: "2rem",
  })} 
`
const Button = styled.button`
	background-color: #8585c799;
	border-radius: 2.5rem;
	color: white;
	font-size: 1.75rem;
	font-weight: bold;
	padding: 1.5rem 2.5rem;
	border: none;
	cursor: pointer;

	&:hover{
		background-color: #7371FF;
	}
`

const HeroSectionOne = () => {
  return (
    <Container>
		<ImageContainer>
			<Image src="../../../public/assets/images/bg-hero2.jpeg" alt=""/>
		</ImageContainer>

		<InfoContainer>
			<Heading>Aman, Cepat, Murah</Heading>
			<Desc>Find and Book great experience</Desc>
			<Button>Start your Search</Button>
		</InfoContainer>
	</Container>
  )
}

export default HeroSectionOne