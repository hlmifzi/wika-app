import React from 'react'
import { Badge, Card, CardHeader, CardBody } from 'reactstrap';

export const CardWhiteComponent = ({ children, color, text }) => {
    return (
        <Card>
            <CardHeader>
                <b style={{ fontSize: '1.5em' }}>{text}</b>
            </CardHeader>
            {children}
        </Card>
    )
}

export const CardDefaulSideProfiletComponent = ({ children, fontSize, text, total }) => {
    return (
        <>
            <CardHeader style={{ backgroundColor: 'rgba(206,214,220,.16)' }}>
                <b style={{ fontSize: `${fontSize}` }}>{text}</b>
                {total &&
                    <Badge className="float-right" pill color="warning">Total {total}</Badge>
                }
            </CardHeader>
            {children}
        </>
    )
}


export const CardAssessmen = ({ children, color, text }) => {
    return (
        <Card>
            <CardHeader style={{ backgroundColor: '#4dbd74' }}>
                <b style={{ fontSize: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center', color:'#fff' }}>
                    {text}
                </b>
            </CardHeader>
        </Card>
    )
}

// Author From Arifinriski
export const CardWithCustom = ({ children, color, text, classHeader }) => {
    return (
        <Card>
            <CardHeader className={classHeader}>
                <b style={{ fontSize: '1.2em' }}>{text}</b>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

export const CardWithCustomNoHeader = ({ children, color, text, classBody }) => {
    return (
        <Card>
            <CardBody className={classBody}>
                {children}
            </CardBody>
        </Card>
    )
}