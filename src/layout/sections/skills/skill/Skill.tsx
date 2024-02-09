import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Container } from "../../../../components/Container";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
  viewBox: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Container>
        <Icon
          iconId={props.iconId}
          veiwBox={props.viewBox}
          width="100"
          height="100"
        />
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </Container>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 33%;
  padding-top: 15px;
`;
const SkillTitle = styled.h3`
  font-size: 16px;
`;
const SkillText = styled.p`
  font-size: 14px;
`;
