import React from "react";
import styled from "styled-components";

// const styledLinkButton = styled.a`
//     background-color:${(props) => (props.outline ? "#fff" : "#ca8f48")};
//     color:${(props) => (props.outline ? "#ca8f48" : "#fff")};
//     cursor: pointer;
//     height: 40px;
// `

const StyledLinkButton = styled.a`
  background-color: #fff;
  color: #ca8f48;
  cursor: pointer;
  height: 40px;
  border: 1px solid #ca8f48;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`;

export const LinkButton = (props) => {
  return (
    <StyledLinkButton href={props.linkHref} className={props.linkClass}>
      {props.text}
    </StyledLinkButton>
  );
};
