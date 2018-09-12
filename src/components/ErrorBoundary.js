import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state =  {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;
