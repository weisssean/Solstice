import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as solsticeActions from "../../actions/solsticeActions";
import {months} from '../../assets/utils'
import {Col, ListGroup, ListGroupItem, ListGroupItemHeading, Table,Row} from 'reactstrap';
import toastr from 'toastr';
import {withRouter} from "react-router-dom";

class BillsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

  }


  render() {
    const {bill}= this.props;
    return (
      <div className="container-fluid home-page-main-holder">
        <img  src="./assets/images/solstice-text-logo.png"
              placeholder="Solstice"
        height={100}/>
        <Row className="home-row scroll-table">
          <Table>
            <thead>
            <tr>
              <th>Month</th>
              <th>Year</th>
              <th>KWH</th>
              <th>TOTAL</th>
              <th>Savings</th>
            </tr>
            </thead>
            <tbody>
            {
                <tr>
                  <td>{months[bill.month-1]}</td>
                  <td>{bill.year}</td>
                  <td>{bill.kwh}</td>
                  <td>{`$${bill.bill}`}</td>
                  <td>{`$${bill.savings}`}</td>
                </tr>
              }
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}


BillsPage.propTypes = {
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  const bills = state.bills;
  const bill = bills.filter(b=>b.id===  ownProps.match.params.id)[0];
  if(!bill){
    ownProps.history.push("/");
  }
  return {
    bill:bill
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BillsPage));

