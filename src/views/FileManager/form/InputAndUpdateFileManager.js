import React from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';




const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = props => {
    const [state, setstate] = useState("")
    const { register, handleSubmit, watch } = useForm();

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xl={9}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-file"></i> Input Master File
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jenis Kategori File</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Pilih Kategori File</option>
                                            <option value="Pengumuman"> Asuransi</option>
                                            <option value="Pengumuman"> Pengumuman</option>
                                            <option value="SK"> SK</option>
                                            <option value="Pengembangan"> Pengembangan</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Title</Label>
                                        <Input type="text" name="title" id="tenantFrom" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">Deskripsi</Label>
                                    <Input type="textarea" name="notes" id="exampleText" innerRef={register({ required: true })} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">File</Label>
                                    <Input type="file" name="notes" id="exampleText" innerRef={register({ required: true })} />
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
