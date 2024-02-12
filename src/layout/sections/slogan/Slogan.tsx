import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <TitleSection>I'm Available for Freelance</TitleSection>
          <Button>Hire Me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;
