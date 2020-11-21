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
                    <Col xs="12" lg="12" className="mt-10">
                        <StandardTable data={dataDocument} />
                    </Col>
                </Row>
            </CardWithCustom>
        </div >
    )
}

FileManager.propTypes = {

}

export default FileManager
