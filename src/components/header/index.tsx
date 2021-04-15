import React from "react";
import styled from "@emotion/styled";
import avatarImageUrl from "../../assets/images/avatar.webp";

const Header = styled.div`
  width: 100%;
  background-color: rgb(50, 50, 50);
  padding: 1.5rem;
  & > a {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 150%;
  text-shadow: 1px 1px 1px #000;
`;

const AvatarWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 1rem;
  border: 0.1rem solid #fff;
  box-shadow: 1px 1px 1px #000;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Avatar = () => (
  <AvatarWrapper>
    <img src={avatarImageUrl} />
  </AvatarWrapper>
);

export default () => (
  <Header>
    <a href="/">
      <Avatar />
      <Title>PeanutBuddha</Title>
    </a>
  </Header>
);
