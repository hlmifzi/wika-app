import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row } from 'reactstrap';
import { CardWhiteComponent } from '../../../MyComponent/CardCustom/CardComponent'
import HighchartsMore from 'highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts)

//const pieColors = (function () {
//   let colors = []
//   let base = ReactHighcharts.Highcharts.getOptions().colors[0]
//   let i
//   for (i = 0; i < 10; i += 1) {
//     colors.push(ReactHighcharts.Highcharts.Color(base).brighten((i - 3) / 7).get());
//   }
//   return colors;
// }())

const PropTypesParam = {
    data: PropTypes.array,
    title: PropTypes.string
}

const DefaultPropsParam = {
    data: [],
    data: '',
};

const PieChart = props => {

    let config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                // colors: pieColors,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Share',
            point: {
                events: {
                    click: function (event) {
                        alert(this.name);
                        window.open('#/data-karyawan', '_blank');
                    }
                }
            },
            data: props.data
        }],
        credits: {
            enabled: false
        },
    }

    return (
        <Col xs={12} sm={4} md={4}>
            <CardWhiteComponent text={props.title}>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <ReactHighcharts config={config} />
                    </Col>
                </Row>
            </CardWhiteComponent>
        </Col>
    )
}

PieChart.propTypes = PropTypesParam
PieChart.defaultProps = DefaultPropsParam

export default PieChart
