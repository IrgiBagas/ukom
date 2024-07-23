import React from 'react'
import CustomHeader from '../Custom/CustomHeader'
import styled from 'styled-components'
import { mobile } from '../../utils/responsiveness';

const Container =styled.section`
    padding: 9rem 8rem;

    ${mobile({
        padding: "0 2rem",
    })}
`;

const Wrapper =styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 6rem;

    ${mobile({
        flexDirection: "column",
    })}
`;
const WorkItems =styled.div`
    text-align: center;
    margin-right: 5rem;
    flex:1;

    
    ${mobile({
        marginLeft: "4.5rem",
        marginBottom:"3rem",
    })}
`;
const Image =styled.img`
    
`;
const WorkTitle =styled.h3`
    font-size: 2.8rem;
    font-weight: bold;
    padding-bottom: 2rem;
`;
const WorkDescription =styled.p`
    font-size: 2rem;
    color:#777e90;
`;

const WorkSection = () => {
  return (
    <Container>
    <CustomHeader
        title="How it Work"
        description="Keep calm & travel on"
    />

    <Wrapper>
        <WorkItems>
            <Image style={{ width:"20rem" }} src='../../../public/assets/images/workpic.png'/>
            <WorkTitle>Book & Relax</WorkTitle>
            <WorkDescription>We realize ideas from simple to complex, everything becomes eas to use</WorkDescription>
        </WorkItems>
        <WorkItems>
            <Image style={{ width:"20rem" }} src='../../../public/assets/images/workpic.png'/>
            <WorkTitle>Book & Relax</WorkTitle>
            <WorkDescription>We realize ideas from simple to complex, everything becomes eas to use</WorkDescription>
        </WorkItems>
        <WorkItems>
            <Image style={{ width:"20rem" }} src='../../../public/assets/images/workpic.png'/>
            <WorkTitle>Book & Relax</WorkTitle>
            <WorkDescription>We realize ideas from simple to complex, everything becomes eas to use</WorkDescription>
        </WorkItems>
    </Wrapper>
   </Container> 
  )
}

export default WorkSection