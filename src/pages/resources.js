import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceItem from "../components/resourceItem"

class ResourcesPage extends Component {
  state = {
    resourcesList: [],
    hasError: false
  }
  componentDidMount() {
    fetch(
      "http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/learning_resources"
    )
      .then(response => {
        if (response.ok) {
          this.setState({ hasError: false })
          return response.json()
        } else {
          this.setState({ hasError: true })
        }
      })
      .then(data => {
        this.setState({ resourcesList: data })
      })
      .catch(() => this.setState({ hasError: true }))
  }

  render() {
    const { resourcesList, hasError } = this.state
    return (
      <Layout>
        <SEO title="Resources" />
        <h1>Resources</h1>

        <p>
          Check out this list of resources links that were submitted by WWC
          Cincinnati members.
        </p>
        {hasError && <p>Unable to fetch resources</p>}
        <ul>
          {resourcesList.map((resource, index) => (
            <ResourceItem
              key={index}
              title={resource.title}
              description={resource.short_description}
              url={resource.link}
              topics={resource.topics}
            />
          ))}
        </ul>
      </Layout>
    )
  }
}

export default ResourcesPage
