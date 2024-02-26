import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return (
    <a
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon
        iconId={"pinecone"}
        veiwBox="0 0 512.000000 512.000000"
        width="50"
        height="50"
        color="#00C1EC"
      />
    </a>
  );
};
