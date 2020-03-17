import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from '../../MyComponent/table/FilterSearchSortTable'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'


const DataKaryawan = () => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataFilterPegawai')

  const getData = async () => {
    let { data } = await getDataFilterPegawai()
    if (!data) return
    setDataPegawai(data)
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
              <i className="fa fa-users"></i> Filter Pegawai
            </CardHeader>
            <CardBody>
              <StandardTable data={dataPegawai} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default DataKaryawan;
