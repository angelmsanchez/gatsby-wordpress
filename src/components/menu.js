import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"

import "./menu.scss"

export default () => (
  <StaticQuery
    query={graphql`
        query LayoutQuery {
            allWordpressWpApiMenusMenusItems {
                edges {
                    node {
                        id
                        name
                        items {
                            title
                            object_slug
                            order
                        }
                    }
                }
            }
        } 
    `
    }
    render={data => (
        <nav id="menu">
            {data.allWordpressWpApiMenusMenusItems.edges.map((node) =>
                node.node.items.map((item) =>
                    <Link key={item.object_slug} to={item.object_slug}>
                        {item.title}
                    </Link>
                )
            )}
            <Link to={"/posts"}>
                Blog
            </Link>
        </nav>
    )}
  />
)
