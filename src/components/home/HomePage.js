import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as solsticeActions from "../../actions/solsticeActions";
import BillsChart1 from './BillsChart1';
import Mix from './Mix';
import {Col, Row} from 'reactstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid home-page-main-holder">
        <Row className="home-row">
          <Col sm={12} xs={12} className="home-col">
            <h3>Mixed data Example</h3>
            <Mix/>
          </Col>
        </Row>
        <Row className="home-row">

          <Col sm={12} xs={12} className="home-col">
            <BillsChart1/>
          </Col>
        </Row>
      </div>
    );
  }
}


HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  return {
    user:state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

