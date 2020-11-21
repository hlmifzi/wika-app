import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { getDataFilterJabatan } from '../../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'

class ReportMutasiPromosiTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data,
        filterPosisi: {},
    };

    async componentWillMount() {
        let { data: dataJabatan } = await getDataFilterJabatan()
        const dataJabatanFilter = dataJabatan.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterJabatan: dataJabatanFilter })
    }

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
                dataIndex: 'userNip',
                key: 'nip',
                width: 100,
                ...this.getColumnSearchProps('nip'),

            },
            {
                title: 'Nama',
                dataIndex: 'userName',
                key: 'name',
                width: 200,
                sorter: (a, b) => a.nama.length - b.nama.length,
                ...this.getColumnSearchProps('nama'),
            },
            {
                title: 'Jabatan',
                dataIndex: 'userPositionName',
                key: 'position',
                width: '10%',
                sorter: (a, b) => a.userPositionName ? a.userPositionName.localeCompare(b.userPositionName || '') : false,
                filters: this.state.filterJabatan,
                filteredValue: filteredInfo.userPositionName || null,
                onFilter: (value, record) => record.userPositionName ? record.userPositionName.includes(value) : false,
            },
            {
                title: 'Tipe Mutasi',
                dataIndex: 'typeMutation',
                key: 'typeMutation',
                width: '15%',
                sorter: (a, b) => a.typeMutation.localeCompare(b.typeMutation)
            },
            {
                title: 'Tanggal Input',
                dataIndex: 'validDate',
                key: 'validDate',
                width: '15%',
                sorter: (a, b) => a.validDate.localeCompare(b.validDate)
            },
            {
                title: 'Tanggal Resign',
                dataIndex: 'userOutDate',
                key: 'userOutDate',
                width: '15%',
                sorter: (a, b) => a.userOutDate.localeCompare(b.userOutDate)
            },

            {
                title: 'Tanggal Join',
                dataIndex: 'userEntryDate',
                key: 'userEntryDate',
                width: '15%',
                sorter: (a, b) => a.userEntryDate.localeCompare(b.userEntryDate)
            },
            {
                title: 'Catatan',
                dataIndex: 'notes',
                key: 'notes',
                width: 200,
                // ...this.getColumnSearchProps('notes'),
            },

        ];

        return (
            <div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} />
            </div>
        );
    }
}
export default ReportMutasiPromosiTable;