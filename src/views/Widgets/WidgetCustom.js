import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func,
  name: PropTypes.string,
  employeeStatus: PropTypes.string
};

const defaultProps = {
  dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};

class WidgetCustom extends Component {
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
              <div className="text-value">{this.props.name}</div>
              <div className="text-uppercase text-muted small">Manager - Proyek HSR</div>
              <div className="text-uppercase text-muted small"><Badge pill color="success">{this.props.employeeStatus}</Badge></div>
            </div>
          </div>
        </div >

      </>
    );
  }
}

WidgetCustom.propTypes = propTypes;
WidgetCustom.defaultProps = defaultProps;

export default WidgetCustom;
