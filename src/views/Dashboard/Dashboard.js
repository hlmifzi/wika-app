import React, { useEffect } from 'react';
import { useReducer, useState } from "reinspect"
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
  getDataAssessment2EndPoint,
  getDataMasaKerjaEndPoint,
  getDataUnitKerjaEndPoint,
  getDataMBTIEndPoint
} from './endpoint/DasboardEndpoint'
import { initialState, reducer } from "./DashboardReducer";

import Widget04 from '../Widgets/Widget04';

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState, 'Analytic');
  const [isLoadingDataKomposisiPegawai, setIsLoadingDataKomposisiPegawai] = useState(true)
  const [isLoadingdataPendidikan, setIsLoadingDataPendidikan] = useState(true)
  const [isLoadingdataKategoriProyek, setIsLoadingdatDKategoriProyek] = useState(true)
  const [isLoadingdataBODGroup, DetIsLoadingdataBODGroup] = useState(true)
  const [isLoadingdataAssessment, seDIsLoadingdataAssessment] = useState(true)
  const [isLoadingdataAssessment2, setIsLoadingDataAssessment2] = useState(true)
  const [isLoadingdataMasaKerja, setIsLoadingDataMasaKerja] = useState(true)
  const [isLoadingdataUnitKerja, setIsLoadingDataUnitKerja] = useState(true)
  const [isLoadingdataMBTI, setIsLoadingMBTI] = useState(true)

  const getDataStatistik = async () => {
    let { data } = await getDataStatistikEndPoint()
    dispatch({ type: "get-list", payload: data });
  }
  const getDataKomposisiPegawai = async () => {
    setIsLoadingDataKomposisiPegawai(false)
  }
  const getDataPendidikan = async () => {
    setIsLoadingDataPendidikan(false)
  }
  const getDataKategoriProyek = async () => {
    setIsLoadingdatDKategoriProyek(false)
  }
  const getDataBODGroup = async () => {
    DetIsLoadingdataBODGroup(false)
  }
  const getDataAssessment = async () => {
    seDIsLoadingdataAssessment(false)
  }
  const getDataAssessment2 = async () => {
    setIsLoadingDataAssessment2(false)
  }
  const getDataMasaKerja = async () => {
    let { data } = await getDataMasaKerjaEndPoint()
    // dispatch({ type: "get-list-dataMasaKerja", payload: data });
    setIsLoadingDataMasaKerja(false)
  }
  const getDataUnitKerja = async () => {
    let { data } = await getDataUnitKerjaEndPoint()
    // dispatch({ type: "get-list-dataUnitKerja", payload: data });
    setIsLoadingDataUnitKerja(false)
  }
  const getDataMBTI = async () => {
    let { data } = await getDataMBTIEndPoint()
    // dispatch({ type: "get-list-dataMBTI", payload: data });
    setIsLoadingMBTI(false)
  }

  const getAll = () => {
    getDataStatistik()
    getDataKomposisiPegawai()
    getDataPendidikan()
    getDataKategoriProyek()
    getDataBODGroup()
    getDataAssessment()
    getDataAssessment2()
    getDataMasaKerja()
    getDataUnitKerja()
    getDataMBTI()
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
              <Widget04 icon="icon-people" color="info" header={state.pegawai.qty} invert>Jumlah Pegawai</Widget04>
            </Col>
            <Col sm="12" md="6">
              <Widget04 icon="icon-user-follow" color="success" header={state.proyek.qty} invert>Jumlah Proyek</Widget04>
            </Col>
          </Row>
        </Col>
        <BarChart colSm={5} colMd={5} title="Masa Kerja" data={state.dataMasaKerja} isLoading={isLoadingdataMasaKerja} />
        <BarChart colSm={7} colMd={7} title="Myers-Briggs Type Indicator (MBTI) " data={state.dataMBTI} isLoading={isLoadingdataMBTI} />
        <BarChart colSm={12} colMd={12} title="Unit Kerja" data={state.dataUnitKerja} isLoading={isLoadingdataUnitKerja} />

        <PieChart title="Komposisi Pegawai" data={state.dataKomposisiPegawai} />
        <PieChart title="Pendidikan" data={state.dataPendidikan} />
        <PieChart title="Kategori Proyek" data={state.dataKategoriProyek} />
        <PieChart title="BOD Group" data={state.dataBODGroup} />
        <PieChart title="Assessment BOD Group 1" data={state.dataAssessment} />
        <PieChart title="Assessment BOD Group 2" data={state.dataAssessment2} />
      </Row>
    </div >
  );
}

export default Dashboard;
