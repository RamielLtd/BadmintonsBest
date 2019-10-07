import React from "react"
import { Link } from "gatsby"

const About = () => (
  <div>
    <h3 style={{ marginTop: 0 }}>Legal Information</h3>
    <p>
      This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a participant
      in the Amazon Services LLC Associates Program, an affiliate advertising
      program designed to provide a means for sites to earn advertising fees by
      advertising and linking to Amazon.com. Ramiel Ltd is compensated for
      referring traffic and business to these companies. Copyright © Ramiel Ltd
    </p>
    <ul>
      <li>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </li>
      <li>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </li>
    </ul>
  </div>
)

export default About
