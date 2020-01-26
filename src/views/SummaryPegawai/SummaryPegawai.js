import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable';
import DonutChart from './views/DonutChart';
import { getDataSummaryOverview, getDataSummary } from './endpoint/SummaryOverview';



const SummaryPegawai = () => {
  const [dataTable, setdataTable] = useState([])
  const [dataOverview, setDataOverview] = useState([])
  const [dataSummary, setDataSummary] = useState([])

  const getDataOverview = async () => {
    let {data} = await getDataSummaryOverview()
    setdataTable(data)
  }

  const getSummary = async () => {
    let {data} = await getDataSummary()
    setDataSummary(data.data)
  }

  useEffect(() => {
    getDataOverview()
    getSummary()
  }, [])

  return (
    <div className="animated fadeIn">
      { dataTable.length > 0 && dataTable.map(data =>
        (
        <>  
          <Row>
            {
              dataSummary.map(value => 
                <HeaderComponent statusPegawai={value}/>
              )
            }
          </Row>
          <Row>
            {/* <Col xl={4}>
              <Card style={{ maxHeight: "00px"}}>
                <CardHeader>STATUS PEGAWAI KANTOR {data.divisi.toUpperCase()}
              </CardHeader>
                <DonutChart 
                  data={data.data}
                />
              </Card>
            </Col> */}
            <Col xl={12}>
              <Card style={{ height: "500px" }}>
                <CardHeader>POSISI PEGAWAI KANTOR {data.divisi.toUpperCase()}
            </CardHeader>
                <CardBody style={{ maxHeight: "400px", overflow: "auto"}}>
                  <StandardTable data={data.data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
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
          {statusPegawai.employeeStatus}
      </p>
        <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
          {statusPegawai.qty}
      </p>
      <i className="fa fa-users"></i>
      </Card>
    </Col>
  )
}
export default SummaryPegawai;
