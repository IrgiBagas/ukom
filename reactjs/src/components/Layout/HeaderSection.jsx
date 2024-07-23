import React from 'react'
import styled from 'styled-components'
import CustomButton from '../Custom/CustomButton';
import { Person } from '@material-ui/icons';
import { mobile } from '../../utils/responsiveness';

const Container = styled.section`
`;
const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 1.5rem 7rem ;

  ${mobile({
    margin: "2.5rem 3rem",
  })} 
  
`;
const Logo = styled.section`

`;
const Image = styled.img`
    height: 100px;
    cursor: pointer;

    ${mobile({
    width: "10rem",
  })} 

`;
const RightNav = styled.div`
    display:flex;
    align-items: center;
`;
const ProfileContainer = styled.div`
    background-color: green;
    margin-left: 1.5rem;
    border-radius: 2.5rem;
    cursor: pointer;
    color: white;
`;

const StyledButtoon = styled.div`
  ${mobile({
    display: "none",
  })} 
`;

const HeaderSection = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image onClick={() => window.location.href = "/"} src="../../../public/assets/images/logobooking-removebg.png"/>
        </Logo>
        <RightNav>
          <StyledButtoon>
          <CustomButton
               title="List Your Property"
               borderRadius="3rem"
               padding="2rem"
               fontSize="1.5rem"
          />
          </StyledButtoon>
         <ProfileContainer>
              <Person style={{ fontSize: "2.5rem" }}/>
         </ProfileContainer>
        </RightNav>
      </Wrapper>
    </Container>
  )
}

export default HeaderSection