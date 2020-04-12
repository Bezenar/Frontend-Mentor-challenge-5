/* eslint-disable no-undef */
export default {
  methods: {
    formValidate(event) {
      //Regular expression for email pattern
      const emailPattern = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,20}/g;
      let result = false;
      //Start validation
      this.formInputs.forEach(element => {
        // check inputs value. If it is empty chage SHOW to true to show errors
        if (element.value === "") {
          if (element.show === false) {
            element.show = true;
          }
        } else {
          //If it is not empty change SHOW to false to hide errors
          element.show = false;
          if (element.idName !== "email") {
            //change Validation to true
            element.validate = true;
          } else {
            //Email at this moment don't pass validation. Need to check Match() with regular expression.
            element.validate = false;
          }
        }
        //Check if Email match with regular expression.
        if (element.idName === "email") {
          //If email don't match with regular expression. Change SHOW to true, to show errors
          if (!element.value.match(emailPattern)) {
            if (element.show === false) {
              element.show = true;
            }
          } else {
            //if email match with regular expression. Change SHOW to false and hide errors
            //And change validation for email to true
            element.show = false;
            element.validate = true;
          }
        }
      });
      this.formInputs.forEach(el => {
        if (el.validate === true) {
          result = true;
        } else {
          result = false;
        }
      });
      if (result === false) {
        event.preventDefault();
      } else {
        return true;
      }
    }
  }
};
