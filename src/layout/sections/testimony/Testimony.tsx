import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Testimony = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <TitleSection>Testimony</TitleSection>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  position: relative;
`;
