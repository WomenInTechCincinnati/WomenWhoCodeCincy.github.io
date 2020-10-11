import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby";

const ContactPage = () => {
  const contactInfo = useStaticQuery(graphql`
    query {
      contact {
        email
        links {
          twitter
        }
      }
    }`)
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Info</h1>
      <p>{contactInfo.contact.email}</p>
      <a href={contactInfo.contact.links.twitter}>twitter</a>
    </Layout>
  )
}

export default ContactPage