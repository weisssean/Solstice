import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as solsticeActions from "../../actions/solsticeActions";
import {withRouter} from 'react-router-dom';
import {chartColors, chartHoverColors, months} from '../../assets/utils';

import {Doughnut} from 'react-chartjs-2';
import PropTypes from "prop-types";

class BillsChart1 extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div style={{height: "200px"}}>
        <Doughnut options={{
          legend: {
            position: 'bottom'
          },
          cutoutPercentage: 75,
          maintainAspectRatio: false
        }} data={data}
                  width={20}
                  height={20}
        />
      </div>
    );
  }
}

BillsChart1.propTypes = {
  data: PropTypes.object.isRequired

};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  return {
    bills: state.bills,
    data: {
      labels: Array.from(state.bills, bill => months[bill.month - 1]),
      datasets: [{
        data: Array.from(state.bills, bill => bill.kwh),
        backgroundColor: chartColors.slice(0, state.bills.length),
        hoverBackgroundColor: chartHoverColors.slice(0, state.bills.length)
      }]
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BillsChart1));

