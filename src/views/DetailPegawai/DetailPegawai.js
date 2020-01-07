import React from 'react'
import { Col, Row, Progress, ListGroup, ListGroupItem, Badge, FormGroup, Label, Input } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import PropTypes from 'prop-types'
import { CardWhiteComponent, CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'

const DetailPegawai = props => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                    </Widget03>
                </Col>
                <Col xs={12} sm={6} md={9}>
                    <CardWhiteComponent text="Penilaian">
                        <Col xs="12" md="12">
                            <FormGroup row>
                            <Col md="12">
                                <Label htmlFor="selectSm">Nama</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="number" id="name" placeholder="Nama Karyawan" onChange={(e) => this.setState({ nama: e.target.value })} required />
                            </Col>
                            </FormGroup>
                        </Col>
                        <Col xs="12" md="3">
                            <FormGroup row>
                            <Col md="12">
                                <Label htmlFor="selectSm">Masa jabatan</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="select" name="select" id="select">
                                <option value="0">Pilih</option>
                                <option value="1">Lebih Dari</option>
                                <option value="2">Kurang Dari</option>
                                <option value="3">Sama Dengan</option>
                                </Input>
                            </Col>
                            </FormGroup>
                        </Col>
                    </CardWhiteComponent>
                </Col>
            </Row>
        </div>
    )
}

DetailPegawai.propTypes = {

}

export default DetailPegawai
