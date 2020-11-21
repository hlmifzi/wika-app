import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Col, Row, Badge, FormGroup, Label, Input, Button, TabContent, TabPane } from 'reactstrap';
import WidgetCustom from '../Widgets/WidgetCustom';
import 'font-awesome/css/font-awesome.min.css';
import './style/style.css';
import { Personal } from './Personal.js';
import { Job } from './Job.js';
import { Training } from './Training.js';
import { Performance } from './Performance.js';
import { SideProfile } from './SideProfile.js';
import { getDataPegawai } from './endpoint/DetailPegawaiEndpoint.js';
import { CardWhiteComponent } from '../../MyComponent/CardCustom/CardComponent'

const DetailPegawai = ({ match }) => {
    const [navbar1, setNavbar1] = useState(true, "nav1");
    const [navbar2, setNavbar2] = useState(false, "nav2");
    const [navbar3, setNavbar3] = useState(false, "nav3");
    const [navbar4, setNavbar4] = useState(false, "nav4");
    const [dataDetailpegawai, setDataDetailpegawai] = useState({ workUnit: {} }, "dataDetailpegawai");
    const _personal = () => {
        setNavbar1(true)
        setNavbar2(false)
        setNavbar3(false)
        setNavbar4(false)
    }

    const _job = () => {
        setNavbar1(false)
        setNavbar2(true)
        setNavbar3(false)
        setNavbar4(false)
    }

    const _training = () => {
        setNavbar1(false)
        setNavbar2(false)
        setNavbar3(true)
        setNavbar4(false)
    }
    const _performance = () => {
        setNavbar1(false)
        setNavbar2(false)
        setNavbar3(false)
        setNavbar4(true)
    }

    const _getData = async () => {
        let { data } = await getDataPegawai(match.params.id)
        if (!data) return
        setDataDetailpegawai(data)
    }

    useEffect(() => {
        _getData()
    }, [navbar1, navbar2, navbar3, navbar4])

    return (
        <div>
            <Row>
                <Col xs={12} sm={6} md={3}>

                    <WidgetCustom
                        dataBox={() => ({ variant: 'twitter' })}
                        name={dataDetailpegawai.name}
                        employeeStatus={dataDetailpegawai.employeeStatus}
                        profilePicture={dataDetailpegawai.profilePicture}
                        titleName={dataDetailpegawai.titleName}
                        position={dataDetailpegawai.position}
                        id={match.params.id}
                    />

                    <SideProfile
                        data={dataDetailpegawai}
                    />
                </Col>
                <Col xs={12} sm={6} md={9}>
                    <Row className="mb-2">
                        <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                            <Button onClick={_personal} block outline color="primary">Personal</Button>
                        </Col>
                        <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                            <Button onClick={_job} block outline color="primary">Job</Button>
                        </Col>
                        <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                            <Button onClick={_training} block outline color="primary">Training</Button>
                        </Col>
                        <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                            <Button onClick={_performance} block outline color="primary">Performance</Button>
                        </Col>
                    </Row>
                    {
                        navbar1 &&
                        <Personal
                            data={dataDetailpegawai}
                        />
                    }
                    {
                        navbar2 &&
                        <Job
                            data={dataDetailpegawai}
                        />
                    }
                    {
                        navbar3 &&
                        <Training />
                    }
                    {
                        navbar4 &&
                        <Performance
                            data={dataDetailpegawai}
                        />
                    }
                </Col>
            </Row>
        </div >
    )
}

DetailPegawai.propTypes = {

}

export default DetailPegawai
