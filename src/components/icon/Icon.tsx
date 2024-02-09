import styled from "styled-components";
import iconSprite from "../../assets/images/sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  veiwBox?: string;
  color?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      version="1.1"
      width={props.width || "100"}
      height={props.height || "100"}
      viewBox={props.veiwBox || " 0  0 032 032 "}
      xmlns={"http://www.w3.org/2000/svg"}
      // color="#00C1EC"
    >
      <use
        xlinkHref={`${iconSprite}#${props.iconId}`}
        style={{ fill: props.color || "#00C1EC" }}
      />
    </svg>
  );
};
