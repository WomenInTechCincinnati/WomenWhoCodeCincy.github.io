import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { fetchResults } from "../utils/api"

class MembersPage extends Component {
  state = {
    fetchedMembersList: [],
    hasError: false
  }

  async componentDidMount() {
    try {
      const response = await fetchResults(
        "https://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/members"
      )
      if (response.success) {
        this.setState({ fetchedMembersList: response.results, hasError: false })
      } else {
        this.setState({ hasError: true })
      }
    } catch {
      this.setState({ hasError: true })
    }
  }

  // Backup Image in case url from database is broken
  addDefaultSrc(ev) {
    ev.target.src =
      "https://avatars3.githubusercontent.com/u/13358086?s=200&v=4"
  }

  render() {
    const { fetchedMembersList, hasError } = this.state

    const membersList = fetchedMembersList.map((member, index) => (
      <div key={member.name + index}>
        {member.image_url && (
          <img
            onError={this.addDefaultSrc}
            src={member.image_url}
            alt={member.name + `'s beautiful face`}
            style={{ maxWidth: 200 }}
          />
        )}
        <h2>{member.name}</h2>
        {member.location && (
          <div>
            <p>{member.location}</p>
          </div>
        )}
        {member.favorite_techs && (
          <div>
            <h3>Favorite Technologies</h3>
            <ul>
              {member.favorite_techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {member.hobbies && (
          <div>
            <h3>Hobbies</h3>
            <ul>
              {member.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        )}
        {member.links && (
          <div>
            <h3>Contact Info</h3>
            <ul>
              {member.links.twitter && (
                <li>
                  <a href={member.links.twitter}>Twitter</a>
                </li>
              )}
              {member.links.facebook && (
                <li>
                  <a href={member.links.facebook}>Facebook</a>
                </li>
              )}
              {member.links.linkedIn && (
                <li>
                  <a href={member.links.linkedIn}>LinkedIn</a>
                </li>
              )}
              {member.links.website && (
                <li>
                  <a href={member.links.website}>Website</a>
                </li>
              )}
              {member.links.github && (
                <li>
                  <a href={member.links.github}>Github</a>
                </li>
              )}
              {member.links.meetup && (
                <li>
                  <a href={member.links.meetup}>Meetup</a>
                </li>
              )}
            </ul>
          </div>
        )}
        <hr />
      </div>
    ))

    return (
      <Layout>
        <SEO title="Chapter Members" />
        <h1>Chapter Members</h1>
        {hasError && <p>Unable to fetch members.</p>}
        <section className="members">{membersList}</section>
      </Layout>
    )
  }
}

export default MembersPage
