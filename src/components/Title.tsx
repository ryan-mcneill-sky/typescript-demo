/** @jsxImportSource @emotion/react @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => (
  <h1 css={css({ textAlign: "center", color: "hotpink", fontSize: "48px" })}>
    {title}
  </h1>
);
