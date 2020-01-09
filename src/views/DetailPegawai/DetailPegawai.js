import React from 'react'
import { Col, Row, Progress, ListGroup, ListGroupItem, Badge, FormGroup, Label, Input } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import Widget02 from '../Widgets/Widget02';
// import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
// import PropTypes from 'prop-types'
import { CardWithCustom, CardWidget } from '../../MyComponent/CardCustom/CardComponent'

const DetailPegawai = props => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                    </Widget03>
                </Col>
                <Col xs={12} sm={6} md={9}>
                    <CardWithCustom classHeader={"bg-primary text-white"} text="Employement Status">
                        <Row>
                            <Col xs="12" md="6">
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">BOD Group</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="bodGroup" placeholder="Group ***" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Nama Jabatan</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="nmJbtn" placeholder="Staff" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Status Jabatan</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="stsJbtn" placeholder="Berjalan" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Tgl Menjabat Ditetapkan</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="date" id="tglMnjbtTtpkn" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Tgl Menjabat Berlaku</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="date" id="tglMnjbtBrlku" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Col>
                            <Col xs="12" md="6">
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Lama Menjabat</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="lmMnjbt" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Masa Kerja</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="MsKrj" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Projek JO/NON JO</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="prjkType" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Besaran Proyek</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="text" id="bsrnPrjk" required />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" md="12">
                                    <FormGroup row>
                                        <Col md="12" xs="12">
                                            <Label htmlFor="selectSm">Jenis Projek Pernah Ditangani</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Input type="select" name="jnsPrjkPrnhDtgni" id="jnsPrjkPrnhDtgni" multiple>
                                                <option value="1">Railway</option>
                                                <option value="2">Tol</option>
                                                <option value="3">Industrial Plant</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                    </CardWithCustom>
                    <Row>
                        <Col xs="12" sm="6" lg="3">
                            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-cogs" color="primary" variant="1" />
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-laptop" color="info" variant="1" />
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-moon-o" color="warning" variant="1" />
                        </Col>
                        <Col xs="12" sm="6" lg="3">
                            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-cogs" color="primary" variant="1" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

DetailPegawai.propTypes = {

}

export default DetailPegawai
