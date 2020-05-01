import React from "react"
import PillarSectionTitle from "../pillar-section-title/lazy"
import WallPost from "../../svgs/wall-post/lazy"

const PillarSectionEndComponent = props => {
  const { content } = props

  return (
    <PillarSectionTitle>
      <h2>Now it's your turn</h2>

      <WallPost />

      {content.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </PillarSectionTitle>
  )
}

PillarSectionEndComponent.defaultProps = {
  content: [
    "That’s all for this guide.",
    "Now I’d like to hear from you:",
    "Did you learn something new?",
    "Which tip are you going to use first?",
    "Either way, let me know by leaving a comment.",
  ],
}

export default PillarSectionEndComponent
