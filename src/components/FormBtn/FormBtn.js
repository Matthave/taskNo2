import React from "react";
import styled, { css } from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
`;
const Button = styled.button`
  position: relative;
  top: 50%;
  left: 50%;
  width: 175px;
  height: 45px;
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  z-index: 1;
  outline: none;

  &:hover ~ .spanEffect {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover ~ .spanEffect1 {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const SpanEffectStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 175px;
  height: 45px;
  transform: translate(-50%, -50%) rotate(0deg);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  transition: 0.2s linear;
  outline: none;
`;

const SpanRight = styled.span`
  ${SpanEffectStyles};
`;
const SpanLeft = styled.span`
  ${SpanEffectStyles};
`;

function FormBtn({ validateFormFunc }) {
  return (
    <ButtonContainer>
      <Button onClick={(e) => validateFormFunc(e)}>Send</Button>
      <SpanRight className="spanEffect"></SpanRight>
      <SpanLeft className="spanEffect1"></SpanLeft>
    </ButtonContainer>
  );
}

export default FormBtn;
