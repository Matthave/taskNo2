import React from "react";
import styled from "styled-components";
import { device } from "../../style/mediaQuery/mediaQuery";
import FormBtn from "../FormBtn/FormBtn";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90vh;
  min-height: 700px;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 10px 1px #111;
  border-radius: 10px;
  padding: 20px 5px;
  z-index: 2;

  @media ${device.laptop} {
    left: 75%;
  }
`;

const Input = styled.input`
  width: ${(props) => (props.checkBoxInput ? "auto" : "90%")};
  max-width: 400px;
  margin: ${(props) => (props.checkBoxInput ? "0 5px" : "5px auto 15px")};
  padding: 10px 15px;
  border-radius: 100px;
  border: 2px solid transparent;
  transition: 0.1s;
  vertical-align: middle;

  &:focus {
    border: ${(props) =>
      props.disabledFocus ? "2px solid transparent" : "2px solid #222"};
  }
`;

const Label = styled.label`
  width: 85%;
  margin: ${(props) => (props.biggerMargin ? "7.5px auto" : "0 auto")};
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
`;

function FormView({
  formInputsChangeFunc,
  validateFormFunc,
  nameValue,
  mailValue,
  phoneValue,
  numberValue,
}) {
  return (
    <Form>
      <Label htmlfor="name">Name*</Label>
      <Input
        id="name"
        name="nameValue"
        value={nameValue}
        onChange={(e) => formInputsChangeFunc(e)}
      />

      <Label htmlfor="mail">E-mail*</Label>
      <Input
        id="mail"
        name="mailValue"
        value={mailValue}
        onChange={(e) => formInputsChangeFunc(e)}
      />

      <Label htmlfor="phone">Phone*</Label>
      <Input
        id="phone"
        name="phoneValue"
        value={phoneValue}
        onChange={(e) => formInputsChangeFunc(e)}
      />

      <Label htmlfor="number">Number*</Label>
      <Input
        id="number"
        name="numberValue"
        value={numberValue}
        onChange={(e) => formInputsChangeFunc(e)}
      />

      <Label htmlfor="upload">Image Upload*</Label>
      <Input
        disabledFocus
        type="file"
        id="upload"
        name="uploadValue"
        onChange={(e) => formInputsChangeFunc(e)}
      />
      <Label htmlfor="checkboxOne" biggerMargin>
        Do You wanna send this form?*
        <Input
          disabledFocus
          checkBoxInput
          type="checkbox"
          id="checkboxOne"
          name="checkboxOne"
          onChange={(e) => formInputsChangeFunc(e)}
        />
      </Label>

      <Label htmlfor="checkboxTwo" biggerMargin>
        ...But Do You realy want it?*
        <Input
          disabledFocus
          checkBoxInput
          autocomplete="off"
          type="checkbox"
          id="checkboxTwo"
          name="checkboxTwo"
          onChange={(e) => formInputsChangeFunc(e)}
        />
      </Label>

      <FormBtn validateFormFunc={validateFormFunc} />
    </Form>
  );
}

export default FormView;