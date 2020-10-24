import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceItem from "../components/resourceItem"
import {fetchResults} from '../utils/api.js';

class ResourcesPage extends Component {
  state = {
    resourcesList: [],
    hasError: false,
    errorMessage: ''
  }
  async componentDidMount() {
    try {
      const response = await fetchResults('http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/learning_resources');
      if (response.success){
        this.setState({ resourcesList: response.results, hasError: false});
      } else {
        this.setState({hasError: true, errorMessage: response.error});
      }
    } catch {
      this.setState({hasError: true});
    }
  }

  render() {
    const { resourcesList, hasError, errorMessage } = this.state
    return (
      <Layout>
        <SEO title="Resources" />
        <h1>Resources</h1>

        <p>
          Check out this list of resources links that were submitted by WWC
          Cincinnati members.
        </p>
        {hasError && !errorMessage && <p>Unable to fetch resources</p>}
        {hasError && errorMessage && <p>{errorMessage}</p>}
        <div className="resourcesList">
          {resourcesList.map((resource, index) => (
            <ResourceItem
              key={index}
              title={resource.title}
              description={resource.short_description}
              url={resource.link}
              topics={resource.topics}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default ResourcesPage
