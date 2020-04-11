import React, { useEffect } from 'react'
import { useState } from 'reinspect'
import { Link } from 'react-router-dom'
import { Col, Row, Badge, Label, Input, Button, Table, FormGroup, InputGroup, InputGroupAddon } from 'reactstrap';
import WidgetCustom from '../Widgets/WidgetCustom';
import { CardWhiteComponent, CardWithCustom } from '../../MyComponent/CardCustom/CardComponent'
import { getFileManager } from './endpoint/FileManagerEndpoint'
import StandardTable from './views/ListFileTable'

const FileManager = () => {

    const [dataDocument, setDataDocument] = useState([], "dataDocument")

    const getData = async () => {
        let { data } = await getFileManager()
        if (!data) return
        setDataDocument(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <CardWithCustom classHeader={"text-blue"} text="File Manager">
                <Row className="card-custom">
                    <Col md="8" xs="12">
                        <Link to={'/file-manager/form'} >
                            <Button outline color="primary">
                                <i className="fa fa-plus"></i>&nbsp; Upload Files
                        </Button>
                        </Link>
                    </Col>
                    <Col md="4" xs="12">
                        <FormGroup row className="text-right">
                            <Col md="12">
                                <InputGroup>
                                    <Input type="text" id="input3-group2" name="input3-group2" placeholder="Search" />
                                    <InputGroupAddon addonType="append">
                                        <Button active type="button" color="info">Cari</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col xs="12" lg="12">
                        <StandardTable data={dataDocument} />
                        {/* <Table responsive style={{ fontSize: '.9em' }}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Type</th>
                                    <th>Judul</th>
                                    <th>Deskripsi</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataDocument &&

                                    dataDocument.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{v.category}</td>
                                                <td>
                                                    <a href={`http://api.dedekrnwan.site/${v.url}`} target="_blank">
                                                        {v.title}
                                                    </a>
                                                </td>
                                                <td>{v.description}</td>
                                                <td>{v.status}</td>
                                                <td>
                                                    <a href={`http://api.dedekrnwan.site/${v.url}`} target="_blank">
                                                        <Button color="danger">
                                                            <i className="fa fa-print"></i>
                                                        </Button>
                                                    </a>&nbsp;
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table> */}
                    </Col>
                </Row>
            </CardWithCustom>
        </div >
    )
}

FileManager.propTypes = {

}

export default FileManager
