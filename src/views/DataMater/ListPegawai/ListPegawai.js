

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

  const getData = async () => {
    let datas;
    if(match.params.type) {
      let {data}  = await getDataFilterDashboard(match.params)
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
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan
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
export default ListPegawai;
