import React, { Component } from "react"

import Layout from "./../components/layout"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
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