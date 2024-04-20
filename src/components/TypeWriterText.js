import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  text-align: left;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
  }
`;

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`

const calculateDaysSince = () => {
  const startDate = new Date('September 11, 2023');
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays > 0 ? differenceInDays : 0; // Ensure it doesn't go negative
};

const TypeWriterText = () => {
  const daysSinceStart = calculateDaysSince(); // Use the function here
  return (
    <>
        <Title>
      Yet another tech bro?
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Machine learning.</span>`)
            .pauseFor(0)
            .deleteAll()
            .typeString(`<span class="text-2">Agentic pipelines.</span>`)
            .pauseFor(0)
            .deleteAll()
            .typeString(`<span class="text-3">Vipassna and EEG.</span>`)
            .pauseFor(0)
            .deleteAll()
            .start();
        }}
      />
      
    </Title>
    <SubTitle>I'm at the intersection of: 
        <br />
        - engineering (20 small and medium size products, won 3 hackathons in the Bay),
        <br />
        - the startup world (1 exit, 3 funded startups),
        <br />
        - vipassana meditation (60d of courses, {daysSinceStart}d of practice),
        <br />
        - and sports (4.0 @ pickleball, 7.4m/mi in 5mi @ running).
        <br /> <br />
        Right now, I have the bandwidth to work on a new project, either something open-source, or a potential startup.
        <br /> <br />
        Single, no kids 😢
    </SubTitle>
    <ButtonContainer>
    <Button text="Jump to tech stuff" link="#team" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
