import React, { Component } from 'react';

import { Col, Row, Input } from 'reactstrap';
import { CardDefaulSideProfiletComponent } from '../../../MyComponent/CardCustom/CardComponent'



class KUKCard extends Component {
    state = {
        show: false,
        praktek: 0,
        teori: 0
    }


    render() {
        const { title, assessmen, fet, gap, color } = this.props

        return (
            <Col xs={12} sm={12} md={12}>
                <div className="brand-card text-left">
                    <CardDefaulSideProfiletComponent text={title}>
                        <Row style={{ padding: '20px' }} className="text-center">
                            <Col xs={12} sm={12} md={6} style={{ borderRight: '1px solid black' }}>
                                <div className="text-uppercase text-muted small">Teori</div>
                                <div className="text-value">
                                    <Input type="number" id="name" placeholder="Isi Nilai Teori" onChange={(e) => this.setState({ teori: e.target.value })} required />

                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <div className="text-uppercase text-muted small">Praktek</div>
                                <div className="text-value">
                                    <Input type="number" id="name" placeholder="Isi Nilai Praktek" onChange={(e) => this.setState({ praktek: e.target.value })} required />
                                </div>
                            </Col>
                        </Row>
                        <Col xs={12} sm={12} md={12} style={{ paddingBottom: '20px' }}>
                            <button className="btn btn-primary" onClick={() => this.setState({ show: !this.state.show })} >
                                Lihat Catatan
                            </button>
                        </Col>
                        {
                            this.state.show &&
                            <Col xs={12} sm={12} md={12} style={{ paddingBottom: '20px' }} >
                                <Col xs={12} sm={12} md={12} style={{ backgroundColor: '#e4e4e4', marginTop: '20px', color: `#000`, padding: '10px' }}>
                                    <p>Catatan : Membutuhkan training</p>
                                </Col>
                            </Col>
                        }
                    </CardDefaulSideProfiletComponent>
                </div>
            </Col >

        );
    }
}

export default KUKCard;
