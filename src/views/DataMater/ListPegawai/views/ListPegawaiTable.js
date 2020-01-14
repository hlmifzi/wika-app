import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

class ListPegawaiTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data
    };

    handleChange = (pagination, filters, sorter) => {
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
        render: (text, value) => {

            return (
                <a href="/#/karyawan/2">
                    <Highlighter
                        highlightStyle={{ backgroundColor: '#20a8e4', padding: 0 }}
                        searchWords={[this.state.searchText]}
                        autoEscape
                        textToHighlight={"" + text}
                    />
                </a>
            )
        },
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
                sorter: (a, b) => a.name.localeCompare(b.name),
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Status',
                dataIndex: 'employeeStatus',
                key: 'employeeStatus',
                width: 100,
                sorter: (a, b) => a.employeeStatus.localeCompare(b.employeeStatus),
                filters: [
                    { text: 'KKWT', value: 'KKWT' },
                    { text: 'MT-FG', value: 'MT-FG' },
                    { text: 'Organik', value: 'Organik' },
                    { text: 'Outsource', value: 'Outsource' },
                    { text: 'Terampil', value: 'Terampil' },
                ],
                filteredValue: filteredInfo.employeeStatus || null,
                onFilter: (value, record) => record.employeeStatus.includes(value),
            },
            {
                title: 'Fungsi',
                dataIndex: 'fieldFunction',
                key: 'fieldFunction',
                width: '10%',
                sorter: (a, b) => a.fieldFunction.localeCompare(b.fieldFunction),
                sortDirections: ['descend'],
                filters: [
                    { text: 'SUPPLY CHAIN MANAGEMENT', value: 'SUPPLY CHAIN MANAGEMENT' },
                    { text: 'SIPIL', value: 'SIPIL' },
                    { text: 'SECRETARY', value: 'SECRETARY' },
                    { text: 'QUALITY', value: 'QUALITY' },
                    { text: 'QSHE', value: 'QSHE' },
                    { text: 'PROJECT MANAGEMENT', value: 'PROJECT MANAGEMENT' },
                    { text: 'PROJECT CONTROL', value: 'PROJECT CONTROL' },
                    { text: 'PEMASARAN', value: 'PEMASARAN' },
                    { text: 'MANAJEMEN KONTRAK', value: 'MANAJEMEN KONTRAK' },
                    { text: 'KEUANGAN & AKUNTANSI', value: 'KEUANGAN & AKUNTANSI' },
                    { text: 'KEUANGAN', value: 'KEUANGAN' },
                    { text: 'HUMAN CAPITAL', value: 'HUMAN CAPITAL' },
                    { text: 'ENGINEERING', value: 'ENGINEERING' },
                    { text: 'CONSTRUCTION MANAGEMENT', value: 'CONSTRUCTION MANAGEMENT' },
                    { text: 'AKUNTANSI', value: 'AKUNTANSI' }
                ],
                filteredValue: filteredInfo.fieldFunction || null,
                onFilter: (value, record) => record.fieldFunction.includes(value),
            },
            {
                title: 'Jabatan',
                dataIndex: 'position',
                key: 'position',
                width: '10%',
                sorter: (a, b) => a.position.localeCompare(b.position),
                filters: [
                    { text: 'Surveyor', value: 'Surveyor' },
                    { text: 'Supervisor SHE', value: 'Supervisor SHE' },
                    { text: 'Staf Umum', value: 'Staf Umum' },
                    { text: 'Staf SHE', value: 'Staf SHE' },
                    { text: 'Staf Seksi SHE', value: 'Staf Seksi SHE' },
                    { text: 'Staf Seksi Quantity Surveyor', value: 'Staf Seksi Quantity Surveyor' },
                    { text: 'Staf Seksi Quantity Survey', value: 'Staf Seksi Quantity Survey' },
                    { text: 'Staf Seksi Quality Control', value: 'Staf Seksi Quality Control' },
                    { text: 'Staf Seksi Quality Assurance', value: 'Staf Seksi Quality Assurance' },
                    { text: 'Staf Seksi QA/QC', value: 'Staf Seksi QA/QC' },
                    { text: 'Staf Seksi Pengadaan dan Peralatan', value: 'Staf Seksi Pengadaan dan Peralatan' },
                    { text: 'Staf Seksi Pengadaan dan Peralatan', value: 'Staf Seksi Pengadaan dan Peralatan' },
                    { text: 'Staf Seksi Pengadaan', value: 'Staf Seksi Pengadaan' },
                    { text: 'Staf Laboratorium', value: 'Staf Laboratorium' },
                ],
                filteredValue: filteredInfo.position || null,
                onFilter: (value, record) => record.position.includes(value),

            },
            {
                title: 'BOD Group',
                dataIndex: 'bodGroup',
                key: 'bodGroup',
                width: 80,
                sorter: (a, b) => a.bodGroup.localeCompare(b.bodGroup),
                filters: [
                    { text: 'BOD-1', value: 'BOD-1' },
                    { text: 'BOD-2', value: 'BOD-2' },
                    { text: 'BOD-3', value: 'BOD-3' },
                    { text: 'BOD-4', value: 'BOD-4' },
                    { text: 'BOD-5', value: 'BOD-5' },
                ],
                filteredValue: filteredInfo.bodGroup || null,
                onFilter: (value, record) => record.bodGroup.includes(value),

            },


        ];

        return (
            <div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} pagination={this.props.isPagination} />
            </div>
        );
    }
}
export default ListPegawaiTable;