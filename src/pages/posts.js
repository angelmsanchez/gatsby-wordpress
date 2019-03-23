import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Img from 'gatsby-image'

import Layout from "../components/layout"

class PostsPage extends Component {
    render() {
        const data = this.props.data

        return(
          <Layout>
                <h1>Posts</h1>

                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        {node.featured_media && node.featured_media.localFile.childImageSharp.resolutions &&
                            <div>
                                <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
                            </div>
                        }
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>
                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        {node.date}
                    </div>
                ))}

            </Layout>
            )
    }
}

PostsPage.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsPage

export const query = graphql`
    query postsQuery {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    acf {
                        facebook
                        twitter
                    }
                    featured_media {
                        localFile{
                          childImageSharp{
                            resolutions(width: 300, height: 300){
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
