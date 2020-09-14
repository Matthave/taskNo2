import React, { Component } from "react";
import FormView from "../../components/Form/FormView";
import { makeLinkForDownloadFunc } from "../../utils";

export class Form extends Component {
  state = {
    nameValue: "",
    mailValue: "",
    phoneValue: "",
    numberValue: "",
    uploadValue: "",
    file: null,
    checkboxOne: false,
    checkboxTwo: false,
    formResultMessage: "",
    formSendResult: false,
  };

  formInputsChangeFunc = (e) => {
    const target = e.target;
    if (target.type === "file") {
      if (target.files.length !== 0) {
        this.setState({
          uploadValue: target.files[0],
          file: URL.createObjectURL(target.files[0]),
        });
      }
    } else if (target.type === "checkbox") {
      this.setState({
        [target.name]: target.checked,
      });
    } else {
      this.setState({
        [target.name]: target.value,
      });
    }
    const patternMail = /^([a-zA-Zęółśążźćń]{3,})@([a-zA-Zęółśążźćń]{3,})\.pl$/;
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
      const formData = [
        nameValue,
        mailValue,
        phoneValue,
        numberValue,
        uploadValue.name,
      ];

      makeLinkForDownloadFunc(formData);
      this.setState({
        formResultMessage: "Form has been sent successfully!",
        formSendResult: true,
        nameValue: "",
        mailValue: "",
        phoneValue: "",
        numberValue: "",
        checkboxOne: false,
        checkboxTwo: false,
        file: null,
      });
    } else {
      this.setState({
        formResultMessage: "Ups! Need correct the data in form!",
      });
    }
    setTimeout(() => {
      this.setState({
        formResultMessage: "",
        formSendResult: false,
      });
    }, 3000);
  };

  render() {
    const {
      nameValue,
      mailValue,
      phoneValue,
      numberValue,
      formResultMessage,
      formSendResult,
      file,
      checkboxOne,
      checkboxTwo,
    } = this.state;
    return (
      <FormView
        formInputsChangeFunc={this.formInputsChangeFunc}
        validateFormFunc={this.validateFormFunc}
        nameValue={nameValue}
        mailValue={mailValue}
        phoneValue={phoneValue}
        numberValue={numberValue}
        checkboxOne={checkboxOne}
        checkboxTwo={checkboxTwo}
        formResultMessage={formResultMessage}
        formSendResult={formSendResult}
        file={file}
      />
    );
  }
}

export default Form;
