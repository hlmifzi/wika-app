import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable';
import DonutChart from './views/DonutChart';
import { getDataSummaryOverview } from './endpoint/SummaryOverview';



const SummaryPegawai = () => {
  const [dataTable, setdataTable] = useState([])
  const [dataOverview, setDataOverview] = useState([])

  const getData = async () => {
    let {data} = await getDataSummaryOverview()
    setdataTable(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <HeaderComponent statusPegawai="Organik"/>
        <HeaderComponent statusPegawai="Terampil"/>
        <HeaderComponent statusPegawai="Outsource"/>
        <HeaderComponent statusPegawai="MT-FG"/>
        <HeaderComponent statusPegawai="MT-JA"/>
      </Row>
      { dataTable.length > 0 && dataTable.map(data =>
        (
        <Row>
          <Col xl={4}>
            <Card>
              <CardHeader>STATUS PEGAWAI KANTOR {data.divisi.toUpperCase()}
            </CardHeader>
              <DonutChart 
                data={data.data}
              />
            </Card>
          </Col>
          <Col xl={8}>
            <Card style={{ height: "446px" }}>
              <CardHeader>POSISI PEGAWAI KANTOR {data.divisi.toUpperCase()}
          </CardHeader>
              <CardBody style={{ maxHeight: "400px" }}>
                <StandardTable data={data.data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        )
      )}
    </div>
  )
}

const HeaderComponent = ({statusPegawai}) => {
  return (
    <Col xl={2}>
      <Card style={{ minHeight: "80px", maxWidth: "200px" }}>
        <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
          Total Pegawai
      </p>
        <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
          {statusPegawai}
      </p>
        <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
          201
      </p>
      <i className="fa fa-users"></i>
      </Card>
    </Col>
  )
}
export default SummaryPegawai;
