import React, { useEffect, useRef } from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { DatePicker } from 'antd';
import moment from 'moment';
import WidgetCustom from '../Widgets/WidgetCustom'
import { SideProfile } from '../DetailPegawai/SideProfile'
import {
    getTypeMutation,
    getKindMutation,
    storeMutation,
    getWorkUnit,
    getPosition,
    getFieldFunction,
    getGrade,
    getTitleName,
    getEmployeeStatus
}
    from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';
import { getDataPegawai } from '../DetailPegawai/endpoint/DetailPegawaiEndpoint'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = ({ match }) => {
    const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
    const [dataJenisMutasi, setDataJenisMutasi] = useState([], 'dataJenisMutasi')
    const [dataDetailpegawai, setDataDetailpegawai] = useState({ workUnit: {} }, "dataDetailpegawai");
    const [allPegawai, setAllPegawai] = useState([], "dataPegawai");
    const [dataUnitKerja, setDataUnitKerja] = useState([], "dataUnitKerja");
    const [dataPosisi, setDataPosisi] = useState([], "dataPosisi");
    const [dataFungsiBidang, setDataFungsiBidang] = useState([], "dataFungsiBidang");
    const [dataGrade, setDataGrade] = useState([], "dataGrade");
    const [dataJabatan, setDataJabatan] = useState([], "dataJabatan");
    const [dataStatusKaryawan, setStatusKaryawan] = useState([], "dataStatusKaryawan");
    const [type, setType] = useState("")
    const [employee, setEmployee] = useState("")

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = async (data) => {
        data.typeMutationId = parseInt(data.typeMutationId);
        data.kindMutationId = parseInt(data.kindMutationId);
        data.userId = parseInt(data.userId);
        await storeMutation(data)
    }

    const tipeMutasiTerpilih = watch("typeMutationId");


    const chooseTypeValue = (e) => {
        setType(e.target.value)
    }

    const chooseEmployeeValue = (e) => {
        setEmployee(e.target.value)
        getDataDetailPegawai(e.target.value)
    }

    const getDataTipeMutasi = async () => {
        let { data } = await getTypeMutation()
        setDataTipeMutasi(data)
    }

    const getDataJenisMutasi = async () => {
        let { data } = await getKindMutation()
        setDataJenisMutasi(data)
    }

    const getDataDetailPegawai = async (id) => {
        let { data } = await getDataPegawai(id)
        setDataDetailpegawai(data)
    }

    const getAllPegawai = async () => {
        let { data } = await getDataFilterPegawai()
        setAllPegawai(data)
    }

    const getUnitKerja = async () => {
        let { data } = await getWorkUnit()
        setDataUnitKerja(data)
    }

    const getPosisi = async () => {
        let { data } = await getPosition()
        setDataPosisi(data)
    }

    const getFungsiBidang = async () => {
        let { data } = await getFieldFunction()
        setDataFungsiBidang(data)
    }

    const getGradeId = async () => {
        let { data } = await getGrade()
        setDataGrade(data)
    }

    const getJabatan = async () => {
        let { data } = await getTitleName()
        setDataJabatan(data)
    }

    const getStatusKaryawan = async () => {
        let { data } = await getEmployeeStatus()
        setStatusKaryawan(data)
    }

    useEffect(() => {
        getDataTipeMutasi()
        getDataJenisMutasi()
        getDataDetailPegawai()
        getAllPegawai()
        getUnitKerja()
        getPosisi()
        getFungsiBidang()
        getGradeId()
        getJabatan()
        getStatusKaryawan()
    }, [])

    return (
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Input Mutasi Promosi Pegawai
                        </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Tipe</Label>
                                            <Input type="select" name="typeMutationId" id="product" required innerRef={register({ required: true })} onChange={(e) => chooseTypeValue(e)}>
                                                <option value=""> Pilih Tipe Mutasi</option>
                                                {dataTipeMutasi.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="8">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Pilih Pegawai</Label>
                                            <Input type="select" name="userId" id="product" required innerRef={register({ required: true })} onChange={(e) => chooseEmployeeValue(e)}>
                                                <option value=""> Pilih Pegawai</option>
                                                {allPegawai.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    {type != "" && employee != "" && (
                    <Col xl={3}>
                        <WidgetCustom
                            dataBox={() => ({ variant: 'twitter' })}
                            name={dataDetailpegawai.name}
                            employeeStatus={dataDetailpegawai.employeeStatus}
                        />
                        <SideProfile data={dataDetailpegawai} />
                    </Col>)}
                    {type == 1 && employee != "" && (<Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i>Mutasi Jabatan
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                            <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jenis Mutasi</option>
                                                {dataJenisMutasi.map(value => (
                                                    (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                                ))}
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
                                            <Input type="select" name="workUnitId" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Unit Kerja</option>
                                                {dataUnitKerja.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jabatan</Label>
                                            <Input type="select" name="titleName" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jabatan</option>
                                                {dataJabatan.map(value => (
                                                    <option value={`${value.titleName}`}>{value.titleName}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Posisi</Label>
                                            <Input type="select" name="positionId" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Posisi</option>
                                                {dataPosisi.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                            <Input type="select" name="fieldFunctionId" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Fungsi Bidang</option>
                                                {dataFungsiBidang.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Grade</Label>
                                            <Input type="select" name="gradeId" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Grade</option>
                                                {dataGrade.map(value => (
                                                    <option value={`${value.id}`}>{value.class}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                        <Input type="textarea" name="notes" id="exampleText" innerRef={register({ required: true })} />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                        </Card>
                    </Col>)}

                    {type == 2 && employee != "" && (
                    <Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Promosi Jabatan
                        </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                            <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jenis Mutasi</option>
                                                {dataJenisMutasi.map(value => (
                                                    (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                                ))}
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
                                            <Input type="select" name="workUnitId" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Unit Kerja</option>
                                                {dataUnitKerja.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jabatan</Label>
                                            <Input type="select" name="titleName" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jabatan</option>
                                                {dataJabatan.map(value => (
                                                    <option value={`${value.titleName}`}>{value.titleName}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Posisi</Label>
                                            <Input type="select" name="positionId" id="tenantFrom" innerRef={register({ required: true })}>
                                                <option value=""> Pilih Posisi</option>
                                                {dataPosisi.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                            <Input type="select" name="fieldFunctionId" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Fungsi Bidang</option>
                                                {dataFungsiBidang.map(value => (
                                                    <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Grade</Label>
                                            <Input type="select" name="gradeId" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Grade</option>
                                                {dataGrade.map(value => (
                                                    <option value={`${value.id}`}>{value.class}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                        <Input type="textarea" name="notes" id="exampleText" innerRef={register({ required: true })} />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                        </Card>
                    </Col>
                    )}

                    {(type == 3 && employee != "" && <Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Promosi Status
                        </CardHeader>
                            <CardBody>
                            <   Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                            <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jenis Mutasi</option>
                                                {dataJenisMutasi.map(value => (
                                                    (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                                ))}
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
                                            <Label htmlFor="ccmonth">Pilih Status</Label>
                                            <Input type="select" name="employeeStatus" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Status</option>
                                                {dataStatusKaryawan.map(value => (
                                                    <option value={`${value.employeeStatus}`}>{value.employeeStatus}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                        <Input type="textarea" name="notes" id="exampleText" innerRef={register({ required: true })} />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                        </Card>
                    </Col>)}

                    {type == 4 && employee != "" && (<Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Mutasi Non Aktif
                        </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                            <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jenis Mutasi</option>
                                                {dataJenisMutasi.map(value => (
                                                    (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="3">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Tanggal Keluar</Label><br />
                                            <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                        <Input type="textarea" name="notes" id="exampleText" innerRef={register({ required: true })} />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                        </Card>
                    </Col>)}


                </Row>
            </form>
        </div>
    )
}


export default InputMutasiPromosiPegawai
