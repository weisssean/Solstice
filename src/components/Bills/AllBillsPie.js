import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as solsticeActions from "../../actions/solsticeActions";
import {withRouter} from 'react-router-dom';
import {chartColors, chartHoverColors, months} from '../../assets/utils';


import {Pie} from 'react-chartjs-2';
import PropTypes from "prop-types";

class AllBillsPie extends React.Component {

  render() {
    const {data, label} = this.props;
    return (
      <div style={{height: "200px", textAlign:"center"}}>
        <h5>{label}</h5>
        <Pie options={{
          legend: {
            display: false
          },
          // cutoutPercentage: 75,
          maintainAspectRatio: false
        }} data={data}
             width={20}
             height={20}
        />
      </div>
    );
  }
}

AllBillsPie.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  data:PropTypes.object.isRequired
};

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  return {
    bills: state.bills,
    data: {
      labels: Array.from(state.bills, bill => months[bill.month - 1]),
      datasets: [{
        data: Array.from(state.bills, bill => bill[ownProps.field]),
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllBillsPie));

