import React from 'react'
import PropTypes from 'prop-types'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


const PropTypesParam = {
    isPagination: PropTypes.bool,
    data: PropTypes.array
}

const DefaultPropsParam = {
    isPagination: true,
    data: []
};

class ListPegawaiTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    color="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#f80' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <a target="_blank" href="">
                <Highlighter
                    highlightStyle={{ backgroundColor: '#20a8e4', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={"" + text}
                />
            </a>
        ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'NIP',
                dataIndex: 'nip',
                key: 'nip',
                width: 100,
                ...this.getColumnSearchProps('nip'),

            },
            {
                title: 'Nama',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                sorter: (a, b) => a.name.length - b.name.length,
                // sortDirections: ['descend'],
                // ...this.getColumnSearchProps('nama'),
            },
            {
                title: 'Status',
                dataIndex: 'employeeStatus',
                key: 'employeeStatus',
                width: 100,
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
                onFilter: (value, record) => record.nama.includes(value),
            },
            {
                title: 'Fungsi',
                dataIndex: 'fieldFunction',
                key: 'fieldFunction',
                width: '10%',
                sorter: (a, b) => a.fieldFunction.length - b.fieldFunction.length,
                sortDirections: ['descend'],
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
            },
            {
                title: 'Jabatan',
                dataIndex: 'position',
                key: 'position',
                width: '10%',
                sorter: (a, b) => a.position.length - b.position.length,
                sortDirections: ['descend'],
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
            },
            {
                title: 'BOD Group',
                dataIndex: 'bodGroup',
                key: 'bodGroup',
                width: 80,
                sorter: (a, b) => a.bodGroup.length - b.bodGroup.length,
                sortDirections: ['descend'],

                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
            },


        ];

        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.props.data}
                    onChange={this.handleChange}
                    size="small"
                    scroll={{ x: 1200, y: 500 }}
                    pagination={this.props.isPagination}
                    position="top" />
            </div>
        );
    }
}


ListPegawaiTable.propTypes = PropTypesParam
ListPegawaiTable.defaultProps = DefaultPropsParam

export default ListPegawaiTable;