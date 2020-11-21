import React from 'react'
import { CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import Widget02 from '../Widgets/Widget02';
import { Col, Row, Badge, FormGroup, Label, Input, Button } from 'reactstrap';

export const Job = ({ children, color, text }) => {
  return (
    <CardWithCustom classHeader={"bg-primary text-white"} text="Detail Information">
      <Row className="card-custom">
          <Col xs="12" md="6">
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="bodGroup">BOD Group :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="bodGroup" placeholder="Group ***" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="nmJbtn">Nama Jabatan :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="nmJbtn" placeholder="Staff" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="stsJbtn">Status Jabatan :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="stsJbtn" placeholder="Berjalan" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="tglMnjbtTtpkn">Tgl Menjabat Ditetapkan :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="date" id="tglMnjbtTtpkn" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="tglMnjbtBrlku">Tgl Menjabat Berlaku :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="date" id="tglMnjbtBrlku" required />
                  </Col>
              </FormGroup>
          </Col>
          <Col xs="12" md="6">
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="lmMnjbt">Lama Menjabat :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="lmMnjbt" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="MsKrj">Masa Kerja :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="MsKrj" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="prjkType">Projek JO/NON JO :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="prjkType" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="bsrnPrjk">Besaran Proyek :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="text" id="bsrnPrjk" required />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md="12" xs="12">
                      <Label htmlFor="jnsPrjkPrnhDtgni">Jenis Projek Pernah Ditangani :</Label>
                  </Col>
                  <Col xs="12" md="12">
                      <Input type="select" name="jnsPrjkPrnhDtgni" id="jnsPrjkPrnhDtgni" multiple>
                          <option value="1">Railway</option>
                          <option value="2">Tol</option>
                          <option value="3">Industrial Plant</option>
                      </Input>
                  </Col>
              </FormGroup>
          </Col>
      </Row>
      <hr />
      <Row className="card-custom">
          <Col md="12" xs="12">
              <Label>Kategori Proyek Yang Pernah Ditangani : <Badge color="danger">18 Proyek</Badge></Label> 
          </Col>
          <Col xs="12" sm="6" lg="3">
              <Widget02 header="3" mainText="Proyek Mega" icon="fa fa-angle-double-up" color="primary" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
              <Widget02 header="7" mainText="Proyek Besar" icon="fa fa-angle-up" color="info" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
              <Widget02 header="2" mainText="Proyek Menengah" icon="fa fa-arrows-h" color="warning" variant="1" />
          </Col>
          <Col xs="12" sm="6" lg="3">
              <Widget02 header="6" mainText="Proyek Kecil" icon="fa fa-angle-down" color="primary" variant="1" />
          </Col>
      </Row>
      <hr />
      <Row>
          <Col md="12" xs="12">
              <Label>Riwayat Fungsi :</Label>
          </Col>
          <Col>
              <p>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>PROD</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>DAN</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>QSHE</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>SWL</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>NMD</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand text mr-1 mb-1"><span>ERP</span></Button>
              </p>
          </Col>
      </Row>
  </CardWithCustom>
  )
}