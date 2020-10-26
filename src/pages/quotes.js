import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { fetchResults } from "../utils/api"

class QuotesPage extends Component {
  state = {
    quoteList: [],
    hasError: false,
  }

  async componentDidMount() {
    try {
      const results = await fetchResults(
        "http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/quotes"
      )
      if (results.success) {
        this.setState({ quoteList: results.results, hasError: false })
      } else {
        this.setState({ hasError: true })
      }
    } catch {
      this.setState({ hasError: true })
    }
  }

  render() {
    const { quoteList, hasError } = this.state

    return (
      <Layout>
        <SEO title="Quotes" />
        <h1 style={{ marginBottom: "15px" }}>Quotes</h1>
        {hasError && <p>Unable to fetch quotes</p>}
        <div>
          {quoteList &&
            quoteList.map((quote, index) => (
              <div key={index} style={classes.quoteContainer}>
                <p style={classes.quote}>
                  "{quote.quote}" &mdash;{" "}
                  <span style={classes.author}>{quote.author}</span>
                </p>
                <p style={classes.submittedByName}>
                  <span style={classes.submittedBy}>Submitted by</span>{" "}
                  {quote.submitted_by}
                </p>
              </div>
            ))}
        </div>
      </Layout>
    )
  }
}

const classes = {
  quoteContainer: {
    color: "#383838",
    backgroundColor: "#f0f0f0",
    padding: "15px 50px",
    fontFamily: "Arial",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  quote: {
    marginBottom: "10px",
  },
  author: {
    fontStyle: "italic",
    fontSize: "15px",
  },
  submittedBy: {
    fontStyle: "italic",
    fontSize: "15px",
  },
  submittedByName: {
    color: "#949494",
    margin: 0,
    textAlign: "right",
    fontSize: "15px",
    fontStyle: "italic",
  },
}

export default QuotesPage
