import React from "react";
import Tiles from "./components/tiles";
import Tile from "./components/tile";
import Header from "./components/header";
import tileDefinitions from "./tile-definitions";

export default () => (
  <>
    <Header />
    <Tiles>
      {tileDefinitions.map((tileDefinition) => (
        <Tile key={tileDefinition.name} tile={tileDefinition} />
      ))}
    </Tiles>
  </>
);
