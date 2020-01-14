import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Col, Row, Badge, FormGroup, Label, Input, Button, TabContent, TabPane } from 'reactstrap';
import Widget02 from '../Widgets/Widget02';
import WidgetCustom from '../Widgets/WidgetCustom';
import { CardWithCustom, CardWithCustomNoHeader } from '../../MyComponent/CardCustom/CardComponent'
import 'font-awesome/css/font-awesome.min.css';
import './style/style.css';
import { Personal } from './Personal.js';
import { Job } from './Job.js';
import { Training } from './Training.js';
import { Performance } from './Performance.js';
import { SideProfile } from './SideProfile.js';
import { getDataPegawai } from './endpoint/DetailPegawaiEndpoint.js';

const DetailPegawai = ({match}) => {
    const [navbar1, setNavbar1] = useState(false, "nav1");
    const [navbar2, setNavbar2] = useState(false, "nav2");
    const [navbar3, setNavbar3] = useState(false, "nav3");
    const [navbar4, setNavbar4] = useState(true, "nav4");
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

    const _getData =async  () => {
        let {data} = await getDataPegawai(match.params.id)
        console.log(data)
    }

    useEffect(() => {
        _getData()
    }, [navbar1, navbar2, navbar3, navbar4])

    return (
        <div>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <WidgetCustom dataBox={() => ({ variant: 'twitter' })} >
                    </WidgetCustom>
                    <SideProfile />
                </Col>
                <Col xs={12} sm={6} md={9}>
                    <Row className="mb-2">
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <Button onClick={_personal} size="md" className="btn-facebook btn-brand text mr-2"><span>Personal</span></Button>
                            <Button onClick={_job} size="md" className="btn-facebook btn-brand text mr-2"><span>Job</span></Button>
                            <Button onClick={_training} size="md" className="btn-facebook btn-brand text mr-2"><span>Training</span></Button>
                            <Button onClick={_performance} size="md" className="btn-facebook btn-brand text"><span>Performance</span></Button>
                        </Col>
                    </Row>
                    {
                        navbar1 &&
                        <Personal />
                    }
                    {
                        navbar2 &&
                        <Job />
                    }
                    {
                        navbar3 &&
                        <Training />
                    }
                    {
                        navbar4 &&
                        <Performance />
                    }
                </Col>
            </Row>
        </div>
    )   
}

DetailPegawai.propTypes = {

}

export default DetailPegawai
