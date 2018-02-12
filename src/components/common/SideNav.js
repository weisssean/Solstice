import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as solsticeActions from "../../actions/solsticeActions";
import {Link, withRouter} from 'react-router-dom';
import {Button, Col, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Tooltip} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import {months} from '../../assets/utils';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import '../../styles/side-nav.css';


class SideNav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tooltipOpen: 0
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }


  toggleTooltip(n) {
    if (n === this.state.tooltipOpen) {
      this.setState({tooltipOpen: 0});
    } else {
      this.setState({tooltipOpen: n});
    }
  }

  showNotImplimented() {
    toastr.success("Not implemented yet");
  }


  onUserImageError(e) {
    e.currentTarget.src = "./assets/images/anonymus.png";
  }

  render() {
    const {user, bills} = this.props;
    return (
      <div id="sidebar" className={this.props.showSideNav ? "sidenav show" : "sidenav"}>
        <div className="reporting_side_container container-fluid ">

          <Row style={{marginTop: "10px", marginBottom: "10px"}}>
            <Col xs="9">
              <div>
                <img
                  src="./assets/images/solstice-logo.png"
                  placeholder="Solstice"
                  style={{width: "60px", height: "60px", float: "left", marginRight: "10px"}}/>
              </div>
            </Col>
            <Col xs="3">
              <Button size="sm" outline color="warning" onClick={this.props.toggleDrawer} style={{float: "right"}}>
                <FontAwesome
                  name="bars"
                /></Button>
            </Col>
          </Row>
          <Row className="user-image-holder">
            <div className="mx-auto">
              <img className="user-image"
                   onError={this.onUserImageError}//e => e.src = "./assets/images/anonymus.png"
                   src={user.userId ? `./assets/images/${user.userId}.png` : "./assets/images/anonymus.png"}
              />
            </div>
          </Row>
          <Row className="user-desc-holder">
            <div className="mx-auto">
              <div className="avatar-col">

                <div className="desc_name">
                  {user && user.uname ? user.uname : '---'}
                </div>
                <div className="desc_name">
                  {user && user.email ? user.email : '---'}
                </div>
              </div>
            </div>
          </Row>


          <div className="scroll-rows">
            <Row>
              <ListGroup className="users-list"> <Link to={`/allbills`}>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    All Bills
                  </ListGroupItemHeading>
                </ListGroupItem>
              </Link>
                {bills.map((bill, i) =>
                  <Link key={i} to={`/bill/${bill.id}`}>
                    <ListGroupItem>
                      <ListGroupItemHeading>
                  <span
                    className="txt-nav-link">{`${months[parseInt(bill.month - 1)]} ${bill.year}`}</span>
                      </ListGroupItemHeading>
                      {/*<ListGroupItemText>{bill.savings}</ListGroupItemText>*/}
                    </ListGroupItem>
                  </Link>
                )}
              </ListGroup>
            </Row>
          </div>

        </div>


        <ListGroup className="nav-links-list">

          <Link to="/add" onClick={this.showNotImplimented}>
            <ListGroupItem>
                <span className="txt-nav-link"> <FontAwesome
                  name="plus"
                  style={{color: "orange"}}
                /> &nbsp;Add Bill</span>
              <span>
                      <button type="button" id="btn-add" className="btn btn-sm btn-dark btn-nav-link">
                          <FontAwesome
                            name="plus"
                            style={{color: "orange"}}
                          />
                      </button>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen === "btn-add"} target="btn-add"
                               toggle={() => {
                                 this.toggleTooltip("btn-add");
                               }}>

                        Add Bill
                      </Tooltip>
                    </span>
            </ListGroupItem>
          </Link>
          <Link to="/reports" onClick={this.showNotImplimented}>
            <ListGroupItem>
                <span className="txt-nav-link"> <FontAwesome
                  name="list"
                  style={{color: "orange"}}
                /> &nbsp;Reports</span>
              <span>
                      <button type="button" id="btn-reports" className="btn btn-sm btn-dark btn-nav-link">
                          <FontAwesome
                            name="list"
                            style={{color: "orange"}}
                            // size="2x"//{this.props.showSideNav?"2x":"1x"}
                          />
                      </button>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen === "btn-reports"} target="btn-reports"
                               toggle={() => {
                                 this.toggleTooltip("btn-reports");
                               }}>

                        Reports
                      </Tooltip>
                    </span>
            </ListGroupItem>
          </Link>
          <Link to="/">
            <ListGroupItem>
                <span className="txt-nav-link"><FontAwesome
                  name="home"
                  style={{color: "orange"}}
                  // size="2x"//{this.props.showSideNav?"2x":"1x"}
                />&nbsp;Home</span>
              <span>
                     <button type="button" id="btn-home" className="btn btn-sm btn-dark btn-nav-link"
                     >
                        <FontAwesome
                          name="home"
                          style={{color: "orange"}}
                        />
                      </button>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen === "home"} target="btn-home"
                               toggle={() => {
                                 this.toggleTooltip("home");
                               }}>
                        Home
                      </Tooltip>
                    </span>
            </ListGroupItem>
          </Link>
          <Link to="/about">
            <ListGroupItem>
                <span className="txt-nav-link"><FontAwesome
                  name="info"
                  style={{color: "orange", marginLeft: "4px", marginRight: "4px"}}
                  // size="2x"//{this.props.showSideNav?"2x":"1x"}
                />&nbsp;About</span>
              <span>
                     <button type="button" id="btn-home" className="btn btn-sm btn-dark btn-nav-link"
                     >
                        <FontAwesome
                          name="info"
                          style={{color: "orange"}}
                          // size="2x"//{this.props.showSideNav?"2x":"1x"}
                        />
                      </button>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen === "home"} target="btn-home"
                               toggle={() => {
                                 this.toggleTooltip("home");
                               }}>
                        About
                      </Tooltip>
                    </span>
            </ListGroupItem>
          </Link>
        </ListGroup>

        {/*<button type="button" className="btn btn-primary btn-home" onClick={this.goHome}>*/}
        {/*<FontAwesome*/}
        {/*name="home"*/}
        {/*style={{color: "white"}}*/}
        {/*size="2x"//{this.props.showSideNav?"2x":"1x"}*/}
        {/*/>*/}
        {/*</button>*/}
      </div>
    );
  }
}

SideNav.propTypes = {
  showSideNav: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  bills: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    bills: state.bills
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));

