import React from "react"
import styled from "@emotion/styled"

const IframeHolder = styled("div")`
  padding-bottom: 56.25%;
  position: relative;
  height: 0px;
  overflow: hidden;
  margin-bottom: 1.0725rem;
`
const Iframe = styled("iframe")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const YouTube = props => {
  const { id, title } = props

  return (
    <IframeHolder className="gatsby-resp-iframe-wrapper">
      <Iframe
        src={`https://www.youtube.com/embed/${id}`}
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${id}?autoplay=1><img src=https://img.youtube.com/vi/${id}/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        loading="lazy"
      ></Iframe>
    </IframeHolder>
  )
}

export default YouTube
