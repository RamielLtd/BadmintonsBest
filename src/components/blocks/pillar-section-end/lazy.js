import React from "react"
import PillarSectionTitle from "../pillar-section-title/lazy"
import WallPost from "../../svgs/wall-post/lazy"

const PillarSectionEndComponent = props => {
  const { content, title } = props

  return (
    <PillarSectionTitle>
      <h2>{title}</h2>

      <WallPost />

      {content.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </PillarSectionTitle>
  )
}

PillarSectionEndComponent.defaultProps = {
  title: "Now it's your turn",
  content: [
    "That’s all for this guide.",
    "Now I’d like to hear from you:",
    "Did you learn something new?",
    "Which tip are you going to use first?",
    "Either way, let us know on Twitter, Facebook or Instagram",
  ],
}

export default PillarSectionEndComponent
