import React from "react"
import styled from "@emotion/styled"

import {
  BRAND_HIGHLIGHT,
  BRAND_HIGHLIGHT_LIGHT,
  BREAKPOINTS,
} from "src/constants/css-vars"
import { rhythm } from "src/utils/typography"

import Button from "src/components/ui/button"

const FormContainer = styled("div")`
  position: relative;

  display: block;
  padding: ${rhythm(0.75)};

  background-color: ${BRAND_HIGHLIGHT};
  background: -webkit-linear-gradient(
    to top,
    ${BRAND_HIGHLIGHT},
    ${BRAND_HIGHLIGHT_LIGHT}
  );
  background: linear-gradient(
    to top,
    ${BRAND_HIGHLIGHT},
    ${BRAND_HIGHLIGHT_LIGHT}
  );
  color: white;

  @media ${BREAKPOINTS.MEDIUM} {
    padding: ${rhythm(1)};
  }
`

const FormTitle = styled("h3")`
  margin-top: 0;
`

const FormContent = styled("p")`
  margin-bottom: ${rhythm(0.5)};
`

const FormElements = styled("div")``

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
  display: block;
  margin-bottom: ${rhythm(0.5)};
`

const GDPRInput = styled("input")``

const BlogPostSignup = () => {
  const formId = "1yldkd"
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
        style={{ margin: 0 }}
      >
        <FormElements>
          <FormTitle>Enjoy the content?</FormTitle>
          <FormContent>
            Get access to exclusive tips and strategies not found on the blog.
            Sign up below{" "}
            <span role="img" aria-label="arrow pointing down">
              ⬇️
            </span>
            <span role="img" aria-label="finger pointing down">
              👇
            </span>
          </FormContent>
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

export default BlogPostSignup
