

import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'
import { getDataFilterPegawai, getDataFilterDashboard, uploadExcel } from './endpoint/ListPegawaiEndpoint'
import readXlsxFile from 'read-excel-file'


const ListPegawai = ({ match }) => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPegawai')
  const [dataJabatan, setDataJabatan] = useState([], 'jabatan')
  const [dataBodGroup, setDataBodGroup] = useState([], 'bodGroup')
  const [filter, setFilter] = useState({ type: '', field: '' }, 'filter')
  const [objectScheme, setObjectScheme] = useState({})

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

  const importFile = async (file) => {
    readXlsxFile(file[0]).then( async (rows) => {
      let body = []
      let objectName = []
      let test = {}
      rows[1].map(val => objectName.push(val.toString()))
      rows.slice(2).map((val) => {
        val.map((objectValue, index) => {
          test[objectName[index]] = objectValue
        })
        body.push(test)
        test = {}
      })
      let { data } = await uploadExcel(body)
    })
  }


  useEffect(() => {
    setFilter({ type: '', field: '' })
    getData()
  }, [match.params.typech, match.params.field])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan {`${filter.type} ${filter.field}`}
              <input type="file" id="input" onChange={(e) => importFile(e.target.files)} style={{float:"right"}}/>
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
