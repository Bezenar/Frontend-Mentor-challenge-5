<template>
  <div id="app">
    <div class="heading">
      <span class="headingBold">{{ headingBold }}</span>
      <span class="headingThin"> {{ headingThin }}</span>
    </div>
    <div class="form">
      <form action="#" method="GET" @submit="formValidate">
        <fieldset>
          <legend class="hide"></legend>
          <div
            v-for="item in formInputs"
            :key="item.id"
            class="form-input-container"
          >
            <label :for="item.idName">
              <input
                :id="item.idName"
                :type="item.inputType"
                :placeholder="item.placeholder"
                v-model="item.value"
              />
              <img
                v-if="item.show"
                src="../public/images/icon-error.svg"
                alt="error"
                title="error"
                class="error-img"
              />
            </label>
            <p class="error-text" v-if="item.show">{{ item.errorText }}</p>
          </div>
        </fieldset>
        <div class="button-container">
          <button type="submit" id="submit">
            Claim your free trial
          </button>
        </div>
        <p class="tas">
          By clicking the button, you are agreeing to our
          <a href="#">Terms and Services</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import formValidate from "./mixins/formValidate";
export default {
  name: "App",
  mixins: [formValidate],
  data() {
    return {
      headingBold: "Try it free 7 days",
      headingThin: "then $20/mo. thereafter",
      formInputs: [
        {
          id: 1,
          placeholder: "First Name",
          inputType: "text",
          errorText: "First Name cannot be empty",
          idName: "firstName",
          value: "",
          show: false,
          validate: ""
        },
        {
          id: 2,
          placeholder: "Last Name",
          inputType: "text",
          errorText: "Last Name cannot be empty",
          idName: "lastname",
          value: "",
          show: false,
          validate: false
        },
        {
          id: 3,
          placeholder: "Email Address ",
          inputType: "text",
          errorText: "Look like this is not an email",
          idName: "email",
          value: "",
          show: false,
          validate: false
        },
        {
          id: 4,
          placeholder: "Password",
          inputType: "password",
          errorText: "Password cannot be empty",
          idName: "pass",
          value: "",
          show: false,
          validate: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../public/scss/html-coding/_resp.scss";
@import "../public/scss/html-coding/_colors.scss";
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0.92rem;
  @include resp("s") {
    padding: 0;
    padding-top: 3.8rem;
  }
  .heading {
    width: 100%;
    background-color: $blue;
    padding: 1.1rem 0;
    border-radius: 0.65rem;
    text-align: center;
    color: white;
    box-shadow: 0 7px 3px 0 darken($color: $red, $amount: 5);
    @include resp("s") {
      padding: 1.3rem 4rem 1.1rem;
    }
    .headingThin {
      font-weight: 200;
    }
  }
  .form {
    margin-top: 1.3rem;
    box-shadow: 0 7px 3px 0 darken($color: $red, $amount: 5);
    border-radius: 0.5rem;
    background-color: white;
    @include resp("s") {
      margin-top: 1.45rem;
      width: 100%;
    }
    fieldset {
      padding: 2.5rem 2.45rem 0;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      @include resp("s") {
        padding: 1.5rem 1.5rem 0rem;
      }
      .form-input-container {
        padding-bottom: 1.2rem;
        @include resp("s") {
          padding-bottom: 1rem;
        }
        label {
          position: relative;
          input {
            border: 1px solid $grayishBlue;
            border-radius: 0.3rem;
            width: 28.75rem;
            padding: 1.15rem 2rem;
            font-size: 15px;
            word-spacing: -1px;
            letter-spacing: 0.5px;
            @include resp("s") {
              width: 17.45rem;
              padding: 1.3rem 1.1rem 1.1rem;
              font-size: 14px;
              word-spacing: 0px;
              letter-spacing: 0.4px;
              font-weight: 600;
            }
            &:focus {
              border-color: $darkBlue;
            }
            &.error {
              border-color: $red;
            }
          }
          img {
            position: absolute;
            width: 1rem;
            height: 1rem;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .error-text {
          text-align: end;
          font-size: 10px;
          color: $red;
        }
      }
    }
    .button-container {
      padding: 0 2.5rem;
      @include resp("s") {
        padding: 0 1.5rem;
      }
      button {
        background-color: $green;
        border: 1px solid $green;
        border-radius: 0.3rem;
        width: 28.75rem;
        padding: 1.15rem 2rem;
        font-size: 15px;
        word-spacing: 3px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        @include resp("s") {
          width: 17.45rem;
          word-spacing: 0px;
          letter-spacing: 0.2px;
        }
        &:hover {
          transition: all 0.3s linear;
          color: $darkBlue;
          border: 1px solid $darkBlue;
        }
      }
    }
  }
  .tas {
    color: $darkBlue;
    text-align: center;
    font-size: 10px;
    padding-top: 0.9rem;
    padding-right: 0.6rem;
    word-spacing: 0px;
    letter-spacing: 0.5px;
    padding-bottom: 2.7rem;
    @include resp("s") {
      padding: 0.6rem 2.5rem 1.9rem;
      line-height: 20px;
    }
    a {
      color: $red;
      cursor: pointer;
      @include resp("s") {
        font-weight: 600;
      }
    }
  }
}
</style>
