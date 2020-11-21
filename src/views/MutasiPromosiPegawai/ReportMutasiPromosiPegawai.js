import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Button, Label, Input, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Form, DatePicker } from 'antd'
import ReportMutasiPromosiTable from './views/ReportMutasiPromosiTable'
import { getTypeMutation, getFilterMutation, downloadExcel } from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';
import { urlBackend } from '../../MyServices/api/URLApi'
import { string } from 'prop-types'
const { RangePicker } = DatePicker;

const dateFormat = 'MM-DD-YYYY';


const ReportMutasiPromosiPegawai = ({ match }) => {
    const [dataPegawai, setDataPegawai] = useState([])
    const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
    const [type, setType] = useState("")
    const [filter, setFilter] = useState({ dateFrom: '', dateTo: '', typeMutation: '' }, 'filter')
    const { register, handleSubmit, watch } = useForm();

    const getData = async () => {
        let { data } = await getFilterMutation(query())
        setDataPegawai(data)
    }

    const query = () => {
        let paramsTypeMutation = filter.typeMutation !== "" ? `&typeMutation=${filter.typeMutation.replace('%20', " ")}` : ``
        if (filter.typeMutation === "semua") paramsTypeMutation = ``
        return `?dateFrom=${filter.dateFrom}&dateTo=${filter.dateTo}${paramsTypeMutation}`
    }

    const getDataTipeMutasi = async () => {
        let { data } = await getTypeMutation()
        setDataTipeMutasi(data)
    }

    const saveFilter = () => {
        getData()
    }

    useEffect(() => {
        getDataTipeMutasi()
    }, [])

    function onChange(value, dateString) {
        setFilter({ ...filter, dateFrom: dateString[0], dateTo: dateString[1] })
    }

    const chooseTypeValue = (e) => {
        let typeMutation
        const type = e.target.value
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
        } else if (type == "semua") {
            typeMutation = 'semua'
        }
        setFilter({ ...filter, dateFrom: filter.dateFrom, dateTo: filter.dateTo, typeMutation: `${typeMutation}` })
    }

    const downloadFile = async () => {
        downloadExcel()
    }

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
                                    <Label>Pilih Tanggal</Label><br />
                                    <RangePicker
                                        format={dateFormat}
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="ccmonth">Pilih Tipe Mutasi</Label>
                                    <Input type="select" name="typeMutation" innerRef={register({ required: true })} onChange={(e) => chooseTypeValue(e)}>
                                        <option value="">Pilih Tipe Mutasi</option>
                                        <option value="semua">Semua Jenis Mutasi</option>
                                        {dataTipeMutasi.map(value => (
                                            <option value={`${value.id}`}>{value.name}</option>
                                        ))}
                                    </Input>
                                </div>
                                <div className="mt-29 ml-30">
                                    <Button color="primary" onClick={() => saveFilter()}>Filter</Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Card>
                <CardHeader>
                    <i className="fa fa-users"></i> Daftar Seluruh Karyawan
                    <a target="_blank" href={`${urlBackend}mutation/report/${query()}`}>
                        <button style={btnDownloadFile}> <i class="fa fa-file"></i>&nbsp;Download Report Mutasi</button>
                    </a>
                </CardHeader>
                <CardBody>
                    <ReportMutasiPromosiTable data={dataPegawai} />
                </CardBody>
            </Card>
        </div>
    )
}


const btnDownloadFile = {
    float: "right",
    height: "40px",
    backgroundColor: "#20a8d8",
    color: "white",
    textAlign: "center",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "8px"
}



export default ReportMutasiPromosiPegawai
