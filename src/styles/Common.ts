import { themeStyle } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmax,
  Fmin,
}: FontPropsType) => `
font-family:${family || "Arodora Pro"};
font-weight:${weight || 400};
color:${color || themeStyle.colors.fontColor};
line-height:${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);


`;
