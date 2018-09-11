import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
    {children()}
    
    <Footer data={data}>
      Oh, I also take photos...check my album. If you have more time and are really up to the challenge, peep the blog my fiancée and I created! <a href="mailto:info@bottled-sunshine.com">Email Us</a> to find out more! © 2018
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink(sort:{ fields: [createdAt], order: ASC }){
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
`
