import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <StyledTestimony>
        <TitleSection>Testimony</TitleSection>
        <Icon iconId={"testimony"} />
        <Slider />
      </StyledTestimony>
    </FlexWrapper>
  );
};

const StyledTestimony = styled.section`
  min-width: 100vh;
`;
