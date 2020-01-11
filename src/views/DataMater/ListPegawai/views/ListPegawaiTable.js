import React from 'react'

import { Table } from 'antd';
import PropTypes from 'prop-types'


function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const PropTypesParam = {
    isPagination: PropTypes.bool,
    data: PropTypes.array,
    columns: PropTypes.array
}

const DefaultPropsParam = {
    isPagination: true,
    data: [],
    columns: []
};


const ListPegawaiTable = ({ data, columns }) => {
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    )
}


ListPegawaiTable.propTypes = PropTypesParam
ListPegawaiTable.defaultProps = DefaultPropsParam

export default ListPegawaiTable
