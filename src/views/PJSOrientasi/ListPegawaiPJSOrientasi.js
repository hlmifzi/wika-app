import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'
import { getDataPJSOrientasi } from './endpoint/PJSOrientasiEndpoint'


const ListPegawai = () => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPJSOrientasi')

  const getData = async () => {
    let { data } = await getDataPJSOrientasi()
    if (!data) return
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
