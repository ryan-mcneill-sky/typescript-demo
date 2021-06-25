/** @jsxImportSource @emotion/react @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

// Classes can be built by implementing interfaces 💡

interface BaseCharacter {
  name: string;
  age: number;
}

class Character implements BaseCharacter {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString(): string {
    return `The character's name is ${this.name} and they are ${this.age} years old.`;
  }
}

// Or new interfaces can be created by extending others 💡

type Faction = "Rebel Alliance" | "Galactic Empire";

interface StarWarsCharacter extends BaseCharacter {
  faction: Faction;
}

export const InterfaceExample = () => {
  const character = new Character("Luke Skywalker", 25);

  return (
    <div>
      <h3>Classes</h3>
      <div>{character.toString()}</div>
      <h3>Extended Interfaces</h3>
      <div>?</div>
    </div>
  );
};
