import React from "react";
import styled from "styled-components";

const StyledGoldButton = styled.button`
  background-color: ${(props) => (props.outline ? "#fff" : "#ca8f48")};
  color: ${(props) => (props.outline ? "#ca8f48" : "#fff")};
  cursor: pointer;
  height: 40px;
  border: 1px solid #ca8f48;
  font-size: 14px;
  font-weight: 500;
`;

const GoldButton = (props) => {
  return (
      <StyledGoldButton onClick={props.clickBtn} className={props.classBtn}>
          {props.textBtn}
      </StyledGoldButton>
  );
};

export default GoldButton;
