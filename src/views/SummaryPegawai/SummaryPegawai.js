import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable';
import DonutChart from './views/DonutChart';



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
        <Col xl={2}>
          <Card style={{minHeight:"80px", maxWidth:"200px"}}>
            <p style={{fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey"}}>
              Total Pegawai
            </p>
            <p style={{fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey"}}>
              Status Organik
            </p>
            <p style={{fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black"}}>
              201
            </p>
          </Card>
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
        <Card style={{height: "446px"}}>
          <CardHeader>POSISI PEGAWAI KANTOR DEPARTEMEN
        </CardHeader>
          <CardBody style={{maxHeight:"400px"}}>
            <StandardTable data={dataPegawai} />
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
  )
}
export default SummaryPegawai;
