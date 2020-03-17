import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { Badge, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import "./widget.css";
import { updateDataPegawai } from '../DetailPegawai/endpoint/DetailPegawaiEndpoint';
import NotifSwal from "../../MyComponent/notification/Swal"

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
    const { children, className, cssModule, dataBox, id, ...attributes } = this.props;

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

    const changeProfilePicture = async (e) => {
      let profilePicture = new FormData();
      profilePicture.append('profilePicture', e.target.files[0])
      await updateDataPegawai(id, profilePicture)
      NotifSwal.successSubmit("Profile picture has been updated")
      window.location.reload()
    }

    return (
      <>
        <div className={classes}>
          <div className={classCardHeader}>
            <div className="avatar" style={{ width: '100px', position: 'relative' }}>
              <img src={this.props.profilePicture != null ? this.props.profilePicture : 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png'} className="img-avatar" alt="admin@bootstrapmaster.com" width="900em" />
            </div>
          </div>
          <div className={classCardBody}>
            <div style={{ marginTop: '60px' }}>
              {
                window.location.href.includes('karyawan/') &&
                <>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Edit Profile Picture
                  </label>
                  <Input id="file-upload" type="file" onChange={(e) => changeProfilePicture(e)} />
                </>
              }
              <div className="text-value">{this.props.name}</div>
              <div className="text-uppercase text-muted small">{this.props.titleName} - {this.props.position ? this.props.position.name : ""}</div>
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
