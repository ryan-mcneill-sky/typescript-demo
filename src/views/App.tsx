/** @jsxImportSource @emotion/react @jsx jsx */
import React, { ReactElement } from "react";
import { Card, ObjectExample, NumberExample } from "../components";
import { Title } from "../components";
import { css, jsx } from "@emotion/react";
import { InterfaceExample } from "../components/InterfaceExample";

export const App = (): ReactElement => (
  <div
    css={css({
      fontFamily: "Sky Text",
      body: {
        margin: 0
      }
    })}
  >
    <Title title="We โค๏ธ TypeScript" />
    <Card title="Strongly Typed" icon="๐ช">
      <blockquote css={css({ fontSize: "18px" })}>
        <div>๐ฆ JavaScript is weakly typed</div>
        <div>
          ๐ TypeScript adds type definitions, that get stripped on code build
        </div>
        <div>โ Good for large code bases</div>
        <div>๐ Prevents simple bugs</div>
        <div>โ๏ธ Type inference allows TS to operate on plain old JS files</div>
        <div>๐ Increasing adoption</div>
        <div>
          ๐จโ๐ป Community support for packages without TS built in (definitely
          typed)
        </div>
      </blockquote>
    </Card>
    <Card colour="lightGrey" title="Counter Example" icon="๐ข">
      <NumberExample />
    </Card>
    <Card colour="grey" title="Complex Object" icon="๐งถ">
      <ObjectExample />
    </Card>
    <Card colour="darkGrey" title="Interfaces are Powerful" icon="๐ก">
      <InterfaceExample />
    </Card>
    <Card title="Card title" colour="black">
      Content
    </Card>
  </div>
);
