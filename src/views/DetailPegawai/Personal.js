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
                            <b> <Label htmlFor="nip">Nomor Induk Pegawai :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.nip || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="namaPegawai">Nama Pegawai :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.name || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="tempatLahir">Tempat Lahir :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.birthPlace || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b> <Label htmlFor="tglLahir">Tanggal Lahir :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.birthDate || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="agama">Agama :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.religion || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                </Col>
                <Col xs="12" md="6">
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="jenisKelamin">Jenis Kelamin :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.gender === 'L'
                                ? 'Laki - laki'
                                : data.gender === 'P'
                                    ? 'Perempuan' :
                                    'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="golonganDarah">Golongan Darah :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.bloodGroup || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="statusPernikahan">Status Pernikahan :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.maritalStatus || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="namaIbuKandung">Nama Ibu Kandung :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.biologicalMother || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="12" xs="12">
                            <b><Label htmlFor="emailPersonal">Email Personal :</Label></b>
                        </Col>
                        <Col xs="12" md="12">
                            {data.personalEmail || 'Tidak Ada Data'}
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <hr />
            <Row className="card-custom">
                <Col md="12" xs="12">
                    <b><Label style={{ fontSize: '1.2em' }}>Social Number</Label></b>
                </Col>
                <Col xs="12" md="6">
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <b><Label htmlFor="noKtp">No KTP :</Label></b>
                            </Col>
                            <Col xs="12" md="12">
                                {data.ktp || 'Tidak ada data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <b> <Label htmlFor="noNpwp">No NPWP :</Label></b>
                            </Col>
                            <Col xs="12" md="12">
                                {data.npwp || 'Tidak Ada Data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <b> <Label htmlFor="noJamsostek">No Jamsostek :</Label></b>
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
                                <b><Label htmlFor="noBpjsKesehatan">No BPJS Kesehatan :</Label></b>
                            </Col>
                            <Col xs="12" md="12">
                                {data.bpjsKesehatan || "Tidak Ada Data"}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <b><Label htmlFor="manulifeAsuransi">Manulife Asuransi :</Label></b>
                            </Col>
                            <Col xs="12" md="12">
                                {(data.userManulifes && data.userManulifes[0]) ? data.userManulifes[0].customerCode : 'Tidak Ada Data'}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="12" xs="12">
                                <b><Label htmlFor="manulifeNoPeserta">Manulife No Peserta :</Label></b>
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
                    <Col md="12" xs="12">
                        <b><Label style={{ fontSize: '1.2em' }}>Education</Label></b>
                    </Col>
                    <Col md="6" xs="12">
                        <Col xs="12" md="12">
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <b> <Label htmlFor="bidang">Bidang :</Label></b>
                                </Col>
                                <Col xs="12" md="12">
                                    {data.field ? data.field : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <b><Label htmlFor="strata">Strata :</Label></b>
                                </Col>
                                <Col xs="12" md="12">
                                    {(data.userEducations && data.userEducations[0]) ? data.userEducations[0].strata : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <b><Label htmlFor="jurusan">Jurusan :</Label></b>
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
                                    <b><Label htmlFor="mbti">MBTI :</Label></b>
                                </Col>
                                <Col xs="12" md="12">
                                    {data.mbti ? data.mbti : "Tidak Ada Data"}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="12" xs="12">
                                    <b><Label htmlFor="kategoriTalent">Kategori Talent :</Label></b>
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