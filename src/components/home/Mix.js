import React from 'react';
import {Bar} from 'react-chartjs-2';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as solsticeActions from "../../actions/solsticeActions";
import {bindActionCreators} from "redux";
import {months,chartColors,chartHoverColors} from "../../assets/utils";
import PropTypes from "prop-types";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }

    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true   // minimum value will be 0.
        },
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

// const plugins = [{
//   afterDraw: (chartInstance, easing) => {
//     const ctx = chartInstance.chart.ctx;
//     ctx.fillText("This text drawn by a plugin", 100, 100);
//   }
// }];

class Mix extends React.Component {
  render() {
    const {data,options} = this.props;
    return (
      <div >
        <div  style={{height: "350px"}}>
        <Bar
          data={data}
          options={options}
          // plugins={plugins}
        />
        </div>
      </div>
    );
  }
}

//redux connect and map functions
function mapStateToProps(state, ownProps) {
  // const labels = Array.from(state.bills, bill => months[bill.month-1]);
  options.labels  = Array.from(state.bills, bill => months[(bill.month-1)]);
  options.scales.xAxes[0].labels  = Array.from(state.bills, bill => months[(bill.month-1)]);
  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Bill',
      type: 'line',
      data: Array.from(state.bills, bill => bill.bill),
      fill: false,
      borderColor: chartColors[1],
      backgroundColor: chartColors[1],
      pointBorderColor: chartHoverColors[1],
      pointBackgroundColor: chartHoverColors[1],
      pointHoverBackgroundColor: chartColors[1],
      pointHoverBorderColor: chartColors[1],
      yAxisID: 'y-axis-2'
    },{
      label: 'Savings',
      type: 'line',
      data: Array.from(state.bills, bill => bill.savings),
      fill: false,
      borderColor: chartColors[2],
      backgroundColor: chartColors[2],
      pointBorderColor: chartHoverColors[2],
      pointBackgroundColor: chartHoverColors[2],
      pointHoverBackgroundColor: chartColors[2],
      pointHoverBorderColor: chartColors[2],
      yAxisID: 'y-axis-2'
    }, {
      type: 'bar',
      label: 'KWH',
      data: Array.from(state.bills, bill => bill.kwh),
      fill: false,
      borderColor: chartColors[3],
      backgroundColor: chartHoverColors[3],
      borderWidth: 1,
      pointBorderColor: chartHoverColors[3],
      pointBackgroundColor: chartHoverColors[3],
      pointHoverBackgroundColor: chartColors[3],
      pointHoverBorderColor: chartColors[3],
      yAxisID: 'y-axis-1'
    }]
  };

  return {
    bills: state.bills,
    data: data,
    options:options
  };
}

Mix.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  bills: PropTypes.array.isRequired

};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(solsticeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mix));

