

import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row, Modal, ModalBody } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'
import { getDataFilterPegawai, getDataFilterDashboard, uploadExcel, downloadExcel, downloadExcelTemplate } from './endpoint/ListPegawaiEndpoint'
import NotifSwal from '../../../MyComponent/notification/Swal'
import { urlBackend } from '../../../MyServices/api/URLApi'

const ListPegawai = ({ match }) => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPegawai')
  const [dataJabatan, setDataJabatan] = useState([], 'jabatan')
  const [dataBodGroup, setDataBodGroup] = useState([], 'bodGroup')
  const [filter, setFilter] = useState({ type: '', field: '' }, 'filter')
  const [objectScheme, setObjectScheme] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const getData = async () => {
    let datas;
    if (match.params.type) {
      let { data } = await getDataFilterDashboard(match.params)
      if (!data) return
      let type = getType(match.params.type)
      setFilter({ type: type, field: match.params.field })
      if (match.params.type === 'durationOnOffice') setFilter({ type: type, field: `${match.params.field} - ${match.params.field2} tahun` })
      datas = data
    } else {
      let { data } = await getDataFilterPegawai()
      if (!data) return
      datas = data
    }
    setDataPegawai(datas)
  }

  const btnUploadFile = {
    float: "right",
    height: "40px",
    backgroundColor: "#20a8d8",
    color: "white",
    textAlign: "center",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer"
  }

  const btnSubmit = {
    height: "40px",
    backgroundColor: selectedFile ? "green" : "grey",
    color: "white",
    textAlign: "center",
    padding: "8px",
    borderRadius: "4px",
    position: "absolute",
    right: "14px",
    bottom: "14px",
    cursor: selectedFile ? "pointer" : "not-allowed"
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

  const importFile = async () => {
    let excel = new FormData();
    excel.append('attachment', selectedFile)
    const { code } = await uploadExcel(excel)
    if (code === 200) {
      NotifSwal.successSubmit("Input has been submitted")
      setShowModal(!showModal)
    } else {
      NotifSwal.failed("Gagal impor data user")
    }


  }

  const selectFile = (file) => {
    setSelectedFile(file[0])
  }

  const downloadFileTemplate = async () => {
    downloadExcelTemplate()
  }
  const downloadFile = async () => {
    downloadExcel()
  }

  const modalStyle = {
    height: "200px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "14px"
  }

  const selectedFileStyle = {
    width: "300px",
    marginLeft: "16px",
    color: "grey",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }


  useEffect(() => {
    setFilter({ type: '', field: '' })
    getData()
  }, [match.params.typech, match.params.field])

  useEffect(() => {
    setSelectedFile(null)
  }, [showModal])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
              <ModalBody style={modalStyle}>
                <h2>Import User</h2>
                <h6>Select file to import user</h6>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="file" id="input" onChange={(e) => selectFile(e.target.files)} style={{ float: "right", display: "none" }} />
                  <label htmlFor="input" style={btnUploadFile}>Choose File</label>
                  {selectedFile && <p style={selectedFileStyle}>{selectedFile.name}</p>}
                </div>
                <button style={btnSubmit} onClick={() => importFile()} disabled={!selectedFile}>Submit</button>
              </ModalBody>
            </Modal>
            <CardHeader>
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan {`${filter.type} ${filter.field}`}
              <button style={btnUploadFile} onClick={() => setShowModal(true)}>Import User</button>
              <a href={`${urlBackend}user/report/profile`}>
                <button style={btnDownloadFile} ><i class="fa fa-file"></i>&nbsp;Download Profile Pegawai</button>
              </a>
              <a href={`${urlBackend}user/report/position`}>
                <button style={btnDownloadFile}><i class="fa fa-file"></i>&nbsp; Download Posisi Pegawai</button><br />
              </a>
            </CardHeader>
            <CardBody>
              <StandardTable data={dataPegawai} isPagination={true} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}


const getType = (type) => {
  let res = ''

  if (type === 'employeeComposition') {
    res = 'Status:'
  } else if (type === 'durationOnOffice') {
    res = 'Masa Kerja:'
  } else if (type === 'educations') {
    res = 'Pendidikan:'
  } else if (type === 'bodGroup') {
    res = 'BOD Group:'
  } else if (type === 'projectCategory') {
    res = 'Kategori Projek:'
  } else if (type === 'assesment') {
    res = 'Assessment:'
  } else if (type === 'mbti') {
    res = 'MBTI:'
  }

  return res
}


export default ListPegawai;
