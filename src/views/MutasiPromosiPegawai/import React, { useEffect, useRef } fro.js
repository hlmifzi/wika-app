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
    storeMutationMultiple,
    getWorkUnit,
    getPosition,
    getFieldFunction,
    getGrade,
    getTitleName,
    getEmployeeStatus
} from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';
import { getDataPegawai } from '../DetailPegawai/endpoint/DetailPegawaiEndpoint'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'
import NotifSwal from '../../MyComponent/notification/Swal'
import { Select } from 'antd'
import produce from "immer";
import Swal from 'sweetalert2'



const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';


const InputMutasiPromosiPegawai = (props) => {
    const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
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
    const [employeeList, setEmployeeList] = useState([], "employeeList")
    const [dataDetailpegawaiList, setDataDetailpegawaiList] = useState([], "dataDetailpegawaiList");

    const [kindMutation, setKindMutation] = useState("", "kindMutation")
    const [workUnit, setWorkUnit] = useState("", "workUnit")
    const [titleName, setTitleName] = useState("", "titleName")
    const [position, setPosition] = useState("", "position")
    const [fieldFunction, setFieldFunction] = useState("", "fieldFunction")
    const [grade, setGrade] = useState("", "grade")
    const [employeeStatus, setEmployeeStatus] = useState("", "employeeStatus")
    const [dataJenisMutasi, setDataJenisMutasi] = useState([
        { id: 5, typeMutationId: 2, name: 'UTAMA' }
    ])

    const initialValuesInput = []
    const [payload, setPayload] = useState(initialValuesInput)
    const immerSetState = newState => setPayload(currentState => produce(currentState, newState));

    let pegawaiList = [];
    Array.from(allPegawai).forEach((value) => { pegawaiList.push(<Option key={value.id} value={value.id.toString()}>{value.name}</Option>) }
    );


    const { register, handleSubmit, watch } = useForm();
    const onSubmit = async (data) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You Will Change Data Of Employee',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Save it!',
            cancelButtonText: 'No, cancel it'
        }).then((result) => {
            if (result.value) {
                let data = storeMutationMultiple(data)

                Swal.fire(
                    'Save!',
                    'Success Save Mutation.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Canceled Saved User',
                    'error'
                )
            }
        })
        // data.typeMutationId = parseInt(data.typeMutationId);
        // data.kindMutationId = parseInt(data.kindMutationId);
        // data.userId = parseInt(data.userId);
        // await storeMutation(data)
        // NotifSwal.successSubmit("Input has been submitted")
        // window.location.reload()
    }

    const tipeMutasiTerpilih = watch("typeMutationId");


    const chooseTypeValue = (e) => {
        setType(e.target.value)
    }


    const chooseEmployeeValueArray = async (value, name) => {
        const arrIndex = value.length - 1
        const userId = value[value.length - 1]
        let { data } = await getDataPegawai(userId)

        immerSetState(draft => {
            draft.push({})
            draft[arrIndex][name] = parseInt(userId)
            draft[arrIndex].dataDetailPegawai = data
        })
    }


    const getDataDetailPegawaiList = async (id = "") => {
        let { data } = await getDataPegawai(id)
        if (!data) return
        setDataDetailpegawaiList(dataDetailpegawaiList => [...dataDetailpegawaiList, data])
    }

    const _handleSelectInputHelper = (value, name, i) => {
        immerSetState(draft => {
            draft[i][name] = parseInt(value)
        })
    }

    const _handleSelectInputTextHelper = (value, name, i) => {
        immerSetState(draft => {
            draft[i][name] = value
        })
    }
    const _handleOnChangeDatePicker = (date, dateString, name, i) => {
        let converDate = moment(dateString).format('DD/MM/YYYY')
        immerSetState(draft => {
            draft[i][name] = converDate
        })
    }

    const _handleSelectInputNotesHelper = (e, i) => {
        const { name, value } = e.target
        immerSetState(draft => {
            draft[i][name] = value
        })
    }

    const chooseKindMutation = (value) => {
        setKindMutation(value)
    }

    const chooseWorkUnit = (value) => {
        setWorkUnit(value)
    }

    const chooseTitleName = (value) => {
        setTitleName(value)
    }

    const choosePosition = (value) => {
        setPosition(value)
    }

    const chooseFieldFunction = (value) => {
        setFieldFunction(value)
    }



    const getDataTipeMutasi = async () => {
        let { data } = await getTypeMutation()
        if (!data) return
        setDataTipeMutasi(data)
    }



    const getAllPegawai = async () => {
        let { data } = await getDataFilterPegawai()
        if (!data) return

        setAllPegawai(data)
    }

    const getUnitKerja = async () => {
        let { data } = await getWorkUnit()
        if (!data) return
        setDataUnitKerja(data)
    }

    const getPosisi = async () => {
        let { data } = await getPosition()
        if (!data) return
        setDataPosisi(data)
    }

    const getFungsiBidang = async () => {
        let { data } = await getFieldFunction()
        if (!data) return
        setDataFungsiBidang(data)
    }

    const getGradeId = async () => {
        let { data } = await getGrade()
        if (!data) return
        setDataGrade(data)
    }

    const getJabatan = async () => {
        let { data } = await getTitleName()
        setDataJabatan(data)
    }

    const getStatusKaryawan = async () => {
        let { data } = await getEmployeeStatus()
        if (!data) return
        setStatusKaryawan(data)
    }

    useEffect(() => {
        getDataTipeMutasi()
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
            <form onSubmit={handleSubmit(() => onSubmit(payload))}>
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
                                            <Select
                                                mode="tags"
                                                style={{ width: '100%', height: '100%' }}
                                                placeholder="Pilih Pegawai"
                                                onChange={value => chooseEmployeeValueArray(value, 'userId')}
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }>
                                                {pegawaiList}
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    {type && payload.length !== 0 &&
                        <>
                            <Col xl={9}>
                            </Col>
                            <Col xl={3} >
                                <Button className="float-right mb-15" type="submit" size="xl" color="primary"><i className="fa fa-save" ></i> SAVE</Button> &nbsp;
                            </Col>
                        </>
                    }

                    {type == 1 && payload.length !== 0 && (
                        payload.map((v, i) => {
                            return (
                                <>
                                    <Col xl={3} key={i}>
                                        <WidgetCustom
                                            dataBox={() => ({ variant: 'twitter' })}
                                            name={v.dataDetailPegawai.name}
                                            employeeStatus={v.dataDetailPegawai.employeeStatus}
                                        // titleName={v.dataDetailpegawai.titleName}
                                        //     position={v.dataDetailpegawai.employeeStatus}
                                        />
                                        {/* <SideProfile data={v.dataDetailpegawai} /> */}
                                    </Col>
                                    <Col xl={9}>
                                        <Card>
                                            <CardHeader>
                                                <i className="fa fa-user"></i>Mutasi Jabatan
                                        </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Jenis Mutasi"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
                                                                filterOption={(input, option) =>
                                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                <Option value="UTAMA">UTAMA</Option>
                                                                <Option value="UTAMA PJS">UTAMA (PJS)</Option>
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="3">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Tanggal</Label><br />
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Unit Kerja</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Unit Kerja"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'workUnitId', i)}
                                                                filterOption={(input, option) =>
                                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                {dataUnitKerja.map(value => (
                                                                    <Option value={`${value.id}`}>{value.name}</Option>
                                                                ))}
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Jabatan</Label>

                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Jabatan"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'positionId', i)}
                                                                filterOption={(input, option) =>
                                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                {dataJabatan.map(value => (
                                                                    <Option value={`${value.titleName}`}>{value.titleName}</Option>
                                                                ))}
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Posisi</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Posisi"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'positionId', i)}
                                                                filterOption={(input, option) =>
                                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                {dataPosisi.map(value => (
                                                                    <Option value={`${value.id}`}>{value.name}</Option>
                                                                ))}
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Fungsi Bidang"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'fieldFunctionId', i)}
                                                                filterOption={(input, option) =>
                                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                {dataFungsiBidang.map(value => (
                                                                    <Option value={`${value.id}`}>{value.name}</Option>
                                                                ))}
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Grade</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Grade"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'gradeId', i)}
                                                            >
                                                                {dataGrade.map(value => (
                                                                    <Option value={`${value.id}`}>{value.class}</Option>
                                                                ))}
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="12">
                                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                                        <Input type="textarea" name="notes" oncChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })

                    )}

                    {type == 2 && payload.length !== 0 && (
                        payload.map((v, i) => {
                            return (
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
                                                        <Select
                                                            showSearch
                                                            style={{ width: "100%" }}
                                                            placeholder="Pilih Jenis Mutasi"
                                                            optionFilterProp="children"
                                                            onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            <Option value="UTAMA">UTAMA</Option>
                                                            <Option value="UTAMA PJS">UTAMA (PJS)</Option>
                                                        </Select>
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
                                                        <Select
                                                            showSearch
                                                            style={{ width: "100%" }}
                                                            placeholder="Pilih Unit Kerja"
                                                            optionFilterProp="children"
                                                            onChange={chooseWorkUnit}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            {dataUnitKerja.map(value => (
                                                                <Option value={`${value.id}`}>{value.name}</Option>
                                                            ))}
                                                        </Select>
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label htmlFor="ccmonth">Jabatan</Label>
                                                        <Select
                                                            showSearch
                                                            style={{ width: "100%" }}
                                                            placeholder="Pilih Jabatan"
                                                            optionFilterProp="children"
                                                            onChange={chooseTitleName}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            {dataJabatan.map(value => (
                                                                <Option value={`${value.titleName}`}>{value.titleName}</Option>
                                                            ))}
                                                        </Select>
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label htmlFor="ccmonth">Posisi</Label>
                                                        <Select
                                                            showSearch
                                                            style={{ width: "100%" }}
                                                            placeholder="Pilih Posisi"
                                                            optionFilterProp="children"
                                                            onChange={choosePosition}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            {dataPosisi.map(value => (
                                                                <Option value={`${value.id}`}>{value.name}</Option>
                                                            ))}
                                                        </Select>
                                                    </FormGroup>
                                                </Col>
                                                <Col xs="4">
                                                    <FormGroup>
                                                        <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                                        <Select
                                                            showSearch
                                                            style={{ width: "100%" }}
                                                            placeholder="Pilih Fungsi Bidang"
                                                            optionFilterProp="children"
                                                            onChange={chooseFieldFunction}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            {dataFungsiBidang.map(value => (
                                                                <Option value={`${value.id}`}>{value.name}</Option>
                                                            ))}
                                                        </Select>
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
                            )
                        })

                    )}

                    {(type == 3 && employeeList.length != 0 && <Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Promosi Status
                        </CardHeader>
                            <CardBody>
                                {/* <Row>
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
                                </Row> */}
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
                                            {/* <Input type="select" name="employeeStatus" id="tenantFrom" innerRef={register({ required: true })} >
                                                <option value=""> Pilih Status</option>
                                                {dataStatusKaryawan.map(value => (
                                                    <option value={`${value.employeeStatus}`}>{value.employeeStatus}</option>
                                                ))}
                                            </Input> */}
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Pilih Status"
                                                optionFilterProp="children"
                                                onChange={chooseWorkUnit}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                {dataStatusKaryawan.map(value => (
                                                    <Option value={`${value.employeeStatus}`}>{value.employeeStatus}</Option>
                                                ))}
                                            </Select>
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

                    {type == 4 && employeeList.length != 0 && (<Col xl={9}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-user"></i> Mutasi Non Aktif
                        </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                            {/* <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                                <option value=""> Pilih Jenis Mutasi</option>
                                                {dataJenisMutasi.map(value => (
                                                    (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                                ))}
                                            </Input> */}
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Pilih Jenis Mutasi"
                                                optionFilterProp="children"
                                                onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="UTAMA">UTAMA</Option>
                                                <Option value="UTAMA PJS">UTAMA (PJS)</Option>
                                            </Select>
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
                    </Col>)
                    }
                </Row>
            </form>
        </div>
    )
}


export default InputMutasiPromosiPegawai
