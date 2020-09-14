import React, { Component } from "react";
import FormView from "../../components/Form/FormView";

export class Form extends Component {
  state = {
    nameValue: "",
    mailValue: "",
    phoneValue: "",
    numberValue: "",
    uploadValue: "",
    checkboxOne: false,
    checkboxTwo: false,
  };

  formInputsChangeFunc = (e) => {
    if (e.target.type === "file") {
      this.setState({
        uploadValue: e.target.files[0],
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateFormFunc = (event) => {
    event.preventDefault();
    const {
      nameValue,
      mailValue,
      phoneValue,
      numberValue,
      uploadValue,
      checkboxOne,
      checkboxTwo,
    } = this.state;

    const patternMail = /^([a-zA-Zęółśążźćń]{3,})@([a-zA-Zęółśążźćń]{3,})\.pl$/;
    const patternPhone = /^(\+48)\s([0-9]{3})\s([0-9]{3})\s([0-9]{3})$/;
    const patternNumber = /^([0-9]{4,6})$/;
    const patternSize = 10485760;
    const patternType = "image/jpeg";

    if (
      nameValue !== "" &&
      patternMail.test(mailValue) &&
      patternPhone.test(phoneValue) &&
      patternNumber.test(numberValue) &&
      patternSize > uploadValue.size &&
      patternType === uploadValue.type &&
      checkboxOne &&
      checkboxTwo
    ) {
      console.log("Success");
    } else {
      console.log("Fail");
    }
  };

  render() {
    const { nameValue, mailValue, phoneValue, numberValue } = this.state;
    return (
      <FormView
        formInputsChangeFunc={this.formInputsChangeFunc}
        validateFormFunc={this.validateFormFunc}
        nameValue={nameValue}
        mailValue={mailValue}
        phoneValue={phoneValue}
        numberValue={numberValue}
      />
    );
  }
}

export default Form;
