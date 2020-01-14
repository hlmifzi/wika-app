import React, { useEffect } from 'react';
import { useState } from "reinspect"
import PieChart from './view/PieChart'
import BarChart from './view/BarChart'
import { Col, Row } from 'reactstrap';
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
    setDataStatistik(data)
  }
  const getDataKomposisiPegawai = async () => {
    let { data } = await getDataKomposisiPegawaiEndPoint()
    setDataKomposisiPegawai(data)
    setIsLoadingDataKomposisiPegawai(false)
  }
  const getDataPendidikan = async () => {
    let { data } = await getDataPendidikanEndPoint()
    setIsLoadingDataPendidikan(false)
    setDataPendidikan(data)
  }
  const getDataKategoriProyek = async () => {
    let { data } = await getDataDKategoriProyekEndPoint()
    setIsLoadingdatDKategoriProyek(false)
    setDataKategoriProyek(data)
  }
  const getDataBODGroup = async () => {
    let { data } = await getDataBODGroupEndPoint()
    DetIsLoadingdataBODGroup(false)
    setDataBODGroup(data)
  }
  const getDataMasaKerja = async () => {
    let { data } = await getDataMasaKerjaEndPoint()
    setDataMasaKerja(data)
    setIsLoadingDataMasaKerja(false)
  }
  const getDataDivisi = async () => {
    let { data } = await getDataUnitKerjaEndPoint()
    setDataUnitKerja(data)
    setIsLoadingDataUnitKerja(false)
  }
  const getDataMBTI = async () => {
    let { data } = await getDataMBTIEndPoint()
    setDataMBTI(data)
    setIsLoadingMBTI(false)
  }

  const getDataAssessment = async () => {
    let { data } = await getDataAssessmentEndPoint()
    console.log("TCL: getDataAssessment -> data", data)
    seDIsLoadingdataAssessment(false)
    setDataAssessment(data)
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
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Row>
            <Col sm="12" md="6">
              <Widget04 icon="icon-people" color="info" header={dataStatistik.pegawai.qty} invert>Jumlah Pegawai</Widget04>
            </Col>
            <Col sm="12" md="6">
              <Widget04 icon="icon-user-follow" color="success" header={dataStatistik.proyek.qty} invert>Jumlah Proyek</Widget04>
            </Col>
          </Row>
        </Col>
        <BarChart colSm={5} colMd={5} title="Masa Kerja" data={dataMasaKerja} isLoading={isLoadingdataMasaKerja} type="durationOnOffice"/>
        <BarChart colSm={7} colMd={7} title="Unit Kerja" data={dataUnitKerja} isLoading={isLoadingdataUnitKerja} type="divisi" />
        <BarChart colSm={12} colMd={12} title="Myers-Briggs Type Indicator (MBTI) " data={dataMBTI} isLoading={isLoadingdataMBTI} type="mbti" />

        <PieChart title="Komposisi Pegawai" data={dataKomposisiPegawai} isLoading={isLoadingDataKomposisiPegawai} type="employeeComposition" />
        <PieChart title="Pendidikan" data={dataPendidikan} isLoading={isLoadingdataPendidikan} type="educations"/>
        <PieChart title="Kategori Proyek" data={dataKategoriProyek} isLoading={isLoadingdataKategoriProyek} type="projectCategory" />
        <PieChart title="BOD Group" data={dataBODGroup} isLoading={isLoadingdataBODGroup} type="bodGroup" />
        {
          dataAssessment.map((v, i) =>{
            if(v.data.length > 0)return <PieChart key={i} title={`Assessment ${v.type}`} data={v.data} isLoading={isLoadingdataAssessment} />
          })
        }
      </Row>
    </div >
  );
}

export default Dashboard;
