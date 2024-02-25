import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/slider.css";
import {
  SlideDivStyled,
  StyledSlider,
  StyledText,
  StyledTitle,
} from "./Slider_Styles";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <SlideDivStyled>
      <StyledText>{props.text}</StyledText>
      <StyledTitle>@{props.userName}</StyledTitle>
    </SlideDivStyled>
  );
};

const items = [
  <Slide
    userName={"Ivan Belanger"}
    text={
      "Text messages are used for personal, family, business, and social urposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.This makes texting a quick and easy way to communicate with friends, family, and colleagues, including in contexts where a call would be impolite or inappropriate"
    }
  />,
  <Slide userName={"Ivan Belanger"} text={"blavla"} />,
  <Slide userName={"Ivan Belanger"} text={"blavla"} />,
  <Slide userName={"Ivan Belanger"} text={"blavla"} />,
];

export const Slider = () => (
  <StyledSlider>
    <AliceCarousel
      mouseTracking
      items={items}
      // responsive={responsive}
      // controlsStrategy="alternate"
    />
  </StyledSlider>
);
