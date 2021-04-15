import React from "react";
import styled from "@emotion/styled";

const Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export default ({ children }: { children: React.ReactChild[] }) => (
  <Tiles>{children}</Tiles>
);
