import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import { themeStyle } from "../../../../styles/Theme";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button>More </Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>Demo</Link>
        <Link href={"#"}>Code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 330px;
  flex-grow: 1;
  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin-left: 20px;
    }
  }
  @media ${themeStyle.media.desktop} {
    max-width: 540px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    cursor: pointer;
    opacity: 0;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
  @media ${themeStyle.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 3cap;
`;
const Title = styled.h3``;
const Text = styled.p`
  margin: 14px 0 04px;
`;
const Description = styled.div`
  padding: 25px 10px;
`;
