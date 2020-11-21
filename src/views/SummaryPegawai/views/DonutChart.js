import React from 'react'
import PropTypes from 'prop-types'
import ReactHighcharts from 'react-highcharts'
import { Col, Row, Spinner } from 'reactstrap';
import { CardWhiteComponent } from '../../../MyComponent/CardCustom/CardComponent'
import HighchartsMore from 'highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts)


const PropTypesParam = {
    data: PropTypes.array,
    title: PropTypes.string,
    type: PropTypes.string
}

const DefaultPropsParam = {
    data: [],
    data: '',
    type: '',
};

const DonutChart = props => {

    let config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 350
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                size: '100%',
                showInLegend: true
            },
            
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', 58.9],
                ['Firefox', 13.29],
                ['Internet Explorer', 13],
                ['Edge', 3.78],
                ['Safari', 3.42],
                {
                    name: 'Other',
                    y: 7.61,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }],
        credits: {
            enabled: false
        },
    }

    return (
        <>
            {props.isLoading ?
                <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', divor: 'blue' }} /> :
                <ReactHighcharts config={config} />
            }
        </>
    )
}

DonutChart.propTypes = PropTypesParam
DonutChart.defaultProps = DefaultPropsParam

export default DonutChart
