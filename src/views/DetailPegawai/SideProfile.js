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
                    <b>No Telephone :</b>
                </Col>
                <Col xs="12" md="12">
                    (+62) {data.telephone || '-'}
                </Col>
                <hr />
                <hr />
                <Col md="12" xs="12">
                    <b>Email Kantor : </b>
                </Col>
                <Col xs="12" md="12">
                    {data.officeEmail || 'Tidak Ada Email'}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Tanggal Masuk Wika :</b>
                </Col>
                <Col xs="12" md="12">
                    {data.entryDate || '-'}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Unit Kerja :</b>
                </Col>
                <Col xs="12" md="12">
                    {data.workUnit ? data.workUnit.name : '-'}
                </Col>
                <hr />
                <Col md="12" xs="12" >
                    <b>Fungsi Bidang :</b>
                </Col>
                <Col xs="12" md="12">
                    {data.fieldFunction ? data.fieldFunction.name : "-"}
                </Col>
                <hr />
                <Col md="12" xs="12">
                    <b>Lama Bekerja:</b>
                </Col>
                <Col xs="12" md="12">
                    {data.yearsOfService}
                </Col>
            </Row>
        </CardWithCustomNoHeader>
    )
}