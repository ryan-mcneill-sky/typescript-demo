/** @jsxImportSource @emotion/react @jsx jsx */
import React, { useState } from "react";
import { css, jsx, CSSObject } from "@emotion/react";

const buttonStyles = css({
  borderRadius: "20px",
  height: "40px",
  width: "40px",
  position: "relative",
  userSelect: "none"
});

/* CSSObject type tells intellisense what to expect */
const buttonContentStyles: CSSObject = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "45%",
  left: "50%",
  fontSize: "24px",
  fontWeight: "bolder",
  color: "white"
};

export const NumberExample = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = (type: "INC" | "DEC") => {
    if (type === "INC") setCount(count + 1);
    if (type === "DEC") setCount(count - 1);
  };

  return (
    <div
      css={css({
        width: "80%",
        margin: "0 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      })}
    >
      <div
        css={css(buttonStyles, {
          backgroundColor: count < 1 ? "grey" : "hotpink",
          cursor: count < 1 ? "default" : "pointer"
        })}
        onClick={() => handleCountChange("DEC")}
      >
        <div css={buttonContentStyles}>-</div>
      </div>
      <div>{count}</div>
      <div
        css={css(buttonStyles, {
          backgroundColor: count > 9 ? "grey" : "hotpink",
          cursor: count > 9 ? "default" : "pointer"
        })}
        onClick={() => handleCountChange("INC")}
      >
        <div css={buttonContentStyles}>+</div>
      </div>
    </div>
  );
};
