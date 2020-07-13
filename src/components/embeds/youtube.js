import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { EVENT_CLICK, YOUTUBE_EMBED_ACTIVATE } from "../../constants/gtm"

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
  const { id, title, start } = props

  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1${
    start !== 0 ? `&start=${start}` : ""
  }`

  return (
    <IframeHolder className="gatsby-resp-iframe-wrapper">
      <Iframe
        src={`https://www.youtube.com/embed/${id}`}
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a data-ga-event=${EVENT_CLICK} data-ga-event-category=${YOUTUBE_EMBED_ACTIVATE}
        data-ga-event-action=${title} data-ga-event-label=${embedUrl} href=${embedUrl}><img src=https://img.youtube.com/vi/${id}/hqdefault.jpg alt='${title}'><span>▶</span></a>`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        loading="lazy"
      ></Iframe>
    </IframeHolder>
  )
}

YouTube.defaultProps = {
  start: 0,
}

YouTube.propTypes = {
  id: PropTypes.string,
  start: PropTypes.number,
  title: PropTypes.string,
}

export default YouTube
