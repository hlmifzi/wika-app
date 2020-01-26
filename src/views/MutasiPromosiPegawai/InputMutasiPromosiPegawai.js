import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { DatePicker } from 'antd';
import moment from 'moment';
import WidgetCustom from '../Widgets/WidgetCustom'
import { SideProfile } from '../DetailPegawai/SideProfile'
import  { 
  getTypeMutation, 
  getKindMutation,
  storeMutation
} 
from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';
import { getDataPegawai } from '../DetailPegawai/endpoint/DetailPegawaiEndpoint'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'


const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = ({ match }) => {
  const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
  const [dataJenisMutasi, setDataJenisMutasi] = useState([], 'dataJenisMutasi')
  const [dataDetailpegawai, setDataDetailpegawai] = useState({ workUnit: {} }, "dataDetailpegawai");
  const [allPegawai, setAllPegawai] = useState([], "dataPegawai");

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  const tipeMutasiTerpilih = watch("typeMutationId");

  const getDataTipeMutasi = async() => {
    let { data } = await getTypeMutation()
    setDataTipeMutasi(data)
  }

  const getDataJenisMutasi = async() => {
    let { data } = await getKindMutation()
    setDataJenisMutasi(data)
  }

  const getDataDetailPegawai = async() => {
    let { data } = await getDataPegawai(match.params.id)
    setDataDetailpegawai(data)
  }

  const getAllPegawai = async() => {
    let { data } = await getDataFilterPegawai()
    setAllPegawai(data)
  }

  useEffect(() => {
    getDataTipeMutasi()
    getDataJenisMutasi()
    getDataDetailPegawai()
    getAllPegawai()
  }, [])

    return (
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit(async (data) => await storeMutation(data))}>
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i> Input Mutasi Promosi Pegawai
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tipe</Label>
                                        <Input type="select" name="typeMutationId" id="product" required innerRef={register({ required: true })}>
                                        <option value=""> Pilih Tipe Mutasi</option>
                                          {dataTipeMutasi.map(value => (
                                            <option value={`${value.id}`}>{value.name}</option>
                                          ))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="8">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Pilih Pegawai</Label>
                                        <Input type="select" name="userId" id="product" required innerRef={register({ required: true })}>
                                            <option value=""> Pilih Pegawai</option>
                                            {allPegawai.map(value => (
                                            <option value={`${value.id}`}>{value.name}</option>
                                          ))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3}>
                    <WidgetCustom
                        dataBox={() => ({ variant: 'twitter' })}
                        name={`Luthfi`}
                        employeeStatus={`Organik`}
                    />
                    <SideProfile data={dataDetailpegawai} />>
                </Col>
                <Col xl={9}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i>                                           
                                {dataTipeMutasi.map(value => (
                                    (value.id == tipeMutasiTerpilih) && <p>{value.name}</p>
                                ))}
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                        <Input type="select" name="kindMutationId" id="tenantFrom" required innerRef={register({ required: true })}>
                                        <option value=""> Pilih Jenis Mutasi</option>
                                          {dataJenisMutasi.map(value => (
                                            (value.typeMutationId == tipeMutasiTerpilih) && <option value={`${value.id}`}>{value.name}</option>
                                          ))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tanggal</Label><br />
                                        <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Unit Kerja</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Pilih  Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jabatan</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Posisi</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Grade</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>

                {/* <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i> Promosi Jabatan
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jenis Mutasi</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Pilih Jenis mutasi</option>
                                            <option value="0"> Utama</option>
                                            <option value="0"> Rangkapan</option>
                                            <option value="0"> Utama (PJS)</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tanggal</Label><br />
                                        <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Unit Kerja</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Pilih  Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Jabatan</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Posisi</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Fungsi Bidang</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Grade</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0"> Choose Gudang</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>




                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i> Promosi Status
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tanggal</Label><br />
                                        <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Pilih Status</Label>
                                        <Input type="select" name="ccmonth" id="tenantFrom" >
                                            <option value="0">Pilih Status</option>
                                            <option value="0">Organik</option>
                                            <option value="0">Terampil</option>
                                            <option value="0">Manager Training</option>
                                            <option value="0">PKWT</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col>

                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-user"></i> Mutasi Non Aktif
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Tanggal Keluar</Label><br />
                                        <DatePicker className="col-md-12" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
                        </CardFooter>
                    </Card>
                </Col> */}


            </Row>
            </form>
        </div>
    )
}


export default InputMutasiPromosiPegawai
