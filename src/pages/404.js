import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <img src='https://media4.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy_s.gif' alt='polite cat' />
      <h1>404: Not Found</h1>
      <p>Hum... Vous faites mauvaise route!</p>

      <Link to ='/'>Retourner à l'accueil?</Link>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
