import React from 'react'
import { CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import Widget02 from '../Widgets/Widget02';
import { Col, Row, Badge, FormGroup, Label, Input, Button, Card, CardBody, CardHeader, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

export const Training = ({ children, color, text }) => {
  return (
    <CardWithCustom classHeader={"bg-primary text-white"} text="Training">
        <Row className="card-custom">
            <Col md="12" xs="12">
                <Label style={{ fontSize: '1em' }}>Manajemen Training :</Label> 
            </Col>
            <Col xs="12" lg="12">
                <Table responsive style={{ fontSize: '.9em' }}>
                <thead>
                    <tr>
                        <th>Angkatan</th>
                        <th>Nama Mentor</th>
                        <th>Tgl Mulai</th>
                        <th>Tgl Selesai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>80</td>
                        <td>Dadang Risandi</td>
                        <td>10 November 2020</td>
                        <td>11 Nov 2020</td>
                    </tr>
                </tbody>
                </Table>
                {/* <Pagination className="text-center">
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination> */}
            </Col>
        </Row>
        <hr />
        <Row className="card-custom">
            <Col md="12" xs="12">
                <Label style={{ fontSize: '1em' }}>Upcoming Training :</Label> 
            </Col>
            <Col xs="12" lg="12">
                <Table responsive style={{ fontSize: '.9em' }}>
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Program</th>
                        <th>Penyelenggara</th>
                        <th>Tgl Mulai</th>
                        <th>Tgl Selesai</th>
                        <th>M/P</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HC.03</td>
                        <td>Investment Risk Analysis & Mitigation</td>
                        <td>Wikasatrian</td>
                        <td>10 Nov 2020</td>
                        <td>11 Nov 2020</td>
                        <td>M</td>
                        <td>
                            <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                            </FormGroup>
                      </td>
                    </tr>
                    <tr>
                        <td>HC.07</td>
                        <td>Advance Practical Functional</td>
                        <td>Wikasatrian</td>
                        <td>08 Mar 2020</td>
                        <td>18 Nov 2020</td>
                        <td>P</td>
                        <td><FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                            </FormGroup>
                        </td>
                    </tr>
                </tbody>
                </Table>
                {/* <Pagination className="text-center">
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination> */}
            </Col>
        </Row>
        <hr />
        <Row className="card-custom">
            <Col md="12" xs="12">
                <Label style={{ fontSize: '1em' }}>Completed Training :</Label> 
            </Col>
            <Col xs="12" lg="12">
                <Table responsive style={{ fontSize: '.9em' }}>
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Program</th>
                        <th>Penyelenggara</th>
                        <th>Tgl Mulai</th>
                        <th>Tgl Selesai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HC.13</td>
                        <td>QSHE Awareness</td>
                        <td>Wikasatrian</td>
                        <td>10 Nov 2020</td>
                        <td>11 Nov 2020</td>
                    </tr>
                    <tr>
                        <td>HC.37</td>
                        <td>Basic NLP</td>
                        <td>Wikasatrian</td>
                        <td>08 Mar 2020</td>
                        <td>18 Nov 2020</td>
                    </tr>
                </tbody>
                </Table>
                {/* <Pagination className="text-center">
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination> */}
            </Col>
        </Row>
    </CardWithCustom>
  )
}