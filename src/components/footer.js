import React from "react"
import { makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footerInnerDiv: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
    display: `flex`,
    justifyContent: `space-between`,
    position: 'sticky'
  },
  list: {
      listStyle: 'none'
  }
}))

export default function Footer() {
  const classes = useStyles()

  const contactInfo = useStaticQuery(graphql`
    query {
        contact {
            email
            links {
            twitter
            }
        }
    }
    `)

  return (
    <footer className={classes.footer}>
      <div className={classes.footerInnerDiv}>
        <ul className={classes.list}> 
            <li> {contactInfo.contact.email} </li>
            <li> <a href={contactInfo.contact.links.twitter}>Twitter/</a> </li>
            <li> © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.com"> Gatsby</a></li>
        </ul>
      </div>
    </footer>
  )
}
