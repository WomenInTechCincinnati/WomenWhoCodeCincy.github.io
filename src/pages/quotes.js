import React, { Component }  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {fetchResults} from '../utils/api'

class QuotesPage extends Component {
  state = {
    quoteList: [],
    hasError: false
  }

  async componentDidMount() {
    try {
      const results = await fetchResults("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/quotes");
    if(results.success){
      this.setState({quoteList: results.results, hasError: false});
    } else {
      this.setState({hasError: true})
    }
    } catch {
      this.setState({hasError: true})
    }

  }

  render() {
    const { quoteList, hasError } = this.state
    const listItems = quoteList.map((quote, index) =>
      <li  key={index}>{quote.quote} {quote.author}</li>
    )

    return(
      <Layout>
        <SEO title="Quotes" />
        <h1>Quotes</h1>
        {hasError && <p>Unable to fetch quotes</p>}
       <ul>{listItems}</ul> 
      </Layout>
    )
  }
  
}
  
export default QuotesPage