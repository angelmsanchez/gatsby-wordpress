import React, { Component } from "react"
// import Img from "gatsby-image"

import Layout from "./../components/layout"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        // const resolutions = post.featured_media ? post.featured_media.localFile.childImageSharp.resolutions : null
        
        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                
                {/* {resolutions &&
                    <div>
                        <Img resolutions={resolutions}/>
                    </div>
                } */}

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {post.acf.facebook && post.acf.twitter && 
                    <div>
                        Facebook
                        <br />
                        {post.acf.facebook}
                        <br />
                        <br />
                        Twitter
                        <br />
                    {post.acf.twitter}
                </div>
                }

            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            acf {
                facebook
                twitter
            }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`