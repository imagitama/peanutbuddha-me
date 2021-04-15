import React from "react";
import styled from "@emotion/styled";
import { TileDefinition } from "../../tile-definitions";

interface TileProps {
  backgroundImageUrl?: string;
  hasUrl: boolean;
}

const Tile = styled.div`
  width: 33.3%;
  height: 33.3%;
  background-color: ${(props) => props.color};
  ${({ backgroundImageUrl }: TileProps) =>
    backgroundImageUrl
      ? `background-image: url(${backgroundImageUrl});`
      : undefined}
  background-size: cover;
  text-align: center;
  transition: all 100ms;
  ${({ hasUrl }: TileProps) =>
    hasUrl
      ? `&:hover {
    transform: scale(1.1);
  }`
      : ""}
`;

const Aligner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  & > div {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 125%;
  margin-bottom: 1rem;
`;

const Description = styled.p``;

export default ({
  tile: { title, description, url, color, backgroundImageUrl },
}: {
  tile: TileDefinition;
}) => {
  const Wrapper = ({ children }: { children: React.ReactChild }) =>
    url ? <a href={url}>{children}</a> : <span>{children}</span>;

  return (
    <Tile
      hasUrl={url !== undefined}
      color={color}
      backgroundImageUrl={backgroundImageUrl}
    >
      <Wrapper>
        <Aligner>
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
        </Aligner>
      </Wrapper>
    </Tile>
  );
};
