import React, { Component }  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class QuotesPage extends Component {
  state = {
    quoteList: [],
    hasError: false
  }

  componentDidMount() {
    //debugger;
    fetch("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/quotes")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          quoteList: result
        });
      },
      (error) => {
        this.setState({
          hasError: true
        });
      }
    )
  }

  render() {
    const { quoteList } = this.state
    const listItems = quoteList.map((quote, index) =>
      <li  key={index}>{quote.quote} {quote.author}</li>
    )

    return(
      <Layout>
        <SEO title="Quotes" />
        <h1>Quotes</h1>
       <ul>{listItems}</ul> 
      </Layout>
    )
  }
  
}
  
export default QuotesPage