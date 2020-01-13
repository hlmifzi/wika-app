import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'

const ListPegawai = () => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPegawai')

  const getData = async () => {
    let { data } = await getDataFilterPegawai()
    setDataPegawai(data)
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
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan
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
