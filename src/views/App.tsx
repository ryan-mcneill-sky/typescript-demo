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
    <Title title="We ❤️ TypeScript" />
    <Card title="Strongly Typed" icon="💪">
      <blockquote css={css({ fontSize: "18px" })}>
        <div>📦 JavaScript is weakly typed</div>
        <div>
          🎉 TypeScript adds type definitions, that get stripped on code build
        </div>
        <div>✅ Good for large code bases</div>
        <div>🐛 Prevents simple bugs</div>
        <div>⁉️ Type inference allows TS to operate on plain old JS files</div>
        <div>📈 Increasing adoption</div>
        <div>
          👨‍💻 Community support for packages without TS built in (definitely
          typed)
        </div>
      </blockquote>
    </Card>
    <Card colour="lightGrey" title="Counter Example" icon="🔢">
      <NumberExample />
    </Card>
    <Card colour="grey" title="Complex Object" icon="🧶">
      <ObjectExample />
    </Card>
    <Card colour="darkGrey" title="Interfaces are Powerful" icon="💡">
      <InterfaceExample />
    </Card>
    <Card title="Card title" colour="black">
      Content
    </Card>
  </div>
);
