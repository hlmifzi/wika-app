import React, { Component } from 'react';

import { Col, Row } from 'reactstrap';
import { CardDefaulSideProfiletComponent } from '../../../MyComponent/CardCustom/CardComponent'



class AssessmenCard extends Component {


    render() {
        const { title, assessmen, fet, gap, color } = this.props

        return (
            <Col xs={12} sm={6} md={4}>
                <div className="brand-card text-center">

                    <CardDefaulSideProfiletComponent text={title}>
                        <Col xs={12} sm={12} md={12}>
                            <Col xs={12} sm={12} md={12} style={{ backgroundColor: '#e4e4e4', marginTop: '20px', color: `${color}` }}>
                                <div className="text-value" style={{ fontSize: '3em' }}>{assessmen}</div>
                            </Col>
                        </Col>
                        <Row style={{ padding: '20px' }}>
                            <Col xs={12} sm={12} md={6} style={{ borderRight: '1px solid black' }}>
                                <div className="text-uppercase text-muted small">FET</div>
                                <div className="text-value">{fet}</div>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <div className="text-uppercase text-muted small">GAP</div>
                                <div className="text-value">{gap}</div>
                            </Col>
                        </Row>
                    </CardDefaulSideProfiletComponent>


                </div>
            </Col>

        );
    }
}

export default AssessmenCard;
