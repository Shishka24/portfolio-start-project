import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import blogImg from "../../../assets/images/blog.webp";
import storeImg from "../../../assets/images/store.webp";
import { Container } from "../../../components/Container";
import { useState } from "react";

// const items1 = ["Bio Blog", "Store", "Social App", "Travel Blog"];
// const items = ["ALL", "Landing Page", "React", "Spa"];

const typeData: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "Spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Blog",
    src: blogImg,
    type: "react",
    text: "Welcome to our vibrant blog platform where ideas come to life! Immerse yourself in a world of captivating articles, diverse perspectives,and thought-provoking discussions. Our carefully curated content spans a multitude of topics, from the latest trends in technology to the quirkiest life hacks.",
  },
  {
    title: "Store",
    src: storeImg,
    type: "landing",
    text: "Discover a meticulously curated collection of items that cater to your every need. From trendy fashion pieces to cutting-edge gadgets and lifestyle essentials, our store brings you the latest and greatest. Unleash your style, elevate your living space, and stay ahead with our diverse range of offerings.",
  },
];

export const Works = () => {
  const [currentStatus, setCurrentStatus] = useState("all");
  let filteredWorksData = worksData;
  if (currentStatus === "landing") {
    filteredWorksData = worksData.filter((work) => work.type === "landing");
  }
  if (currentStatus === "react") {
    filteredWorksData = worksData.filter((work) => work.type === "react");
  }
  if (currentStatus === "spa") {
    filteredWorksData = worksData.filter((work) => work.type === "spa");
  }
  function changeStatus(value: TabsStatusType) {
    setCurrentStatus(value);
  }

  return (
    <StyledWorks>
      <Container>
        <TitleSection>Projects</TitleSection>
        <TabMenu
          menuItems={typeData}
          changeStatus={changeStatus}
          currentStatus={currentStatus}
        />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          {filteredWorksData.map((w) => {
            return <Work title={w.title} src={w.src} text={w.text} />;
          })}
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
