import React from 'react'
import { CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import Widget02 from '../Widgets/Widget02';
import { Col, Row, Badge, FormGroup, Label, Input, Button } from 'reactstrap';

export const Job = ({ children, color, text, data }) => {
    return (
        <CardWithCustom classHeader={"bg-primary text-white"} text="Detail Information">
            <Row className="card-custom">
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="bodGroup">BOD Group :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.bodGroup ? data.bodGroup : 'Tidak Ada'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="nmJbtn">Nama Jabatan :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.position ? data.position.name : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="stsJbtn">Status Jabatan :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.jobStatus ? data.jobStatus : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="tglMnjbtTtpkn">Tanggal Menjabat Ditetapkan :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.validDateOfOffice ? data.validDateOfOffice : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="tglMnjbtBrlku">Tanggal Menjabat Berlaku :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.validDateOfOffice ? data.validDateOfOffice : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                </Col>
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="lmMnjbt">Lama Menjabat :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.durationOfFieldFunction ? data.durationOfFieldFunction : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b> <Label htmlFor="MsKrj">Masa Kerja :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.yearsOfService ? data.yearsOfService : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="prjkType">Projek JO/NON JO :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {false ? data.yearsOfService : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="bsrnPrjk">Besaran Proyek :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {false ? data.yearsOfService : 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="jnsPrjkPrnhDtgni">Jenis Projek Pernah Ditangani :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="select" name="jnsPrjkPrnhDtgni" id="jnsPrjkPrnhDtgni" multiple>
                                {data.userProjects ? data.userProjects.map(val =>
                                    <option value="1">{val.name}</option>
                                )
                                    : null}
                            </Input>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <hr />
            <Row className="card-custom">
                <Col md="12" xs="12">
                    <b> <Label>Kategori Proyek Yang Pernah Ditangani : <Badge color="danger">{(data.userProjectCategories && data.userProjectCategories[0]) ? data.userProjectCategories[0].total : 0} Proyek</Badge></Label> </b>
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Widget02 header={(data.userProjectCategories && data.userProjectCategories[0]) ? data.userProjectCategories[0].mega : 0} mainText="Proyek Mega" icon="fa fa-angle-double-up" color="primary" variant="1" />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Widget02 header={(data.userProjectCategories && data.userProjectCategories[0]) ? data.userProjectCategories[0].big : 0} mainText="Proyek Besar" icon="fa fa-angle-up" color="info" variant="1" />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Widget02 header={(data.userProjectCategories && data.userProjectCategories[0]) ? data.userProjectCategories[0].medium : 0} mainText="Proyek Menengah" icon="fa fa-arrows-h" color="warning" variant="1" />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Widget02 header={(data.userProjectCategories && data.userProjectCategories[0]) ? data.userProjectCategories[0].small : 0} mainText="Proyek Kecil" icon="fa fa-angle-down" color="primary" variant="1" />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md="12" xs="12">
                    <b><Label>Riwayat Fungsi :</Label></b>
                </Col>
                <Col>
                    <p>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>PROD</span></Button>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>DAN</span></Button>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>QSHE</span></Button>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>SWL</span></Button>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>NMD</span></Button>
                        <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>ERP</span></Button>
                    </p>
                </Col>
            </Row>
        </CardWithCustom>
    )
}