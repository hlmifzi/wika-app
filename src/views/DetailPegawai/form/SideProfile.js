import React from 'react'
// import { Badge, Card, CardHeader, CardBody } from 'reactstrap';
import { CardWithCustom, CardWithCustomNoHeader } from '../../MyComponent/CardCustom/CardComponent'
import { Col, Row, Badge, FormGroup, Label, Input, Button } from 'reactstrap';
import Widget02 from '../Widgets/Widget02';
import WidgetCustom from '../Widgets/WidgetCustom';

export const SideProfile = ({ data }) => {
    return (
        <CardWithCustomNoHeader>
            <Row>
                <Col md="12" xs="12">
                    <b>No Telpon :</b>
                </Col>
                <Col xs="12" md="12">
                    {/* (+62) {data.telephone} */}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Jenis Kelamin:</b>
                </Col>
                <Col xs="12" md="12">
                    {/* {data.gender === 'L' ? 'Laki - laki' : 'Perempuan'} */}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Email Kantor : </b>
                </Col>
                <Col xs="12" md="12">
                    {/* {data.personalEmail} //tidak ada */}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Tanggal Masuk Wika :</b>
                </Col>
                <Col xs="12" md="12">
                    {/* {data.entryDate} */}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Unit Kerja :</b>
                </Col>
                <Col xs="12" md="12">
                    {/* {data.workUnit.name} */}
                </Col>
                <hr />
                <Col md="12" xs="12" >
                    <b>Fungsi Bidang :</b>
                </Col>
                <Col xs="12" md="12">
                    {/* {data.fieldFunction} */}
                </Col>
            </Row>
        </CardWithCustomNoHeader>
    )
}