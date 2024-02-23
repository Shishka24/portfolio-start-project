import styled from "styled-components";
import { Link } from "../../../../components/Link";
// import { themeStyle } from "../../../../styles/Theme";

export type TabsStatusType = "all" | "landing" | "spa" | "react";

type TabMenuPropsType = {
  menuItems: Array<{
    title: string;
    status: TabsStatusType;
  }>;
  changeStatus: (value: TabsStatusType) => void;
  currentStatus: string;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link
                active={props.currentStatus === item.status}
                as={"button"}
                onClick={() => {
                  props.changeStatus(item.status);
                }}
              >
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    max-width: 352px;
    width: 100%;
    margin: 20px auto 40px;
  }
`;

const ListItem = styled.li`
  position: relative;
`;
