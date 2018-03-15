import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    
    render() {
      console.log(this.context);
      return <ComposedComponent {...this.state} />;
    }
  }

  function mapStateToProps({ authenticated }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}