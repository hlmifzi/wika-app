

import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from './views/ListPegawaiTable'
import { getDataFilterPegawai,getDataFilterDashboard } from './endpoint/ListPegawaiEndpoint'


const ListPegawai = ({match}) => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPegawai')
  const [dataFungsi, setDataFungsi] = useState([], 'fungsi')
  const [dataJabatan, setDataJabatan] = useState([], 'jabatan')
  const [dataBodGroup, setDataBodGroup] = useState([], 'bodGroup')
  const [filter, setFilter] = useState({type:'',field:''}, 'filter')

  const getData = async () => {
    let datas;
    if(match.params.type) {
      let {data}  = await getDataFilterDashboard(match.params)

      let type = getType(match.params.type) 
      setFilter({type:type, field:match.params.field})
      datas=data
    } else {
      let { data } = await getDataFilterPegawai()
      datas=data
    }

    setDataPegawai(datas)
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
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan {`${filter.type} ${filter.field}`}
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

  if(type === 'employeeComposition'){
    res = 'Status:'
  }else if(type === 'durationOnOffice'){
    res = 'Masa Kerja:'
  }else if(type === 'educations'){
    res = 'Pendidikan:'
  }else if(type === 'bodGroup'){
    res = 'BOD Group:'
  }else if(type === 'projectCategory'){
    res = 'Kategori Projek:'
  }else if(type === 'assesment'){
    res = 'Assessment:'
  }else if(type === 'mbti'){
    res = 'MBTI:'
  }

  return res
}


export default ListPegawai;
