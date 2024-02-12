import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <TitleSection>
          <StyledForm>
            <Field placeholder="Your Name" />
            <Field placeholder="Subject" />
            <Field
              placeholder="Please provide me some information..."
              as={"textarea"}
            />
            <Button type={"submit"}>Send It</Button>
          </StyledForm>
        </TitleSection>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  textarea {
    resize: none;
    height: 155px;
  }
`;
const Field = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  background-color: #c2f7eb;
  border: 2px solid #54f1ab;
  border-radius: 1px;
  letter-spacing: 0.05em;
  &::placeholder {
    color: #024949a0;
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: 2px solid white;
  }
`;
