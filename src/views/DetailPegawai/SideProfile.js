import React from 'react'
// import { Badge, Card, CardHeader, CardBody } from 'reactstrap';
import { CardWithCustom, CardWithCustomNoHeader } from '../../MyComponent/CardCustom/CardComponent'
import { Col, Row, Badge, FormGroup, Label, Input, Button } from 'reactstrap';
import Widget02 from '../Widgets/Widget02';
import WidgetCustom from '../Widgets/WidgetCustom';

export const SideProfile = ({ children, color, text }) => {
  return (
    <CardWithCustomNoHeader>
        <Row>
            <Col md="12" xs="12">
                No Telpon :
            </Col>
            <Col xs="12" md="12">
                (+62) 877392339
            </Col>
            <hr/>
            <Col md="12" xs="12">
                Status Pegawai :
            </Col>
            <Col xs="12" md="12">
                Organik
            </Col>
            <hr/>
            <Col md="12" xs="12">
                Email Kantor :
            </Col>
            <Col xs="12" md="12">
                alex.azamdi@wika.co.id
            </Col>
            <hr/>
            <Col md="12" xs="12">
                Tanggal Masuk Wika :
            </Col>
            <Col xs="12" md="12">
                20 November 2019
            </Col>
            <hr/>
            <Col md="12" xs="12">
                Unit Kerja :
            </Col>
            <Col xs="12" md="12">
                Kantor Departemen
            </Col>
            <hr/>
            <Col md="12" xs="12">
                Fungsi Bidang :
            </Col>
            <Col xs="12" md="12">
                Supply Chain Management
            </Col>
        </Row>
    </CardWithCustomNoHeader>  
  )
}