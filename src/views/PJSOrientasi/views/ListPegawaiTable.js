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
        render: (text, value) => {
            return (
                <a href={`/#/karyawan/${value.key}`}>
                    <Highlighter
                        highlightStyle={{ backgroundColor: '#20a8e4', padding: 0 }}
                        searchWords={[this.state.searchText]}
                        autoEscape
                        textToHighlight={"" + text}
                    />
                </a>
            )
        }
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
                sorter: (a, b) => a.nama.length - b.nama.length,
                ...this.getColumnSearchProps('nama'),
            },
            {
                title: 'Fungsi',
                dataIndex: 'fieldFunction.name',
                key: 'fieldFunction.name',
                width: 100,
                sorter: (a, b) => a.fieldFunction.localeCompare(b.fieldFunction),
                sortDirections: ['descend'],
                filters: this.state.filterFungsi,
                filteredValue: filteredInfo.fieldFunction || null,
                onFilter: (value, record) => record.fieldFunction.includes(value),
            },
            {
                title: 'Jabatan',
                dataIndex: 'position.name',
                key: 'position.name',
                width: '10%',
                sorter: (a, b) => a.position.localeCompare(b.position.name),
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
                title: 'Tanggal Mulai PJS',
                dataIndex: 'startDateOfPjs',
                key: 'startDateOfPjs',
                width: '15%',
                sorter: (a, b) => a.nama.length.localeCompare - b.nama.length,
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
            },
            {
                title: 'Perhitungan Waktu',
                dataIndex: 'durationOfPjs',
                key: 'durationOfPjs',
                width: 150,
                sorter: (a, b) => a.nama.length - b.nama.length,
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.nama || null,
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


        ];

        return (
            <div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} />
            </div>
        );
    }
}
export default ListPegawaiTable;