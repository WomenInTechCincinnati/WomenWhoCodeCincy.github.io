import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const ContactPage = () => {
  const contactInfo = useStaticQuery(graphql`
    query {
      contact {
        email
        links {
          twitter
          facebook
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Info</h1>
      <p>{contactInfo.contact.email}</p>
      <p><a href={contactInfo.contact.links.twitter}>twitter</a></p>
      <p><a href={contactInfo.contact.links.facebook}>facebook</a></p>
    </Layout>
  )
}

export default ContactPage
