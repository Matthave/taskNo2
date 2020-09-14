import React from "react";
import styled from "styled-components";

const PixabayWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px 5px;
  color: #aaa;
  z-index: 5;
`;

const Link = styled.a`
  text-decoration: none;
  transition: 0.2s linear;
  color: #aaa;

  &:hover {
    color: #fff;
  }
`;

function PixabayInfo() {
  return (
    <PixabayWrap>
      Image{" "}
      <Link href="https://pixabay.com/pl/users/DarkmoonArt_de-1664300/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3561710">
        {" "}
        DarkmoonArt_de
      </Link>{" "}
      from{" "}
      <Link href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3561710">
        {" "}
        Pixabay
      </Link>
    </PixabayWrap>
  );
}

export default PixabayInfo;
