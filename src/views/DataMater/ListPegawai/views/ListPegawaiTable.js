import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { getDataGetAllFungsi, getDataFilterJabatan } from '../endpoint/ListPegawaiEndpoint'

class ListPegawaiTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data,
        filterFungsi: {},
        filterJabatan: {}
    };

    async componentWillMount() {
        let { data } = await getDataGetAllFungsi()
        const dataFungsiFilter = data.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterFungsi: dataFungsiFilter })

        let { data: dataJabatam } = await getDataFilterJabatan()
        const dataJabatanFilter = dataJabatam.map((v, i) => ({
            text: v.name,
            value: v.name
        }))
        this.setState({ filterJabatan: dataJabatanFilter })
    }

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
                <a href={`/#/karyawan/${value.key}`}>
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
        console.log(filteredInfo)
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
                width: '10%',
                sorter: (a, b) => a.fieldFunction ? a.fieldFunction.localeCompare(b.fieldFunction || '') : false,
                filters: this.state.filterFungsi,
                filteredValue: filteredInfo.fieldFunction || '',
                onFilter: (value, record) => record.fieldFunction ? record.fieldFunction.includes(value) : false,
            },
            {
                title: 'Jabatan',
                dataIndex: 'position',
                key: 'position',
                width: '10%',
                sorter: (a, b) => a.position ? a.position.localeCompare(b.position || '') : false,
                filters: this.state.filterJabatan,
                filteredValue: filteredInfo.position || null,
                onFilter: (value, record) => record.position ? record.position.includes(value) : false,
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
                onFilter: (value, record) => record.bodGroup ? record.bodGroup.includes(value) : false,

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