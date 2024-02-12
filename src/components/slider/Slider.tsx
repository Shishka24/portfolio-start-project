import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <StyledText>
            Text messages are used for personal, family, business, and social
            purposes. Governmental and non-governmental organizations use text
            messaging for communication between colleagues. In the 2010s, the
            sending of short informal messages became an accepted part of many
            cultures, as happened earlier with emailing.[1] This makes texting a
            quick and easy way to communicate with friends, family, and
            colleagues, including in contexts where a call would be impolite or
            inappropriate{" "}
          </StyledText>
          <StyledTitle>@Vladislav Sischin</StyledTitle>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span>.</span>
        <span className={"active"}>.</span>
        <span>.</span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Slide = styled.div`
  /* text-align: center; */
`;
const StyledText = styled.p`
  margin: 42px 0 42px;
`;
const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`;
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3cap;
    background-color: #39775a;
    cursor: pointer;
    & + span {
      margin-left: 5px;
    }
    &.active {
      background-color: #17df82;
    }
  }
`;
