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
                            {data.nip}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="namaPegawai">Nama Pegawai :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.name}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="tempatLahir">Tempat Lahir :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.birthPlace}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="tglLahir">Tanggal Lahir :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.birthDate}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="agama">Agama :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.religion}
                        </Col>
                    </FormGroup>
                </Col>
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="jenisKelamin">Jenis Kelamin :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.gender === 'L' ? 'Laki - laki' : 'Perempuan'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="golonganDarah">Golongan Darah :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.bloodGroup || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="statusPernikahan">Status Pernikahan :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.maritalStatus}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="namaIbuKandung">Nama Ibu Kandung :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.biologicalMother}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <Label htmlFor="emailPersonal">Email Personal :</Label>
                        </Col>
                        <Col xs="12" md="12">
                            {data.personalEmail}
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
                                {data.ktp || 'Tidak ada data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noNpwp">No NPWP :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                {data.npwp || 'Tidak Ada Data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="noJamsostek">No Jamsostek :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                {data.jamsostek || 'Tidak Ada Data'}
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
                                {data.bpjsKesehatan || "Tidak Ada Data"}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="manulifeAsuransi">Manulife Asuransi :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                {(data.userManulifes && data.userManulifes[0]) ? data.userManulifes[0].customerCode : 'Tidak Ada Data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <Label htmlFor="manulifeNoPeserta">Manulife No Peserta :</Label>
                            </Col>
                            <Col xs="12" md="12">
                                {(data.userManulifes && data.userManulifes[0]) ? data.userManulifes[0].participantNumber : 'Tidak Ada Data'}
                            </Col>
                        </FormGroup>
                    </Col>
                </Col>
            </Row>
            <hr />
            {
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
                                    {data.field ? data.field : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <Label htmlFor="strata">Strata :</Label>
                                </Col>
                                <Col xs="12" md="12">
                                    {(data.userEducations && data.userEducations[0]) ? data.userEducations[0].strata : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <Label htmlFor="jurusan">Jurusan :</Label>
                                </Col>
                                <Col xs="12" md="12">
                                    {(data.userEducations && data.userEducations[0]) ? data.userEducations[0].majors : "Tidak Ada Data"}
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
                                    {data.mbti ? data.mbti : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <Label htmlFor="kategoriTalent">Kategori Talent :</Label>
                                </Col>
                                <Col xs="12" md="12">
                                    {data.categoryTalent ? data.categoryTalent : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                        </Col>
                    </Col>
                </Row>}
        </CardWithCustom>
    )
}