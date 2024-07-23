import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	text-align: ${(props)=>props.textAlign || 'center'};
`
const  HeaderTitle = styled.h2`
	font-size: ${(props)=>props.fontSize || '5rem'};
	margin-left:${(props)=>props.marginLeft || '0'};
`
const HeaderDescription = styled.p`
	margin-top: 2rem;
	font-size: 3rem;
	color:#777e90;

`

const CustomHeader = ({title,description,textAlign,marginLeft,fontSize}) => {
  return (
    <HeaderContainer textAlign={textAlign}>
			<HeaderTitle 
			marginLeft={marginLeft}
			fontSize={fontSize} 
			>{title}</HeaderTitle>
			<HeaderDescription>{description}</HeaderDescription>
	</HeaderContainer>
  )
}

export default CustomHeader