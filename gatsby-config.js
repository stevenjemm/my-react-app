module.exports = {
  siteMetadata: {
    title: 'SJemm Portfolio',
    description: "I love to learn. Coding and iOS Development is just one of those things I focused on and fell in love with! I also enjoy photography,",
    keywords: 'learning, ios development, animations, photography, instagram stories'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'em7usnol4re2',
        accessToken: '0716ac8fff0f5e23d86f14c39813708819ca9a24d3594560a5cf33742ab591fc'
      }
    }
  ],
}
