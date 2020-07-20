import React from "react"
import styled from "@emotion/styled"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import { rhythm } from "src/utils/typography"
import {
  FORM_MESSAGE_BACKGROUND_COLOUR,
  FORM_MESSAGE_TEXT_COLOUR,
} from "src/constants/css-vars"

import Button from "src/components/ui/button"

const FormContainer = styled("div")`
  position: relative;
`

const FormElements = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled("input")`
  display: block;
  width: 100%;
  margin-bottom: ${rhythm(0.5)};
  padding: ${rhythm(0.28)} ${rhythm(0.5)};
  border: none;
  border-radius: 5px;

  &:disabled {
    color: inherit;
    opacity: 0.75;
  }
`

const FormMessage = styled("div")`
  position: absolute;
  bottom: -10px;
  left: 0;
  transform: translateY(100%);

  display: block;
  width: 100%;
  padding: ${rhythm(0.5)};
  border-radius: 5px;

  background-color: ${FORM_MESSAGE_BACKGROUND_COLOUR};
  color: ${FORM_MESSAGE_TEXT_COLOUR};

  &::before {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${FORM_MESSAGE_BACKGROUND_COLOUR};

    content: "";
  }
`

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  const isSending = status === "sending"
  const isError = status === "error"
  const isSuccess = status === "success"

  return (
    <FormContainer>
      <FormElements>
        <Input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
          disabled={isSending || isSuccess}
        />
        <Button cta onClick={submit} disabled={isSending || isSuccess}>
          {isSending
            ? "Joining"
            : isSuccess
            ? "Success! Badminton tips on the way 📧"
            : "Join the Community"}
        </Button>
      </FormElements>
      {isError && (
        <FormMessage
          status="error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {/* {isSuccess && (
        <FormMessage
          status="success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )} */}
    </FormContainer>
  )
}

const HomepageSignup = () => {
  const url =
    "https://badmintonsbest.us17.list-manage.com/subscribe/post?u=dfb80e8c76138c0be77aa655c&amp;id=672e6750ae"

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default HomepageSignup
