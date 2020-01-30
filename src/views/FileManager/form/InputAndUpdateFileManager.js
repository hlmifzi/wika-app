import React from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { uploadFile } from '../endpoint/FileManagerEndpoint'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = props => {
    const [state, setstate] = useState("")
    const [file, setFile] = useState("", 'file')
    let body = new FormData()

    const [status, setStatus] = useState("", 'status')
    const [category, setCategory] = useState("", 'category')
    const [title, setTitle] = useState("", 'title')
    const [description, setDescription] = useState("", 'description')

    const changeFile = (e) => {
        setFile(e.target.files[0])
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onSubmit = async() => {
        body.append('attachment', file)
        body.append('title', title)
        body.append('category', category)
        body.append('status', status)
        body.append('description', description)
        await uploadFile(body)
    }

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
                                        <Input type="select" name="ccmonth" id="tenantFrom" name="category"  onChange={(e) => onChangeCategory(e)} required>
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
                                        <Label htmlFor="ccmonth">Status</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" name="status" onChange={(e) => onChangeStatus(e)} required>
                                            <option value="0"> Pilih Status</option>
                                            <option value="active"> Active</option>
                                            <option value="inactive"> Inactive</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Title</Label>
                                        <Input type="text" name="title" id="tenantFrom" onChange={(e) => onChangeTitle(e)} required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">Deskripsi</Label>
                                    <Input type="textarea" name="description" id="exampleText" onChange={(e) => onChangeDescription(e)} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">File</Label>
                                    <Input type="file" name="attachment" id="exampleText" onChange={(e) => changeFile(e)} required />
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success" onClick={() => onSubmit()}><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default InputMutasiPromosiPegawai
