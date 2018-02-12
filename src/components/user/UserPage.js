import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as solsticeActions from "../../actions/solsticeActions";

import {Col, ListGroup, ListGroupItem, ListGroupItemHeading, Row} from 'reactstrap';
import toastr from 'toastr';

class UserPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      deleteModal: false,
      selectedRouteToAssign: {},
      assignedRoutes: []
    };
  }

  componentDidMount() {
    if (this.props.selectedUser.userId) {
      this.getSurveysByUser(this.props.selectedUser.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUser.userId && nextProps.selectedUser.userId !== this.props.selectedUser.userId) {
      this.getSurveysByUser(nextProps.selectedUser.userId);
    }
  }

  onUserImageError(e) {
    e.currentTarget.src = "./assets/images/anonymus.png";
  }


  render() {
    const {user} = this.props;

    return (
      <div className="container-fluid home-page-main-holder">

        <Row className="home-row">
          <Col sm={4} xs={12} className="home-col">
            <ListGroup>
              <ListGroupItemHeading>User Details</ListGroupItemHeading>
              <ListGroupItem>{user.email}</ListGroupItem>
              <ListGroupItem>{user.email}</ListGroupItem>
            </ListGroup>

          </Col>
          <Col sm={4} xs={12} className="home-col">
            <div className="" style={{position: "relative", display: "flex", height: "100%"}}>
              <img className="user-image"
                   onError={this.onUserImageError}//e => e.src = "./assets/images/anonymus.png"
                   src={user.userId ? `https://${window.location.hostname}/images/p2s/${user.userId}.jpg` : "./assets/images/anonymus.png"}
              />
            </div>
          </Col>
          <Col sm={4} xs={12} className="home-col"/>
        </Row>
        <Row className="home-row">

          <Col sm={12} xs={12} className="home-col">
            <h3>Latest User Activity</h3>
          </Col>

        </Row>
      </div>
    );
  }
}


UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  account: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {

  const user = state.users.filter(u => u.uname.toLowerCase().replace(" ", "_") === ownProps.match.params.id)[0];

  let assignedroutes = [];//state.routes.filter(r => user.assignedroutes.includes(r.routeId));

  return {
    user: state.user,
    users: state.users,
    routes: state.routes,
    assignedroutes: assignedroutes,
    account: state.account
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

