// RelatedContentFactory.js
import { includes, orderBy } from "lodash"

export class RelatedContentFactory {
  // (1.) Create by passing in articles, currentSlug
  constructor(articles, currentArticleSlug) {
    // (2.) Don't include the current article in articles list
    this.articles = articles.edges.filter(
      aArticle => aArticle.node.fields.slug !== currentArticleSlug
    )

    this.currentArticleSlug = currentArticleSlug
    // (3.) Set default values
    this.maxArticles = 3
    this.categories = []
    this.tags = []
  }

  // (4.) Builder pattern usage
  setMaxArticles(m) {
    this.maxArticles = m
    return this
  }

  setCategories(categoriesArray) {
    this.categories = categoriesArray
    return this
  }

  setTags(tagsArray) {
    this.tags = tagsArray
    return this
  }

  getArticles() {
    const { categories, tags, articles, maxArticles } = this
    // (5.) We use an Identity Map to keep track of score
    const identityMap = {}

    function getSlug(article) {
      return article.node.fields.slug
    }

    function addToMap(article) {
      const slug = getSlug(article)
      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0,
        }
      }
    }

    // // (7.) For category matches, we add 2 points
    function addCategoriesPoints(article, categories) {
      const categoryPoints = 2
      const slug = getSlug(article)

      article.node.frontmatter.categories.forEach(aCategory => {
        if (includes(categories, aCategory)) {
          identityMap[slug].points += categoryPoints
        }
      })
    }

    // (8.) For tags matches, we add 1 point
    function addTagsPoints(article, tags) {
      const tagPoint = 1
      const slug = getSlug(article)

      article.node.frontmatter.tags.forEach(aTag => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint
        }
      })
    }

    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map(slug => identityMap[slug])
    }

    // (6.) Map over all articles, add to map and add points
    for (let article of articles) {
      addToMap(article)

      if (categories && categories.length > 0) {
        addCategoriesPoints(article, categories)
      }

      if (tags && tags.length > 0) {
        addTagsPoints(article, tags)
      }
    }

    // (9.) Convert the identity map to an array
    const arrayIdentityMap = getIdentityMapAsArray()

    // (10.) Use a lodash utility function to sort them
    // by points, from greatest to least
    const similarArticles = orderBy(arrayIdentityMap, ["points"], ["desc"])

    // (11. Take the max number articles requested)
    return similarArticles.splice(0, maxArticles)
  }
}
