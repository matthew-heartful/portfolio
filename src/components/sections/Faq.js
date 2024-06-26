import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);

useLayoutEffect(() => {
  let prevSectionHeight = document.getElementById('team').offsetHeight; // Get dynamic height of the Team section
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start: `top+=${prevSectionHeight} bottom`, // Adjust start point based on the Team section's height
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="HOW TECHNICAL ARE YOU?" >
            I'm a CS grad, but I've never worked as a SWE. However, I do ship code every day nowadays. I'm very comfortable getting into the weeds of any tech stack: playing with chunking, embeddings, quantization, fine-tuning, changing layers in foundational models, deploying things, building frontend, backend, and middleware. Although I'm not a pro in any of this, when there is a big enough business case, I'll figure it out quickly.          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="DO YOU HAVE BUSINESS EXPERIENCE?" >
            Starting a company from scratch, finding the first customers/users, building a team, raising money, and scaling a company are all things I've done before. I've also worked with large companies such as PepsiCo, Mondelez, Etihad, AB InBev, and PMI as part of Accenture consulting projects, and I have a good understanding of how they operate.          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS YOUR MAIN WEAKNESS?" >
            Socially inept, and natural languages are harder for me than technical ones.
          </Accordion>
        </Box>
        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="ARE YOU LOOKING FOR A TEAM/COFOUNDER" >
            Yes, but I strongly believe that fewer people on the team is better. I think every new team addition should raise the average. So, I guess I'm looking for someone way better than myself.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHY ARE YOU DOING STARTUPS?" >
            I think that's the best way I can do something meaningful.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO YOU LIVE IN SAN FRANCISCO?" >
            My observation is that the better the people around you, the better person you become. SF has the most diverse culture, with great people from all walks of life, including arts, psychology, tech, sports, and spiritual paths. Also, the ocean, bay, forests, climate, and city landscape are amazing. And the prices well represent it, paying $2k for a room, haha.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq