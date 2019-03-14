import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"

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
        <div>
            <h1>Main Menu</h1>
            <ul>
                {data.allWordpressWpApiMenusMenusItems.edges.map((node) =>
                    node.node.items.map((item) =>
                        <li key={item.order}>
                            <Link to={item.object_slug}>
                                {item.title}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )}
  />
)
// export default () => (
//     <StaticQuery
//       query={graphql`
//         query postsQuery2 {
//             allWordpressPost {
//                 edges {
//                     node{
//                         id
//                         title
//                         excerpt
//                         slug
//                         date(formatString: "MMMM DD, YYYY")
//                     }
//                 }
//             }
//         }
//       `}
//       render={data => (
//         <header>
//                 {data.allWordpressPost.edges.map(({node}) => (
//                     <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
//                         <Link to={'post/' + node.slug}>
//                             <h3>{node.title}</h3>
//                         </Link>
//                         <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />
//                         {node.date}
//                     </div>
//                 ))}
//         </header>
//       )}
//     />
//   )
