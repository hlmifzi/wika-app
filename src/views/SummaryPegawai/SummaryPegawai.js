import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable';
import { getDataSummaryOverview, getDataSummary, downloadExcel } from './endpoint/SummaryOverview';



const SummaryPegawai = () => {
  const [dataTable, setdataTable] = useState([], "dataTable")
  const [dataOverview, setDataOverview] = useState([], "dataOverview")
  const [dataSummary, setDataSummary] = useState([], "dataSummary")

  const getDataOverview = async () => {
    let { data } = await getDataSummaryOverview()
    if (!data) return
    setdataTable(data)
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

  const getSummary = async () => {
    let { data } = await getDataSummary()
    if (!data) return
    setDataSummary(data)
  }

  const downloadFile = async () => {
    downloadExcel()
  }


  useEffect(() => {
    getDataOverview()
    getSummary()
  }, [])

  return (
    <div className="animated fadeIn">
      <button className="float-r" style={btnDownloadFile} onClick={() => downloadFile()}><i class="fa fa-file"></i>&nbsp;Export Summary Pegawai</button>
      {dataTable.length > 0 && dataTable.map(data =>
        (
          <>
            {dataSummary.length > 0 &&
              <Row>
                {
                  dataSummary.map(value => {
                    return value.divisi == data.divisi ? value.data.map(data => <HeaderComponent statusPegawai={data} />) : null
                  })
                }
              </Row>
            }
            <Row>
              <Col xl={12}>
                <Card style={{ height: "500px" }}>
                  <CardHeader>POSISI PEGAWAI KANTOR {data.divisi.toUpperCase()}
                  </CardHeader>
                  <CardBody style={{ maxHeight: "400px", overflow: "auto" }}>
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

const HeaderComponent = ({ statusPegawai }) => {

  let iconStyle = {
    height: "36px",
    width: "36px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "12px",
    top: "12px",
    background: "rgb(24, 144, 255)"
  }

  return (
    <Col xl={2}>
      <Card style={{ minHeight: "80px", maxWidth: "200px", position: "relative" }}>
        <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
          Total Pegawai
      </p>
        <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
          {statusPegawai.employeeStatus}
        </p>
        <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
          {statusPegawai.qty}
        </p>
        <span style={iconStyle}>
          <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
        </span>
      </Card>
    </Col>
  )
}
export default SummaryPegawai;
