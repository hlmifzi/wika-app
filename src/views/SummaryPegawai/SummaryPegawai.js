import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Badge, Label } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable';
import DonutChart from './views/DonutChart';
import Widget02 from '../Widgets/Widget02';





const SummaryPegawai = () => {
  const [dataPegawai, setDataPegawai] = useState([])

  const getData = () => {
    setDataPegawai([
      {
        key: '1',
        nip: 2019012,
        name: 'cohn Brown',
        fieldFunction: 'ENGINEERING',
        titleName: 'AHLI UTAMA 1',
        dateStartPJS: 'LRT',
        remainingPJS: '5 tahun 2 bulan',
      },
      {
        key: '2',
        nip: 2019012,
        name: 'cohn Brown',
        fieldFunction: 'ENGINEERING',
        titleName: 'AHLI UTAMA 1',
        dateStartPJS: 'LRT',
        remainingPJS: '4 tahun 2 bulan',
      },
    ])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col md="12" xs="12">
          <Label>Kategori Proyek Yang Pernah Ditangani : <Badge color="danger">18 Proyek</Badge></Label>
        </Col>
        <Col xs="12" sm="6" lg="2">
          <Widget02 header="3" mainText="Proyek Mega" icon="fa fa-angle-double-up" color="primary" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header="7" mainText="Proyek Besar" icon="fa fa-angle-up" color="info" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header="2" mainText="Proyek Menengah" icon="fa fa-arrows-h" color="warning" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header="6" mainText="Proyek Kecil" icon="fa fa-angle-down" color="primary" variant="1" />
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget02 header="6" mainText="Proyek Kecil" icon="fa fa-angle-down" color="primary" variant="1" />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Card>
            <CardHeader>STATUS PEGAWAI KANTOR DEPARTEMEN
          </CardHeader>
            <DonutChart />
          </Card>
        </Col>
        <Col xl={8}>
          <Card style={{ height: "446px" }}>
            <CardHeader>POSISI PEGAWAI KANTOR DEPARTEMEN
        </CardHeader>
            <CardBody style={{ maxHeight: "400px" }}>
              <StandardTable data={dataPegawai} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default SummaryPegawai;
