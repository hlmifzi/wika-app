import React, { useEffect, useState } from 'react'
import { Button, Label, Input, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Form, DatePicker } from 'antd'
import ReportMutasiPromosiTable from './views/ReportMutasiPromosiTable'
import { getTypeMutation, getFilterMutation } from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';

const { RangePicker } = DatePicker;

const dateFormat = 'MM-DD-YYYY';


const ReportMutasiPromosiPegawai = ({ match }) => {
    const [dataPegawai, setDataPegawai] = useState([])
    const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
    const [filter, setFilter] = useState({ dateFrom: '', dateTo: '', typeMutationId: '' }, 'filter')
    const { register, handleSubmit, watch } = useForm();    

    // const getData = () => {
    //     setDataPegawai([
    //         {
    //             key: '1',
    //             nip: 2019012,
    //             name: 'cohn Brown',
    //             statusPegawai: 'Organik',
    //             fieldFunction: 'ENGINEERING',
    //             titleName: 'AHLI UTAMA 1',
    //             bodGroup: 'LRT',
    //         },
    //         {
    //             key: '2',
    //             nip: 2019012,
    //             name: 'cohn Brown',
    //             statusPegawai: 'Organik',
    //             fieldFunction: 'ENGINEERING',
    //             titleName: 'AHLI UTAMA 1',
    //             bodGroup: 'LRT',
    //         },
    //     ])
    // }

    const getData = async () => {
        let datas;
        let { data } = await getFilterMutation(filter)
        setDataPegawai(data)
      }

    const getDataTipeMutasi = async() => {
      let { data } = await getTypeMutation()
      setDataTipeMutasi(data)
    }

    const saveFilterToBeSent = () => {
        setFilter({dateFrom: filter.dateFrom, dateTo: filter.dateTo})
    }

    const saveFilter = () => {
        saveFilterToBeSent()
        getData()
    }

    useEffect(() => {
        getDataTipeMutasi()
    }, [])

    function onChange(value, dateString) {
        setFilter({dateFrom: dateString[0], dateTo: dateString[1], typeMutationId: ''})
    }

    const tipeMutasiTerpilih = watch("typeMutationId");

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="nav-icon icon-action-redo"></i> Report Mutasi Promosi
                        </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div className="col-sm-4 mb-form">
                                <Label>Pilih Tanggal</Label>
                                    <RangePicker
                                        format={dateFormat}
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="ccmonth">Pilih Tipe Mutasi</Label>
                                    <Input type="select" name="typeMutationId" innerRef={register({ required: true })}>
                                        <option value="">Pilih Tipe Mutasi</option>
                                        {dataTipeMutasi.map(value => (
                                            <option value={`${value.id}`}>{value.name}</option>
                                          ))}
                                    </Input>
                                </div>
                            </div>
                            <Button onClick={() => saveFilter()}>Filter</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Card>
                <CardHeader>
                    <i className="fa fa-users"></i> Daftar Seluruh Karyawan
                </CardHeader>
                <CardBody>
                    <ReportMutasiPromosiTable data={dataPegawai} />
                </CardBody>
            </Card>
        </div>
    )
}


export default ReportMutasiPromosiPegawai
