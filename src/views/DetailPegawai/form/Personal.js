import React from 'react'
import { CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import { Col, Row, Badge, FormGroup, Label, Input } from 'reactstrap';

export const Personal = ({ data }) => {
    return (
        <CardWithCustom classHeader={"bg-primary text-white"} text="Basic Information">
            <Row className="card-custom">
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="nip">Nomor Induk Pegawai :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="number" id="nip" placeholder={data.nip} required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="namaPegawai">Nama Pegawai :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="namaPegawai" placeholder="Alex Azamdi" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="tempatLahir">Tempat Lahir :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="tempatLahir" placeholder="Jakarta" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="tglLahir">Tanggal Lahir :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="date" id="tglLahir" placeholder="" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="agama">Agama :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="agama" placeholder="Islam" required />
                        </Col>
                    </FormGroup>
                </Col>
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="jenisKelamin">Jenis Kelamin :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="jenisKelamin" placeholder="Laki Laki" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="golonganDarah">Golongan Darah :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="golonganDarah" placeholder="A" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="statusPernikahan">Status Pernikahan :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="statusPernikahan" placeholder="K2" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="namaIbuKandung">Nama Ibu Kandung :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="namaIbuKandung" placeholder="Endang Sukamti" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="emailPersonal">Email Personal :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            <Input type="text" id="emailPersonal" placeholder="alex.azamdi@yahoo.co.id" required />
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <hr />
            <Row className="card-custom">
                <Col md="12" xs="12">
                    <Label style={{ fontSize: '1.2em' }}>Social Number</Label>
                </Col>
                <Col xs="12" md="6">
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noKtp">No KTP :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="number" id="noKtp" placeholder="3175820475400323" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noNpwp">No NPWP :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="noNpwp" placeholder="19.523.223.6-643.000" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noJamsostek">No Jamsostek :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="noJamsostek" placeholder="04J80067814" required />
                            </Col>
                        </FormGroup>
                    </Col>
                </Col>
                <Col xs="12" md="6">
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noBpjsKesehatan">No BPJS Kesehatan :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="number" id="noBpjsKesehatan" placeholder="0001622593596" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="manulifeAsuransi">Manulife Asuransi :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="manulifeAsuransi" placeholder="" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="manulifeNoPeserta">Manulife No Peserta :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="manulifeNoPeserta" placeholder="04J80067814" required />
                            </Col>
                        </FormGroup>
                    </Col>
                </Col>
            </Row>
            <hr />
            <Row className="card-custom">
                <Col md="6" xs="12">
                    <Col md="12" xs="12">
                        <Label style={{ fontSize: '1.2em' }}>Education</Label>
                    </Col>
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="bidang">Bidang :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="number" id="bidang" placeholder="Teknik" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="strata">Strata :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="strata" placeholder="S2" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="jurusan">Jurusan :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="jurusan" placeholder="Teknik Sipil" required />
                            </Col>
                        </FormGroup>
                    </Col>
                </Col>
                <Col md="6" xs="12">
                    <Col md="12" xs="12">
                        <Label style={{ fontSize: '1.2em' }}>Talent</Label>
                    </Col>
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="mbti">MBTI :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="number" id="mbti" placeholder="ISFJ" required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="kategoriTalent">Kategori Talent :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                <Input type="text" id="kategoriTalent" placeholder="Workhouse" required />
                            </Col>
                        </FormGroup>
                    </Col>
                </Col>
            </Row>
        </CardWithCustom>
    )
}