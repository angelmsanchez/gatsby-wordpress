module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    featured_media {
                        localFile {
                            childImageSharp {
                                resolutions(width:500, height: 200) {
                                    src
                                    width
                                    height
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
