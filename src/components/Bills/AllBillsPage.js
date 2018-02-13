import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as solsticeActions from "../../actions/solsticeActions";
import {months} from '../../assets/utils';
import {Row, Table,Col} from 'reactstrap';
import {withRouter} from "react-router-dom";
import AllBillsPie from './AllBillsPie';
import PropTypes from 'prop-types';

class AllBillsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  getSum(array,field) {
    return array.reduce(function(a, b){
      return a + b[field];
    }, 0);

  }

  render() {
    const {bills} = this.props;
    return (
      <div className="container-fluid home-page-main-holder">
        <img src="./assets/images/solstice-text-logo.png"
             placeholder="Solstice"
             height={100}/>

        <Row className="home-row scroll-table">

          <Table className="">
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
              bills.map((bill,i) =>
                <tr key={i}>
                  <td>{months[bill.month - 1]}</td>
                  <td>{bill.year}</td>
                  <td>{bill.kwh}</td>
                  <td>{`$${bill.bill}`}</td>
                  <td>{`$${bill.savings}`}</td>
                </tr>
              )
            }

            <tr>
              <th></th>
              <th></th>
              <th>{`${this.getSum(bills,"kwh")} kwh`}</th>
              <th>{`$${this.getSum(bills,"bill")}`}</th>
              <th>{`$${this.getSum(bills,"savings")}`}</th>
            </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col md={4} sm={12} xs={12} >
            <AllBillsPie field={"kwh"} label={`Total KWH: ${this.getSum(bills,"kwh")}`}/>
            <br/>
            <br/>
          </Col>

          <Col  md={4} sm={12} xs={12} >
            <AllBillsPie field={"bill"} label={`Total Bills: $${this.getSum(bills,"bill")}`}/>
            <br/>
            <br/>
          </Col>
          <Col  md={4} sm={12}xs={12} >
            <AllBillsPie field={"savings"} label={`Total Savings: $${this.getSum(bills,"savings")}`}/>
            <br/>
            <br/>
          </Col>
        </Row>
      </div>
    );
  }
}


AllBillsPage.propTypes = {
  bills: PropTypes.array.isRequired
};



//redux connect and map functions
function mapStateToProps(state, ownProps) {

  return {
    bills: state.bills
};

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllBillsPage));

