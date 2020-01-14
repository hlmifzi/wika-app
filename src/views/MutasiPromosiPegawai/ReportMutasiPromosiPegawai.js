import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Input, Form, DatePicker } from 'antd'
import ReportMutasiPromosiTable from './views/ReportMutasiPromosiTable'

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';




const ReportMutasiPromosiPegawai = props => {
    const [dataPegawai, setDataPegawai] = useState([])

    const getData = () => {
        setDataPegawai([
            {
                key: '1',
                nip: 2019012,
                name: 'cohn Brown',
                statusPegawai: 'Organik',
                fieldFunction: 'ENGINEERING',
                titleName: 'AHLI UTAMA 1',
                bodGroup: 'LRT',
            },
            {
                key: '2',
                nip: 2019012,
                name: 'cohn Brown',
                statusPegawai: 'Organik',
                fieldFunction: 'ENGINEERING',
                titleName: 'AHLI UTAMA 1',
                bodGroup: 'LRT',
            },
        ])
    }

    useEffect(() => {
        getData()
    }, [])

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
                                <div className="col-sm-12 mb-form">
                                    Pilih Tanggal :
                                </div>
                                <div className="col-sm-4 mb-form">
                                    <RangePicker
                                        format={dateFormat}
                                    />
                                </div>
                            </div>
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
