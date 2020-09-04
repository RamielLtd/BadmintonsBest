import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "src/utils/typography"

import Button from "src/components/ui/button"

const FormContainer = styled("div")`
  position: relative;
`

const FormElements = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EmailInput = styled("input")`
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

const GDPRLabel = styled("label")`
  margin-bottom: ${rhythm(0.5)};
`

const GDPRInput = styled("input")``

const HomepageSignup = () => {
  const formId = "36wygo"
  const url = `https://sendfox.com/form/mnlkep/${formId}`

  return (
    <FormContainer>
      <form
        method="post"
        action={url}
        className="sendfox-form"
        id={formId}
        data-async="true"
        data-recaptcha="true"
      >
        <FormElements>
          <EmailInput type="email" placeholder="Email" name="email" required />
          <GDPRLabel>
            <GDPRInput type="checkbox" name="gdpr" value="1" required /> I agree
            to receive email updates and promotions.
          </GDPRLabel>
          {/* no botz please */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="a_password"
              tabIndex="-1"
              defaultValue=""
              autoComplete="off"
            />
          </div>
          <Button cta type="submit">
            Send me free tips
          </Button>
        </FormElements>
      </form>
      <script src="https://sendfox.com/js/form.js"></script>
    </FormContainer>
  )
}

export default HomepageSignup
