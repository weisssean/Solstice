import React from "react";
import {connect} from 'react-redux';
import SideNav from "./common/SideNav";
import PropTypes from 'prop-types';

import routes from "../routes";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showSideNav: true
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      showSideNav: !prevState.showSideNav
    }));
  }

  render() {
    return (
      <div className="main_content_holder">
        <SideNav toggleDrawer={this.toggleDrawer} showSideNav={this.state.showSideNav}/>
        <div className={this.state.showSideNav ? "main_content container-fluid show" : "main_content container-fluid"}>
          {routes}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
