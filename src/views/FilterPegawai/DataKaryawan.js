import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import StandardTable from '../../MyComponent/table/FilterSearchSortTable'


const DataKaryawan = () => {
  const [dataPegawai, setDataPegawai] = useState([])

  const getData = () => {
    setDataPegawai([
      {
        key: '1',
        nip: 2019012,
        name: 'cohn Brown',
        statusPegawai: 'Organik',
        fieldFunction: 'Manajer proyek (5 tahun)',
        masaKerja: '10 tahun 2 bulan',
        unitKerja: 'LRT',
        ek: 50,
        pk: 80,
        kukTheory: 90,
        kukPractice: 90,
        assesment: 'Tidak Disarankan',
      },
      {
        key: '2',
        nip: '12O12',
        nama: 'aim Green',
        statusPegawai: 'Terampil',
        fungsi: 'Manajer proyek',
        masaKerja: '10 tahun 2 bulan',
        unitKerja: 'MRT',
        ek: 30,
        pk: 80,
        kukTeori: 80,
        kukPraktek: 90,
        assessmenJobTarget: 'Disarankan',

      },
      {
        key: '3',
        nip: '12O10',
        nama: 'toe Black',
        statusPegawai: 'Outsource',
        fungsi: 32,
        masaKerja: 80,
        unitKerja: 90,
        ek: 70,
        pk: 80,
        kukTeori: 80,
        kukPraktek: 70,
        assessmenJobTarget: 'Disarankan dengan Syarat',
      },
      {
        key: '4',
        nip: '12O12',
        nama: 'gim Red',
        fungsi: 32,
        masaKerja: 'New York No. 1 Lake Park',
        unitKerja: 'New York No. 1 Lake Park',
        ek: 70,
        pk: 80,
        kukTeori: 90,
        kukPraktek: 80,
      },
    ])
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
