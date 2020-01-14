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
