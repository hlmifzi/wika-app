import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import { CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'


const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func,
};

const defaultProps = {
  dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};

class Widget03 extends Component {
  render() {

    // eslint-disable-next-line
    const { children, className, cssModule, dataBox, ...attributes } = this.props;

    // demo purposes only
    const data = dataBox();
    const variant = data.variant;

    if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
      return (null);
    }

    const back = 'bg-' + variant;

    const classCard = 'brand-card';
    const classCardHeader = classNames(`${classCard}-header`, back);
    const classCardBody = classNames(`${classCard}-body`);
    const classes = mapToCssModules(classNames(classCard, className), cssModule);

    return (
      <>
        <div className={classes}>
          <div className={classCardHeader}>
            <div className="avatar" style={{ width: '100px', position: 'relative' }}>
              <img src={'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" width="900em" />
            </div>
          </div>
          <div className={classCardBody}>
            <div style={{ marginTop: '40px' }}>
              <div className="text-value">Luthfi</div>
              <div className="text-uppercase text-muted small">Manager - Proyek HSR</div>
              <div className="text-uppercase text-muted small"><Badge pill color="warning">Organik</Badge></div>
            </div>
          </div>
        </div >

        {/* <div className={classes}>
          <CardDefaulSideProfiletComponent text="Riwayat Proyek" total="18" fontSize="1.1 rem">
            <ListGroup>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Mega <Badge className="float-right" pill color="success">14</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Besar <Badge className="float-right" pill color="success">2</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Menengah<Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Kecil<Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
            </ListGroup>
          </CardDefaulSideProfiletComponent>
        </div> */}

        <div className={classes}>
          <CardDefaulSideProfiletComponent text="Riwayat Fungsi " total="18" fontSize="1.1 rem">
            <ListGroup style={{ height: '200px', overflowY: 'auto' }}>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Production <Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Engineering <Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Dan<Badge className="float-right" pill color="danger">0</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Qom<Badge className="float-right" pill color="danger">0</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>QSHE <Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Muda<Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Madya<Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Utama <Badge className="float-right" pill color="success">1</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Other <Badge className="float-right" pill color="danger">0</Badge></ListGroupItem>
            </ListGroup>
          </CardDefaulSideProfiletComponent>
        </div>

        <div className='btn btn-primary text-center col-md-12' style={{ marginBottom: '30px' }}>
          Print Previiew
        </div>

      </>
    );
  }
}

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;

export default Widget03;
