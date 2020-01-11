import React from 'react'
import { Table } from 'antd';
import PropTypes from 'prop-types'


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


function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const StandardTable = ({ data, columns }) => {
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    )
}


StandardTable.propTypes = PropTypesParam
StandardTable.defaultProps = DefaultPropsParam

export default StandardTable
