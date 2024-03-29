import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { uploadFile, getFileManagementById, update } from '../endpoint/FileManagerEndpoint'
import Dropzone from 'react-dropzone'
import '../style/style.css'
import Swal from 'sweetalert2'
import { urlBackend } from '../../../MyServices/api/URLApi'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = props => {
    const [file, setFile] = useState("", 'file')
    let body = new FormData()
    const id = props.match.params.id

    const [status, setStatus] = useState("", 'status')
    const [category, setCategory] = useState("", 'category')
    const [title, setTitle] = useState("", 'title')
    const [description, setDescription] = useState("", 'description')
    const [isUpdate, setIsUpdate] = useState(false, 'isUpdate')
    const [fileBefore, setFileBefore] = useState({}, 'file_before')


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

    const onDrop = (acceptedFiles) => {
        console.log("onDrop -> acceptedFiles", acceptedFiles[0])
        setFile(acceptedFiles[0])
    }

    const onSubmit = async () => {
        console.log("file", file)
        if (file) body.append('attachment', file)
        body.append('title', title)
        body.append('category', category)
        body.append('status', !isUpdate ? 'active' : status)
        body.append('description', description)
        const postEndPoint = id ? update : uploadFile
        const { code } = await postEndPoint(body, id || "")
        if (code == 200) {
            Swal.fire(
                'Simpan!',
                'Sukses Menyimpan File.',
                'success'
            )
            setTimeout(() => {
                props.history.push('/file-manager')
            }, 2000)
        }
    }

    const getFileManagement = async () => {
        let { data } = await getFileManagementById(id)
        if (data) {
            setCategory(data.category)
            setDescription(data.description)
            setStatus(data.status)
            setTitle(data.title)
            setFileBefore({ name: data.name, url: data.url })
        }
    }

    useEffect(() => {
        if (id) {
            getFileManagement()
            setIsUpdate(true)
        }
    }, [])

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
                                        <Input type="select" name="ccmonth" id="tenantFrom" name="category" value={category} onChange={(e) => onChangeCategory(e)} required>
                                            <option value="0"> Pilih Kategori File</option>
                                            <option value="Asuransi"> Asuransi</option>
                                            <option value="Pengumuman"> Pengumuman</option>
                                            <option value="SK"> SK</option>
                                            <option value="Pengembangan"> Pengembangan</option>
                                            <option value="dll"> dll</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Title</Label>
                                        <Input type="text" name="title" id="tenantFrom" value={title} onChange={(e) => onChangeTitle(e)} required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth">Deskripsi</Label>
                                    <Input type="textarea" name="description" id="exampleText" value={description} onChange={(e) => onChangeDescription(e)} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs="12">
                                    <Label htmlFor="ccmonth" style={{ display: 'block' }}>File</Label>
                                    {isUpdate &&
                                        <a href={`${urlBackend}${fileBefore.url}`}>
                                            {fileBefore.name}
                                        </a>
                                    }
                                    <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section className="dropzone">
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    {file != "" ?
                                                        <p>File submitted: {file.name} </p> : <p>Drag 'n' drop some files here, or click to select files</p>}
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                </Col>
                            </Row>
                            {console.log(isUpdate)}
                            {
                                isUpdate &&
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Status</Label>
                                            <Input type="select" name="ccmonth" id="tenantFrom" name="status" value={status} onChange={(e) => onChangeStatus(e)} required>
                                                <option value="0"> Pilih Status</option>
                                                <option value="active"> Active</option>
                                                <option value="inactive"> Inactive</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            }
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
