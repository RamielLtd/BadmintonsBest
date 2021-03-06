import React from "react"

const Placeholder = () => null

const PillarSectionEnd = props => {
  // While the component is loading, we'll render a fallback placeholder.
  // (The Placeholder is a component that renders nothing).
  const [Component, setComponent] = React.useState(() => Placeholder)

  // After the initial render, kick off a dynamic import to fetch
  // the real component, and set it into our state.
  React.useEffect(() => {
    import("./lazy.js").then(PillarSectionEndComponent =>
      setComponent(() => PillarSectionEndComponent.default)
    )
  }, [])

  return <Component {...props} />
}

export default PillarSectionEnd
