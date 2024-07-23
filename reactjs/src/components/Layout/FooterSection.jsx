import { Copyright, Fireplace } from '@material-ui/icons'
import React from 'react'
import CustomForm from '../Custom/CustomForm'
import styled from 'styled-components'
import { mobile } from '../../utils/responsiveness';

const  Container = styled.div`
    margin: 7rem 0;
`;
const  Wrapper = styled.div`
    margin: 4rem;
    padding: 0 7rem;

    ${mobile({
        padding: "0",
    })}
`;
const  TopContent = styled.div`
    display: flex;
    padding: 30px 0 30px; 

    ${mobile({
        flexDirection: "column",
        padding: "0",
    })}
`;
const  Logo = styled.div`
    flex: 1;
`;
const  Image = styled.img``;
const  UsefulLinks = styled.div`
    flex: 2;
    padding: 0 2px;
`;
const  TextLinks = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${mobile({
        margin: "4rem 0",
    })}
`;
const  Text = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #777e90;
    padding:1rem;
    margin:1rem 6rem 0 2rem;

    ${mobile({
        margin: "1rem 2rem 0 1rem",
    })}
    
`;
const  Community = styled.div`
    flex: 1;

    ${mobile({
        margin: "4rem 0",
    })}
`;
const  CommunityText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;
const  BottomContent = styled.div`
    padding: 2rem;
`;
const  CopyrightText = styled.p`
    font-size: 1.5rem;

    ${mobile({
        display: "flex",
        justifyContent: "center",
    })}
`;

const FooterSection = () => {
  return (
    
    <Container>
        <hr />
        <Wrapper>
            <TopContent>
                <Logo>
                    <Image src="../../../public/assets/images/logobooking-removebg.png" style={{ width:"9rem" }} />
                </Logo>
                <UsefulLinks>
                    <TextLinks>
                        <Text>Stays</Text>
                        <Text>Flights</Text>
                        <Text>Support</Text>
                        <Text>Cars</Text>
                        <Text>Things to do</Text>
                    </TextLinks>
                </UsefulLinks>
                <Community>
                    <CommunityText>Join Our Community🔥! </CommunityText>
                    <CustomForm/>
                </Community>
            </TopContent>
            <BottomContent>
                <CopyrightText>©2024 All rights reserved </CopyrightText>
            </BottomContent>
        </Wrapper>
    </Container>
  )
}

export default FooterSection