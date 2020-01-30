import React from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { uploadFile } from '../endpoint/FileManagerEndpoint'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = props => {
    const [state, setstate] = useState("")
    const [file, setFile] = useState("")
    const { register, handleSubmit, watch } = useForm();

    const changeFile = (e) => {
        setFile(e.target.files.name)
    }

    const onSubmit = async (data) => {
        data.name = data.name[0].name;
        data.status = "active"
        await uploadFile(data)
    }

    return (
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <Input type="select" name="ccmonth" id="tenantFrom" name="category" innerRef={register({ required: true })}>
                                            <option value="0"> Pilih Kategori File</option>
                                            <option value="Asuransi"> Asuransi</option>
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
                                        <Input type="text" name="title" id="tenantFrom" innerRef={register({ required: true })} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">Deskripsi</Label>
                                    <Input type="textarea" name="description" id="exampleText" innerRef={register({ required: true })} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">File</Label>
                                    <Input type="file" name="name" id="exampleText" innerRef={register({ required: true })} onChange={(e) => changeFile(e)}/>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            </form>
        </div>
    )
}


export default InputMutasiPromosiPegawai
