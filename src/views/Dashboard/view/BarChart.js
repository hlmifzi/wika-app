import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row } from 'reactstrap';
import { CardWhiteComponent } from '../../../MyComponent/CardCustom/CardComponent'
import HighchartsMore from 'highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts)


const PropTypesParam = {
    data: PropTypes.array,
    title: PropTypes.string,
    colSm: PropTypes.number,
    colMd: PropTypes.number
}

const DefaultPropsParam = {
    data: [],
    data: '',
    colSm: 12,
    colMd: 12
};

const PieChart = props => {
    let config = {
        chart: {
            type: 'column'
        },
        title: false,
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f} %'
                }
            },
            showInLegend: true
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} %</b> of total<br/> <b>700 orang</b>'
        },

        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: props.data
            }
        ],
        credits: {
            enabled: false
        },
    }

    return (
        <Col xs={12} sm={props.colSm} md={props.colMd}>
            <CardWhiteComponent text={props.title}>
                <Row>
                    <Col>
                        <ReactHighcharts style={{ width: '100%' }} config={config} />
                    </Col>
                </Row>
            </CardWhiteComponent>
        </Col>
    )
}

PieChart.propTypes = PropTypesParam
PieChart.defaultProps = DefaultPropsParam

export default PieChart
