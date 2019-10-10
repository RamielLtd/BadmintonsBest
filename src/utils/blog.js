export function getPostsFromQuery(posts) {
  if (posts) {
    return posts.edges
      .map(edge => edge.node)
      .map(node => Object.assign({}, node.frontmatter, node.fields))
  }

  return []
}
