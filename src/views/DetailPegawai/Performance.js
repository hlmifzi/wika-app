import React from 'react'
import { CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import Widget02 from '../Widgets/Widget02';
import { Col, Row, Badge, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

export const Performance = ({ data }) => {
  return (
    <CardWithCustom classHeader={"bg-primary text-white"} text="Performance">
      <Row>
        <Col md="12" xs="12">
          <Label>Assestment :</Label>
        </Col>
        <Col md="12" xs="12">
          <Table responsive style={{ fontSize: '.9em' }}>
            <thead>
              <tr>
                <th>Tgl Penilaian</th>
                <th>JOB FIT</th>
                <th>JOB TARGET</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11 Nov 2019</td>
                <td>Disarankan</td>
                <td>Tidak Disarankan</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <hr />
      <Row className="card-custom">
        <Col md="12" xs="12">
          <Label>KUK : </Label>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header={data && data.kukTheory? data.kukTheory : '0'} mainText="Teori" icon="fa fa-pencil-square-o" color="primary" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header={data && data.kukPractice? data.kukPractice : '0'} mainText="Praktek" icon="fa fa-cog" color="info" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header={data && data.ek ? data.ek : '0'} mainText="EK" icon="fa fa-th-list" color="danger" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header={data && data.pk  ? data.pk : '0'} mainText="PK" icon="fa fa-wrench" color="success" variant="1" />
        </Col>
      </Row>
    </CardWithCustom>
  )
}