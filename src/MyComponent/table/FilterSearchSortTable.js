import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { getDataGetAllFungsi, getDataFilterJabatan, getDataGetAllUnitKerja } from '../../views/DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'


class FilterSearchSortTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data,

        filterFungsi: {},
        filterJabatan: {},
        filterUnitKerja: {}
    };


    async componentWillMount() {
        let { data } = await getDataGetAllFungsi()
        const dataFungsiFilter = data.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterFungsi: dataFungsiFilter })

        let { data: dataJabatan } = await getDataFilterJabatan()
        const dataJabatanFilter = dataJabatan.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterJabatan: dataJabatanFilter })

        let { data: dataUnitKerja } = await getDataGetAllUnitKerja()
        const dataJabatanUnitKerja = dataUnitKerja.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterUnitKerja: dataJabatanUnitKerja })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
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
                title: 'Profil',
                dataIndex: 'profilePicture',
                key: 'profilePicture',
                width: 80,
                render: (text, value) => <img className="width-50" src={`${value.profilePicture || 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png'}`} />
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
                width: 150,
                sorter: (a, b) => a.fieldFunction ? a.fieldFunction.localeCompare(b.fieldFunction || '') : false,
                filters: this.state.filterFungsi,
                filteredValue: filteredInfo.fieldFunction || '',
                onFilter: (value, record) => record.fieldFunction ? record.fieldFunction.includes(value) : false,
            },
            {
                title: 'Jabatan',
                dataIndex: 'position',
                key: 'position',
                width: 130,
                sorter: (a, b) => a.position ? a.position.localeCompare(b.position || '') : false,
                filters: this.state.filterJabatan,
                filteredValue: filteredInfo.position || null,
                onFilter: (value, record) => record.position ? record.position.includes(value) : false,
            },
            {
                title: 'Masa Jabatan',
                dataIndex: 'durationOfFieldFunction',
                key: 'durationOfFieldFunction',
                width: 100,
            },
            {
                title: 'Tanggal Masuk',
                dataIndex: 'entryDate',
                key: 'entryDate',
                width: 150,
                sorter: (a, b) => a.entryDate ? a.entryDate.localeCompare(b.entryDate || '') : false,
            },
            {
                title: 'Masa Kerja',
                dataIndex: 'yearsOfService',
                key: 'yearsOfService',
                width: 100,
            },

            {
                title: 'Unit Kerja',
                dataIndex: 'workUnit',
                key: 'workUnit',
                width: 150,
                sorter: (a, b) => a.workUnit.localeCompare(b.workUnit),
                filters: this.state.filterUnitKerja,
                filteredValue: filteredInfo.workUnit || null,
                onFilter: (value, record) => record.workUnit.includes(value),

            },
            {
                title: 'EK',
                dataIndex: 'ek',
                key: 'ek',
                width: 80,
                sorter: (a, b) => a.ek.localeCompare(b.ek),
            },
            {
                title: 'PK',
                dataIndex: 'pk',
                key: 'pk',
                width: 80,
                sorter: (a, b) => a.pk.localeCompare(b.pk),

            },
            {
                title: 'KUK Teori',
                dataIndex: 'kukTheory',
                key: 'kukTheory',
                width: 120,
                sorter: (a, b) => a.kukTheory.localeCompare(b.kukTheory),

            },
            {
                title: 'Assesmen Job Target',
                dataIndex: 'assesment',
                key: 'assesment',
                width: 150,
                filters: [
                    { text: 'Dapat Disarankan', value: 'Dapat Disarankan' },
                    { text: 'Disarankan dengan Pengembangan', value: 'Disarankan dengan Pengembangan' },
                    { text: 'Tidak Disarankan', value: 'Tidak Disarankan' }
                ],
                filteredValue: filteredInfo.assesment || '',
                onFilter: (value, record) => record.assesment.includes(value),

            },

        ];

        return (
            <div>
                <div className="table-operations" style={{ marginBottom: '50px' }}>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                </div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} />
            </div>
        );
    }
}
export default FilterSearchSortTable;