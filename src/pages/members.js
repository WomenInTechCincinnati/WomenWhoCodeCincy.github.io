import React, { Component } from "react";
import Layout from "../components/layout";
import MembersItem from "../components/MembersItem";
import SEO from "../components/seo";
import { fetchResults } from "../utils/api";

class MembersPage extends Component {
  state = {
    membersList: [],
    hasError: false
  }

  async componentDidMount() {
    try {
      const response = await fetchResults("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/members");
      if (response.success) {
        this.setState({ membersList: response.results, hasError: false });
      } else {
        this.setState({ hasError: true });
      }
    } catch {
      this.setState({ hasError: true });
    }
  }

  render() {
    const { membersList, hasError } = this.state

    return (<Layout>
      <SEO title="Chapter Members" />
      <h1>Chapter Members</h1>
      {hasError && <p>Unable to fetch members.</p>}
      <section className="members">
        {membersList.map((member, index) => (
          <MembersItem
            key={index}
            name={member.name}
            image={member.image_url}
            location={member.location}
            techs={member.favorite_techs}
            hobbies={member.hobbies}
            links={member.links}
          />
        ))}
      </section>
    </Layout >)
  }
}

export default MembersPage
