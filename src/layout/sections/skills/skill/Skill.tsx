import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Container } from "../../../../components/Container";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { themeStyle } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} veiwBox={props.viewBox} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;
  box-shadow: 0px 4px 6px 0px #00000078;
`;
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-size: 20px;
  letter-spacing: 1px;
`;
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`;
export const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 115px;
    height: 115px;
    box-shadow: 0px 4px 6px 2px #921919;
    border-radius: 15px;
    background-color: transparent;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    transform-origin: top left;
    position: absolute;
  }
`;
