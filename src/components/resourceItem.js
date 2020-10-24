import React from "react"
import PropTypes from "prop-types"

const ResourceItem = ({ title, description, url, topics }) => (
  <div>
    <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
    <p>{description}</p>
    <p>{topics.join(", ")}</p>
  </div>
)

ResourceItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string)
}

ResourceItem.defaultProps = {
  title: ``,
  description: ``,
  url: ``,
  topics: []
}

export default ResourceItem
