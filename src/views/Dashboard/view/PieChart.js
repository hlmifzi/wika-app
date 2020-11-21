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
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>  ( {point.qty} orang)'
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
            name: 'Karyawan',
            point: {
                events: {
                    click: function (event) {
                        window.open(`#/karyawan-filtered/${props.type}/${this.name}`, '_blank');
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
        <Col xs={12} sm={6} md={6}>
            <CardWhiteComponent text={props.title}>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        {props.isLoading ?
                            <Spinner animation="border" variant="primary" className='mr-auto' style={{ margin: 'auto', color: 'blue' }} /> :
                            <ReactHighcharts config={config} />
                        }
                    </Col>
                </Row>
            </CardWhiteComponent>
        </Col>
    )
}

PieChart.propTypes = PropTypesParam
PieChart.defaultProps = DefaultPropsParam

export default PieChart
