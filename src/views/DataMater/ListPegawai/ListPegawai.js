import React, { useEffect } from 'react';
import { useState } from 'reinspect'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from '../../../MyComponent/table/StandardTable'
import { getDataFilterPegawai } from './endpoint/ListPegawaiEndpoint'


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];


const ListPegawai = () => {
  const [dataPegawai, setDataPegawai] = useState([], 'dataPegawai')
  const [pagination, setPagination] = useState([], 'pagination')

  const getData = async () => {
    let { data } = await getDataFilterPegawai()

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
              <i className="fa fa-users"></i> Daftar Seluruh Karyawan
            </CardHeader>
            <CardBody>
              <StandardTable data={dataPegawai} isPagination={false} columns={columns} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default ListPegawai;
