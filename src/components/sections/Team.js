import React, { lazy } from 'react'
import styled from 'styled-components';
import Microlink from '@microlink/react';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Name = styled.a`  // Changed from styled.h2 to styled.a
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;  // Add underline on hover
  }
`;

const Position = styled.a`  // Changed from styled.h2 to styled.a
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;  // Added cursor style
  &:hover {
    text-decoration: underline;  // Add underline on hover
  }
`;


const Item = styled.div`
  width: calc(32rem - 4vw);
  max-width: 80%; // Ensure it doesn't overflow its parent container
  height: calc(32rem - 4vw);
  padding: 1rem;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; // Center-align the children
  &:hover {
    transform: scale(1.05);
  }
  
`;

const MicrolinkWrapper = styled.div`
  width: 100%;
  height: 100%; // Set a fixed height
  overflow: hidden; // Prevents content from overflowing

  iframe {
    width: 100% !important;
    height: 600px !important; // Set the actual height of the iframe to double
    transform: translateY(-20%); // Adjust vertical position to center the content
    border: none; // Remove any default border
    padding: 0; // Remove any default padding
    margin: 0; // Ensure the iframe has no margin
    }
`;

const MemberComponent = ({ link, name, position }) => {
  return (
    <Item>
      <Name href={link} target="_blank">{name}</Name>  
      <Position href={link} target="_blank">{position}</Position>  
      <MicrolinkWrapper>
        <Microlink url={link} size="large" />
      </MicrolinkWrapper>
    </Item>
  );
};


const Team = () => {
  return (
    <Section id="team">
      <Title>Recent Projects</Title>
      <Container>
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_users-often-hate-typing-but-in-ai-chats-activity-7215529277272805376-oLfz?utm_source=share&utm_medium=member_desktop" name="Shadcn for AI" position="Customizable open source react components, LLM to generate UI content to adapt to user experience" />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_made-a-search-assistant-this-weekend-for-activity-7205835625688670210-pdKg?utm_source=share&utm_medium=member_desktop" name="AI Sales Assistant" position="An assistant that helps users find products. Rendering a React carousel through function calls for an e-commerce product catalog. The product search is multi-modal, allowing for context-based image searches" />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_just-launched-an-autodebugger-a-typical-activity-7204346521654366208-4Iye?utm_source=share&utm_medium=member_desktop" name="GPT Auto Debugger" position="Coding assistant that actually test runs the code in a safe sandbox environment." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_new-cli-interface-for-httpslnkdingsnrwjf-activity-7194409697230168066-l95n?utm_source=share&utm_medium=member_desktop" name="Gemini 4 Docs" position="Search and chat with any documentation inside your terminal." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_played-with-sd-lightning-voice2img-its-activity-7186174839504748544-8tAI?utm_source=share&utm_medium=member_desktop" name="Realtime Sora" position="Gamified immersive image generation. Control prompts with keyboard shortcuts. SD Lightning, 15 frames/sec." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_i-developed-a-legal-agent-that-updates-a-activity-7183693606816243712-EcSe?utm_source=share&utm_medium=member_desktop" name="County Law RAG" position="Legal agent updating a vector database across all local county government websites, including materials published in PDF documents." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_i-combined-gpt-and-gemini-on-one-screen-activity-7182239244801785856-XYLc?utm_source=share&utm_medium=member_desktop" name="GPT vs. Gemini" position="An easy way to compare outputs from different models. One message - two answers." />
        <MemberComponent link="https://x.com/AlexReibman/status/1772166820130431350" name="Your Devin" position="Mistral 0.2 fine-tuned on your codebase directly in VS Code." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_a-hackathon-project-has-turned-into-a-product-activity-7172740810411634688-e-o0?utm_source=share&utm_medium=member_desktop" name="SEMA: arXiv Search Agent" position="Research the latest academic papers using RAG, CoT, Crawler." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_another-week-another-hackathon-it-was-great-activity-7176403976626601986-gbTb?utm_source=share&utm_medium=member_desktop" name="YouTube GPT" position="Summarizes any video into chapters with clickable timestamp links." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_another-week-another-hackathon-another-activity-7166654975027183617-HRv9?utm_source=share&utm_medium=member_desktop" name="Semantic Chunking" position="Hierarchical chunking with LLMs allows for dynamic adjustment of chunk size based on semantic meaning." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_we-won-the-1st-place-at-the-hackathon-with-activity-7158326290112999425-Ewnu?utm_source=share&utm_medium=member_desktop" name="Docs2CLI" position="Search any documentation online without leaving your VS Code." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_weve-belinda-mo-devin-liu-created-an-activity-7155747787446308864-53EP?utm_source=share&utm_medium=member_desktop" name="Holodeck" position="AI tool that converts user analytics heatmaps into code improvements for your website. Run your A/B tests on autopilot." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_weve-made-with-vadims-casecnikovs-a-reddit-activity-7151297160863453184-_mHz?utm_source=share&utm_medium=member_desktop" name="Reddit -> LinkedIn Reposting Tool" position="Crawls predefined subreddits and reposts top-performing content." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_put-clothes-on-models-using-ai-to-make-a-activity-7142589170014633984-fBON?utm_source=share&utm_medium=member_desktop" name="Virtual Try-On" position="Uses AI to put clothes on models, making a merchant's life easier." />
        <MemberComponent link="https://youtu.be/DNqqRRQaLk8" name="Image Gen Tool" position="1 million visitors in 3 months, 25k MAU, $10k MRR." />
        <MemberComponent link="https://www.linkedin.com/posts/matthew-diakonov-a84a1911_coliving-startuphouse-techhouse-activity-7071924035613323264-P8bJ?utm_source=share&utm_medium=member_desktop" name="Feliciti" position="Matching platform for residents and co-living houses." />
        {/* <MemberComponent link="https://docs.google.com/presentation/d/1QHevVRvSCvuMJFhgY0s4LkvGccCuWHyCwts8PAKeRBY/edit?usp=sharing" name="Warm Intro Network" position="Peer-to-peer referral system for hiring." /> */}
        <MemberComponent link="https://docs.google.com/presentation/d/17HxnFUF7jhE1Bc0C9W31on75dFszVZFll0JGBfVZ0-4/edit?usp=sharing" name="GetQ" position="Cloud compute. Templates for your frontend and backend." />
        {/* <MemberComponent link="https://docs.google.com/presentation/d/1hMSQ4dAnNEaQnzM8osHKzjVEDmaRsWGtHY2m_aFKn0M/edit?usp=sharing" name="WEB3 Developer Leaderboard" position="Links GitHub contributions to Dune Analytics performance of web3 protocols." /> */}
        <MemberComponent link="https://youtu.be/WKirA7P59fQ" name="Betzy" position="Bet on your good habits with friends." />
        <MemberComponent link="https://docs.google.com/presentation/d/1OuZb8LslpVTa4_Hp8aRvs1enDjZ-lQ8FJ5BilJmM_vo/edit?usp=sharing" name="TimeTree" position="Time tracker for personal productivity." />
        <MemberComponent link="https://youtu.be/jGbqnAjLi-0" name="Newcomers" position="Matchmaking among newcomers and locals for mutual help." />
      </Container>
    </Section>
  )
}

export default Team