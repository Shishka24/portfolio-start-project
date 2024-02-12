import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <SkillsStyled>
      <Container>
        <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
          <Skill
            iconId={"html"}
            viewBox={"1 0 512 512"}
            title={"HTML5"}
            description={"HTML: Building Blocks of the Digital World."}
          />
          <Skill
            iconId={"css"}
            title={"CSS"}
            viewBox={"1 2 29 29"}
            description={" Where Design Meets Precision."}
          />
          <Skill
            iconId={"js"}
            title={"JS"}
            viewBox={"0 0 30 30"}
            description={"JS Magic: Where Logic Meets Elegance!"}
          />

          <Skill
            iconId={"react"}
            title={"React"}
            viewBox={"0 0 73 73"}
            description={"Unleash the Power of Virtual DOM Mastery!"}
          />
          <Skill
            iconId={"styled"}
            title={"Styled-Components"}
            viewBox={"0 0 35 30"}
            description={"Elevate Your Style, Simplify Your Code!"}
          />
          <Skill
            iconId={"typescript"}
            title={"Typescript"}
            viewBox={"1 0 30 30"}
            description={"Typing Made Easy, Errors Made Rare!"}
          />
          <Skill
            iconId={"mongo"}
            title={"MongoDB"}
            viewBox={"0 -30 120 164"}
            description={"Where Data Finds a Flexible Home!"}
          />
          <Skill
            iconId={"nest"}
            title={"Git"}
            viewBox={"0 0 032 032"}
            description={" Building Scalable  Server-Side Applications!"}
          />
          <Skill
            iconId={"git-hub"}
            title={"Git-Hub"}
            viewBox={"0 0 70 70"}
            description={"Empowering Collaboration, Accelerating Innovation"}
          />
        </FlexWrapper>
      </Container>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section``;
