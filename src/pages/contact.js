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
          meetup
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Info</h1>
      <p>{contactInfo.contact.email}</p>
      <p>
        <a
          href={contactInfo.contact.links.twitter}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
      <p>
        <a
          href={contactInfo.contact.links.facebook}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </p>
      <p>
        <a
          href={contactInfo.contact.links.meetup}
          target="_blank"
          rel="noreferrer"
        >
          Meetup
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
