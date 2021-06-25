/** @jsxImportSource @emotion/react @jsx jsx */
import React, { ReactNode } from "react";
import { css, jsx } from "@emotion/react";

type ColourOptions = "white" | "lightGrey" | "grey" | "darkGrey" | "black";

interface CardProps {
  colour?: ColourOptions;
  children: ReactNode;
  icon?: string;
  title: string;
  isUpsideDown?: boolean;
  onCardHover?: () => void;
}

type ColourMap = Record<
  ColourOptions,
  { BACKGROUND: string; FOREGROUND: string }
>;

const colourMap: ColourMap = {
  white: { BACKGROUND: "#F2F2F2", FOREGROUND: "#212121" },
  lightGrey: { BACKGROUND: "#BDBDBD", FOREGROUND: "#080808" },
  grey: { BACKGROUND: "#888888", FOREGROUND: "#000000" },
  darkGrey: { BACKGROUND: "#464646", FOREGROUND: "#F8F8F8" },
  black: { BACKGROUND: "#010101", FOREGROUND: "#BDBDBD" }
};

export const Card = ({
  children,
  colour = "white",
  icon = "📄",
  title,
  isUpsideDown = false,
  onCardHover = () => null
}: CardProps) => (
  <div
    css={css({
      width: "calc(100% - 20px)",
      backgroundColor: colourMap[colour].BACKGROUND,
      color: colourMap[colour].FOREGROUND,
      padding: "20px",
      boxShadow: `2px 2px 4px black`,
      borderRadius: "5px",
      margin: "20px 0",
      transform: isUpsideDown ? "rotate(180deg)" : ""
    })}
    onMouseOver={onCardHover}
  >
    <h2
      css={css({
        margin: "0 0 20px",
        paddingBottom: "10px",
        borderBottom: `1px dotted ${colourMap[colour].FOREGROUND}`
      })}
    >
      {icon} {title}
    </h2>
    <div>{children}</div>
  </div>
);
