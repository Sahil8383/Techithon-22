import React from "react";
import styled from "styled-components";
import Backgrond from "../../Backgrond/backgrond";
import Button from "./ButtonReg";
import Icon from "./IconReg";
import Input from "./InputReg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Select from 'react-select';
import '../About/about.css';
import { EventsData } from "../Events/EventData";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

export default function Register() {
  const techCompanies = EventsData.map(function (element) {
    return { label: element.name, value: element.id }
  })
  const styles = {
      color: 'grey',
      
  }
  return (
    <Backgrond>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Phone Number" />
          <Select styles={styles} options={techCompanies} />
          
        </InputContainer>
        <h2>Entry Fees: {}</h2>
        <ButtonContainer>
          <Button content="Register" />
        </ButtonContainer>
        {/* <LoginWith>OR Sign Up WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword> */}
      </MainContainer>

    </Backgrond>
  );
}



const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 55px;
  height: 80vh;
  
  width: 30vw;
  position: absolute;   
  z-index: 50;
  background: rgba(34,40,49, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    top: 10%;
    left: 2%;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    top: 10%;
    
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
    top: 10%;
    left: 10%
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    top: 10%;
    left: 10%
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
    top: 10%;
    left: 10%
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 85vh;
    top: 10%;
    left: 10%
  }


`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;

`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  /* margin-top: 50px;   */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin-top: -10px;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #1F3C67 10%, #00ADB5 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: -50px;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%; 
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;


