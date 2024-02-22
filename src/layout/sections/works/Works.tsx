import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import blogImg from "../../../assets/images/blog.webp";
import storeImg from "../../../assets/images/store.webp";
import { Container } from "../../../components/Container";

const items1 = ["Bio Blog", "Store", "Social App", "Travel Blog"];
const items = ["ALL", "Landing Page", "React", "Spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <TitleSection>Projects</TitleSection>
        <TabMenu menuItems={items} />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          <Work
            title={"Blog"}
            text={
              "Welcome to our vibrant blog platform where ideas come to life! Immerse yourself in a world of captivating articles, diverse perspectives, and thought-provoking discussions. Our carefully curated content spans a multitude of topics, from the latest trends in technology to the quirkiest life hacks."
            }
            src={blogImg}
          />
          <Work
            title={"Store"}
            text={
              "Discover a meticulously curated collection of items that cater to your every need. From trendy fashion pieces to cutting-edge gadgets and lifestyle essentials, our store brings you the latest and greatest. Unleash your style, elevate your living space, and stay ahead with our diverse range of offerings."
            }
            src={storeImg}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 10px;
  }
`;
