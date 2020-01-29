import React from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { DatePicker } from 'antd';
import moment from 'moment';
import WidgetCustom from '../Widgets/WidgetCustom'
import { SideProfile } from '../DetailPegawai/SideProfile'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = props => {
    const [state, setstate] = useState("")
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xl={9}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i> Mutasi Jabatan
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jenis Kategori File</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Asuransi</option>
                                            <option value="0"> Utama</option>
                                            <option value="0"> Rangkapan</option>
                                            <option value="0"> Utama (PJS)</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tanggal</Label><br />
                                        <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Unit Kerja</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Pilih  Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jabatan</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Posisi</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Grade</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}


export default InputMutasiPromosiPegawai
