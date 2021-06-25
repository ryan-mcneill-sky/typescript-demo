/** @jsxImportSource @emotion/react @jsx jsx */
import React from "react";
import { css, CSSObject, jsx } from "@emotion/react";
import { fakeResponse } from "../__mocks__";
import { Status } from "../__mocks__/fakeResponse";

interface Options {
  id: number;
  value: string;
}

interface FakeResponse {
  /* This is defined as required and a boolean */
  loading: boolean;
  /* This can be ONE OF existing types */
  error: boolean | Error;
  /* This has an explicitly defined object structure */
  data: {
    characters: {
      // These keys share the same structure, so this can be abstracted to a single interface for DRY purposes
      rebels: Options[];
      imperials: Options[];

      /**
       * TypeScript + Generics provide lots more options
       *
       * Pick for example allows you to specify which keys from a type you want
       * to use, so the following example would create a type that looks like
       * this: {id: number;}[]
       */
      // republic: Pick<Options, "id">[];

      /**
       * Omit for example does the inverse, to allow you to remove a specific
       * key from another type, so the following example would create a type
       * that looks like: {value: string;}[]
       */
      // separatists: Omit<Options, "id">[];
    };

    // This is also a boolean but the question mark indicates it's optional
    isVisible?: boolean;
    // This extends an enum to provide constants that can be shared across a code base
    status: Status;
  };
}

const flexStyles: CSSObject = {
  width: "50%",
  padding: "20px 0"
};

export const ObjectExample = () => {
  const {
    data: { status, isVisible, characters },
    error,
    loading
  }: FakeResponse = fakeResponse;

  if (loading) return <>LOADING</>;
  if (error) return <>ERROR</>;

  return (
    <div
      css={css({
        width: "80%",
        margin: "0 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        flexWrap: "wrap"
      })}
    >
      <div css={css(flexStyles)}>
        <h3>Rebels</h3>
        <select name="rebels" id="rebels-select">
          {characters.rebels.map(({ id, value }) => (
            <option value={id}>{value}</option>
          ))}
        </select>
      </div>
      <div css={css(flexStyles)}>
        <h3>Imperials</h3>
        <div>
          <select name="imps" id="imps-select">
            {characters.imperials.map(({ id, value }) => (
              <option value={id}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <div css={css(flexStyles)}>
        <h3>isVisible</h3>
        <div>{`${isVisible}`}</div>
      </div>
      <div css={css(flexStyles)}>
        <h3>Status</h3>
        <div>{status}</div>
      </div>
    </div>
  );
};
