import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'


const ListPegawai = () => {
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
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-users"></i> Reminder PJS Orientasi
          </CardHeader>
            <CardBody>
              <StandardTable data={dataPegawai} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default ListPegawai;
