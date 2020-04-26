import React, { useEffect } from 'react';
import { useState } from "reinspect"
import PieChart from './view/PieChart'
import BarChart from './view/BarChart'
import { Col, Row, Card } from 'reactstrap';
import {
  getDataStatistikEndPoint,
  getDataKomposisiPegawaiEndPoint,
  getDataPendidikanEndPoint,
  getDataDKategoriProyekEndPoint,
  getDataBODGroupEndPoint,
  getDataAssessmentEndPoint,
  getDataMasaKerjaEndPoint,
  getDataUnitKerjaEndPoint,
  getDataMBTIEndPoint
} from './endpoint/DasboardEndpoint'
import { getDataSummaryOverview } from '../SummaryPegawai/endpoint/SummaryOverview';


import Widget04 from '../Widgets/Widget04';

const Dashboard = () => {
  const [isLoadingDataKomposisiPegawai, setIsLoadingDataKomposisiPegawai] = useState(true, 'isLoadingDataKomposisiPegawai')
  const [isLoadingdataPendidikan, setIsLoadingDataPendidikan] = useState(true, 'isLoadingdataPendidikan')
  const [isLoadingdataKategoriProyek, setIsLoadingdatDKategoriProyek] = useState(true, 'isLoadingdataKategoriProyek')
  const [isLoadingdataBODGroup, DetIsLoadingdataBODGroup] = useState(true, 'isLoadingdataBODGroup')
  const [isLoadingdataAssessment, seDIsLoadingdataAssessment] = useState(true, 'isLoadingdataAssessment')
  const [isLoadingdataMasaKerja, setIsLoadingDataMasaKerja] = useState(true, 'isLoadingdataMasaKerja')
  const [isLoadingdataUnitKerja, setIsLoadingDataUnitKerja] = useState(true, 'isLoadingdataUnitKerja')
  const [isLoadingdataMBTI, setIsLoadingMBTI] = useState(true, 'isLoadingdataMBTI')
  const [dataTablePerdepartemen, setdataTablePerdepartemen] = useState([], "dataTablePerdepartemen")

  const [dataStatistik, setDataStatistik] = useState({
    "pegawai": {
      "qty": 0
    },
    "proyek": {
      "qty": 0
    }
  })
  const [dataKomposisiPegawai, setDataKomposisiPegawai] = useState([], 'dataKomposisiPegawai')
  const [dataPendidikan, setDataPendidikan] = useState([], 'dataPendidikan')
  const [dataKategoriProyek, setDataKategoriProyek] = useState([], 'dataKategoriProyek')
  const [dataBODGroup, setDataBODGroup] = useState([], 'dataBODGroup')
  const [dataMasaKerja, setDataMasaKerja] = useState([], 'dataMasaKerja')
  const [dataUnitKerja, setDataUnitKerja] = useState([], 'dataUnitKerja')
  const [dataMBTI, setDataMBTI] = useState([], 'dataMBTI')
  const [dataAssessment, setDataAssessment] = useState([], 'dataAssessment')

  const getDataStatistik = async () => {
    let { data } = await getDataStatistikEndPoint()
    if (!data) return
    setDataStatistik(data)
  }
  const getDataKomposisiPegawai = async () => {
    let { data } = await getDataKomposisiPegawaiEndPoint()
    if (!data) return
    setDataKomposisiPegawai(data)
    setIsLoadingDataKomposisiPegawai(false)
  }
  const getDataPendidikan = async () => {
    let { data } = await getDataPendidikanEndPoint()
    if (!data) return
    setIsLoadingDataPendidikan(false)
    setDataPendidikan(data)
  }
  const getDataKategoriProyek = async () => {
    let { data } = await getDataDKategoriProyekEndPoint()
    if (!data) return
    setIsLoadingdatDKategoriProyek(false)
    setDataKategoriProyek(data)
  }
  const getDataBODGroup = async () => {
    let { data } = await getDataBODGroupEndPoint()
    if (!data) return
    DetIsLoadingdataBODGroup(false)
    setDataBODGroup(data)
  }
  const getDataMasaKerja = async () => {
    let { data } = await getDataMasaKerjaEndPoint()
    if (!data) return
    setDataMasaKerja(data)
    setIsLoadingDataMasaKerja(false)
  }
  const getDataDivisi = async () => {
    let { data } = await getDataUnitKerjaEndPoint()
    if (!data) return
    setDataUnitKerja(data)
    setIsLoadingDataUnitKerja(false)
  }
  const getDataMBTI = async () => {
    let { data } = await getDataMBTIEndPoint()
    if (!data) return
    setDataMBTI(data)
    setIsLoadingMBTI(false)
  }

  const getDataAssessment = async () => {
    let { data } = await getDataAssessmentEndPoint()
    if (!data) return
    seDIsLoadingdataAssessment(false)
    setDataAssessment(data)
  }
  const getDataOverview = async () => {
    let { data } = await getDataSummaryOverview()
    if (!data) return
    setdataTablePerdepartemen(data.perDepartement[0])
  }
  const getAll = () => {
    getDataStatistik()
    getDataMasaKerja()
    getDataMBTI()
    getDataDivisi()
    getDataKomposisiPegawai()
    getDataPendidikan()
    getDataKategoriProyek()
    getDataBODGroup()
    getDataAssessment()
    getDataOverview()
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col sm="12" md="12">
          <Widget04 icon="icon-people" color="info" header={dataStatistik.pegawai.qty} invert>Jumlah Pegawai</Widget04>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
</p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Organik
</p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen.Organik}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
</p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Terampil
</p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen.Terampil}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
</p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Outsource
</p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen.Outsource}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
</p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              MT-FG
</p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen[`MT-FG`]}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
            </p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              MT-JA
            </p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen[`MT-JA`]}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "2100%px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
        <Col xl={4}>
          <Card style={{ minHeight: "80px", maxWidth: "100%", position: "relative" }}>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              Total Pegawai
           </p>
            <p style={{ fontSize: "12px", padding: "0 12px", marginBottom: "0", fontWeight: 600, color: "darkgrey" }}>
              KKWT
            </p>
            <p style={{ fontSize: "16px", padding: "0 12px", marginBottom: "6px", fontWeight: 600, color: "black" }}>
              {dataTablePerdepartemen.KKWT}
            </p>
            <span style={iconStyle}>
              <i className="fa fa-users" style={{ fontSize: "20px", color: "white" }}></i>
            </span>
          </Card>
        </Col>
      </Row>

      <hr></hr>


      <Row>
        <BarChart colSm={5} colMd={5} title="Masa Kerja" data={dataMasaKerja} isLoading={isLoadingdataMasaKerja} type="durationOnOffice" />
        <BarChart colSm={7} colMd={7} title="Divisi" data={dataUnitKerja} isLoading={isLoadingdataUnitKerja} type="divisi" />
        <BarChart colSm={12} colMd={12} title="Myers-Briggs Type Indicator (MBTI) " data={dataMBTI} isLoading={isLoadingdataMBTI} type="mbti" />

        <PieChart title="Komposisi Pegawai" data={dataKomposisiPegawai} isLoading={isLoadingDataKomposisiPegawai} type="employeeComposition" />
        <PieChart title="Pendidikan" data={dataPendidikan} isLoading={isLoadingdataPendidikan} type="educations" />
        <PieChart title="Kategori Proyek" data={dataKategoriProyek} isLoading={isLoadingdataKategoriProyek} type="projectCategories" />
        <PieChart title="BOD Group" data={dataBODGroup} isLoading={isLoadingdataBODGroup} type="bodGroup" />
        {/* {
          dataAssessment.map((v, i) => {
            if (v.data.length > 0) return <PieChart key={i} title={`Assessment ${v.type}`} data={v.data} isLoading={isLoadingdataAssessment} />
          })
        } */}
      </Row>
    </div >
  );
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


const iconStyle = {
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

export default Dashboard;
