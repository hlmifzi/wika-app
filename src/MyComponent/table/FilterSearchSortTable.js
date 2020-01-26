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
                title: 'Nama',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                sorter: (a, b) => a.name.localeCompare(b.name),
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Fungsi',
                dataIndex: 'fieldFunctionName',
                key: 'fieldFunctionName',
                width: '10%',
                sorter: (a, b) => a.fieldFunctionName.localeCompare(b.fieldFunctionName),
                filters: this.state.filterFungsi,
                filteredValue: filteredInfo.fieldFunctionName || null,
                onFilter: (value, record) => record.fieldFunctionName.includes(value),
            },
            {
                title: 'Masa Kerja',
                dataIndex: 'yearsOfService',
                key: 'yearsOfService',
                width: '10%',

            },
            {
                title: 'Unit Kerja',
                dataIndex: 'workUnitName',
                key: 'workUnitName',
                width: '10%',
                sorter: (a, b) => a.workUnitName.localeCompare(b.workUnitName),
                filters: this.state.filterUnitKerja,
                filteredValue: filteredInfo.workUnitName || null,
                onFilter: (value, record) => record.workUnitName.includes(value),

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
                width: '10%',
                sorter: (a, b) => a.kukTheory.localeCompare(b.kukTheory),

            },
            {
                title: 'KUK Praktek',
                dataIndex: 'kukPractice',
                key: 'kukPractice',
                width: '10%',
                sorter: (a, b) => a.kukPractice.localeCompare(b.kukPractice),

            },
            {
                title: 'Assesmen Job Target',
                dataIndex: 'assesment',
                key: 'assesment',
                width: '10%',
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
                    <Button onClick={this.setAgeSort}>Sort age</Button>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} />
            </div>
        );
    }
}
export default FilterSearchSortTable;