import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Col, Row, Badge, Label, Input, Button, Pagination, PaginationItem, PaginationLink, Table, FormGroup, InputGroup, InputGroupAddon } from 'reactstrap';
import WidgetCustom from '../Widgets/WidgetCustom';
import { CardWhiteComponent, CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'


const FileManager = () => {
    return (
        <div>
            <CardWithCustom classHeader={"bg-success text-white"} text="File Manager">
                <Row className="card-custom">
                    <Col md="8" xs="12">
                        <Button outline color="primary">
                            <i className="fa fa-plus"></i>&nbsp; Upload Files
                        </Button>
                    </Col>
                    <Col md="4" xs="12">
                        <FormGroup row className="text-right">
                            <Col md="12">
                                <InputGroup>
                                    {/* <InputGroupAddon addonType="prepend">
                                    <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                                    </InputGroupAddon> */}
                                    <Input type="text" id="input3-group2" name="input3-group2" placeholder="Search" />
                                    <InputGroupAddon addonType="append">
                                    <Button active type="button" color="info">Cari</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col xs="12" lg="12">
                        <Table responsive style={{ fontSize: '.9em' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Owner</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Project X</td>
                                <td>20/03/2020</td>
                                <td>Arya Stark</td>
                                <td>pdf</td>
                                <td>
                                    <Button color="primary">
                                        <i className="fa fa-download"></i>
                                    </Button>&nbsp;
                                    <Button color="danger">
                                        <i className="fa fa-print"></i>
                                    </Button>&nbsp;
                                    <Button color="warning">
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Project X</td>
                                <td>20/03/2020</td>
                                <td>Arya Stark</td>
                                <td>pdf</td>
                                <td>
                                    <Button color="primary">
                                        <i className="fa fa-download"></i>
                                    </Button>&nbsp;
                                    <Button color="danger">
                                        <i className="fa fa-print"></i>
                                    </Button>&nbsp;
                                    <Button color="warning">
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Project X</td>
                                <td>20/03/2020</td>
                                <td>Arya Stark</td>
                                <td>pdf</td>
                                <td>
                                    <Button color="primary">
                                        <i className="fa fa-download"></i>
                                    </Button>&nbsp;
                                    <Button color="danger">
                                        <i className="fa fa-print"></i>
                                    </Button>&nbsp;
                                    <Button color="warning">
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                        </Table>
                        <Pagination className="text-center">
                            <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </CardWithCustom>
        </div >
    )
}

FileManager.propTypes = {

}

export default FileManager
