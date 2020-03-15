import React, { useEffect, useRef } from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { DatePicker } from 'antd';
import moment from 'moment';
import WidgetCustom from '../Widgets/WidgetCustom'
import { SideProfile } from '../DetailPegawai/SideProfile'
import {
    getTypeMutation,
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
    const [allPegawai, setAllPegawai] = useState([], "dataPegawai");
    const [dataUnitKerja, setDataUnitKerja] = useState([], "dataUnitKerja");
    const [dataPosisi, setDataPosisi] = useState([], "dataPosisi");
    const [dataFungsiBidang, setDataFungsiBidang] = useState([], "dataFungsiBidang");
    const [dataGrade, setDataGrade] = useState([], "dataGrade");
    const [dataJabatan, setDataJabatan] = useState([], "dataJabatan");
    const [dataStatusKaryawan, setStatusKaryawan] = useState([], "dataStatusKaryawan");
    const [type, setType] = useState("")
    const initialValuesInput = [{ isCancelEmployee: false }]
    const [payload, setPayload] = useState(initialValuesInput)
    const [multipleFieldInRangkap, setMultipleFieldInRangkap] = useState(1)

    const immerSetState = newState => setPayload(currentState => produce(currentState, newState));

    let pegawaiList = [];
    Array.from(allPegawai).forEach((value) => { pegawaiList.push(<Option key={value.id} value={value.id.toString()}>{value.name}</Option>) }
    );


    const { register, handleSubmit, watch } = useForm();
    const onSubmit = async (data) => {

        const payloadSend = data.map(({ dataDetailPegawai, ...rest }) => rest)

        Swal.fire({
            title: 'Apakah Kamu Yakin?',
            text: 'Kamu Akan Mengubah Data Karyawan',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Simpan!',
            cancelButtonText: 'Tidak, Batalkan '
        }).then((result) => {
            if (result.value) {
                storeMutationMultiple(payloadSend)

                Swal.fire(
                    'Simpan!',
                    'Sukses Simpan Mutasi Promosi.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Batalkan',
                    'Batalkan Input Mutasi Promosi',
                    'error'
                )
            }
        })
        // NotifSwal.successSubmit("Input has been submitted")
        // window.location.reload()
    }


    const chooseTypeValue = (e) => {
        setType(e.target.value)
    }


    const chooseEmployeeValueArray = async (value, name) => {
        const valueLength = value.length - 1
        const userId = value[value.length - 1]

        let { data } = await getDataPegawai(userId)
        if (!data) return

        let typeMutation
        if (type == 1) {
            typeMutation = 'MUTASI JABATAN'
        } else if (type == 2) {
            typeMutation = 'PROMOSI JABATAN'
        } else if (type == 3) {
            typeMutation = 'PROMOSI STATUS'
        } else if (type == 4) {
            typeMutation = 'MUTASI NON AKTIF'
        } else if (type == 5) {
            typeMutation = 'RANGKAPAN'
        }

        if (!payload[0].isCancelEmployee) {
            immerSetState(draft => {
                if (payload.length <= valueLength) draft.push({})
                draft[valueLength]['typeMutation'] = typeMutation
                draft[valueLength][name] = parseInt(userId)
                draft[valueLength].dataDetailPegawai = data
                draft[0]['isCancelEmployee'] = false
            })
        }
    }

    const handleDeselectEmployee = (value) => {
        const sisaPayloadAfterRemove = payload.filter(v => v.userId !== parseInt(value))
        setPayload(sisaPayloadAfterRemove)
        immerSetState(draft => {
            draft[0]['isCancelEmployee'] = true
        })
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
        let converDate = moment(dateString).format('MM/DD/YYYY')
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
        if (!data) return
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


    let jsxMultipleFieldInRangkap = []
    for (let i = 0; i < multipleFieldInRangkap; i++) {
        jsxMultipleFieldInRangkap.push(
            <div style={{ padding: '15px' }}>
                <Row style={{ backgroundColor: '#fafafa', padding: '10px', marginTop: '5px', marginBottom: '5px' }}>
                    <Col xs="12">
                        <div className="float-r">
                            {
                                i == 0 ||
                                <Button className="float-right mb-15" onClick={() => setMultipleFieldInRangkap(multipleFieldInRangkap - 1)} size="xs" color="danger">
                                    <i className="fa fa-times" ></i>
                                </Button>
                            }
                        </div>
                    </Col>
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
                                {dataUnitKerja.map((value, idx) => (
                                    <Option key={idx} value={`${value.id}`}>{value.name}</Option>
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
                                {dataJabatan.map((value, idx) => (
                                    <Option key={idx} value={`${value.titleName}`}>{value.titleName}</Option>
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
                                {dataPosisi.map((value, idx) => (
                                    <Option key={idx} value={`${value.id}`}>{value.name}</Option>
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
                                {dataFungsiBidang.map((value, idx) => (
                                    <Option key={idx} value={`${value.id}`}>{value.name}</Option>
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
                                {dataGrade.map((value, idx) => (
                                    <Option key={idx} value={`${value.id}`}>{value.class}</Option>
                                ))}
                            </Select>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        )
    }


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
                                                    <option value={value.id}>{value.name}</option>
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
                                                onDeselect={handleDeselectEmployee}
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

                    {type && payload[0].userId &&
                        <>
                            <Col xl={9}>
                            </Col>
                            <Col xl={3} >
                                <Button className="float-right mb-15" type="submit" size="xl" color="primary"><i className="fa fa-save" ></i> SAVE</Button> &nbsp;
                                <Button className="float-right mb-15" onClick={() => window.location.reload()} type="button" size="xl" color="default"><i className="fa fa-times" ></i> CANCEL</Button> &nbsp;
                            </Col>
                        </>
                    }

                    {type == 1 && payload[0].userId && (
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
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
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
                                                        <Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })

                    )}

                    {type == 2 && payload[0].userId && (
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
                                    </Col>
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
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
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
                                                        <Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })

                    )}

                    {(type == 3 && payload[0].userId &&
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
                                    </Col>
                                    <Col xl={9}>
                                        <Card>
                                            <CardHeader>
                                                <i className="fa fa-user"></i> Promosi Status
                                        </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col xs="3">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Tanggal</Label><br />
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Pilih Status</Label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: "100%" }}
                                                                placeholder="Pilih Status"
                                                                optionFilterProp="children"
                                                                onChange={value => _handleSelectInputHelper(value, 'employeeStatus', i)}
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
                                                        <Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })

                    )}

                    {type == 4 && payload[0].userId &&
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
                                    </Col>
                                    <Col xl={9}>
                                        <Card>
                                            <CardHeader>
                                                <i className="fa fa-user"></i> Mutasi Non Aktif
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
                                                                <Option value={`RESIGN`}>Resign </Option>
                                                                <Option value={`PENSIUN`}>Pensiun </Option>
                                                                <Option value={`PINDAH DEPARTEMEN`}>Pindah Departemen</Option>
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="3">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Tanggal Keluar</Label><br />
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="12">
                                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                                        <Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }


                    {type == 5 && payload[0].userId &&

                        payload.map((v, i) => {
                            return (
                                <>

                                    <Col xl={3} key={i}>
                                        <WidgetCustom
                                            dataBox={() => ({ variant: 'twitter' })}
                                            name={v.dataDetailPegawai.name}
                                            employeeStatus={v.dataDetailPegawai.employeeStatus}
                                        // titleName={v.dataDetailpegawai.titleName}
                                        // position={v.dataDetailpegawai.employeeStatus}
                                        />
                                    </Col>
                                    <Col xl={9}>
                                        <Card>
                                            <CardHeader>
                                                <i className="fa fa-user"></i>Mutasi Rangkapan
                                                </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col xs="4">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Jenis Rangkapan</Label>
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
                                                                <Option value={`PJS RANGKAP`}>PJS RANGKAP</Option>
                                                                <Option value={`SELESAI PJS`}>SELESAI PJS </Option>
                                                            </Select>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="3">
                                                        <FormGroup>
                                                            <Label htmlFor="ccmonth">Tanggal</Label><br />
                                                            <DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                {jsxMultipleFieldInRangkap}
                                                {
                                                    v.kindMutation == 'PJS RANGKAP' &&
                                                    <Row>
                                                        <Col xs={12}>
                                                            <Button className={`float-right mb-15 width-100 ${multipleFieldInRangkap == 2 ? 'avoid-clicks' : ''}`} onClick={() => setMultipleFieldInRangkap(multipleFieldInRangkap + 1)} type="submit" size="xl" color="primary">
                                                                <i className="fa fa-plus" ></i>
                                                                Tambah
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                }
                                                <Row>
                                                    <Col xs="12">
                                                        <Label htmlFor="ccmonth">Deskripsi</Label>
                                                        <Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </form>
        </div>
    )
}


export default InputMutasiPromosiPegawai
