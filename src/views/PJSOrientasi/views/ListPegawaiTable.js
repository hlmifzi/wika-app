import React from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { getDataGetAllFungsi, getDataFilterJabatan } from '../../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'

class ListPegawaiTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        data: this.props.data
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
                title: 'Profil',
                dataIndex: 'profilePicture',
                key: 'profilePicture',
                width: 80,
                render: (text, value) => <img alt="profile-picture" className="width-50" src={`${value.profilePicture || 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png'}`} />
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
                    { text: 'Organik', value: 'Organik' },
                    { text: 'Terampil', value: 'Terampil' },
                ],
                filteredValue: filteredInfo.employeeStatus || null,
                onFilter: (value, record) => record.employeeStatus.includes(value),
            },
            {
                title: 'Fungsi',
                dataIndex: 'fieldFunctionName',
                key: 'fieldFunctionName',
                width: 100,
                sorter: (a, b) => a.fieldFunctionName.localeCompare(b.fieldFunctionName),
                filters: this.state.filterFungsi,
                filteredValue: filteredInfo.fieldFunctionName || null,
                onFilter: (value, record) => record.fieldFunctionName.includes(value),
            },
            {
                title: 'Jabatan',
                dataIndex: 'positionName',
                key: 'positionName',
                width: '10%',
                filters: this.state.filterJabatan,
                sorter: (a, b) => a.positionName.localeCompare(b.positionName),
                filteredValue: filteredInfo.positionName || null,
                onFilter: (value, record) => record.positionName.includes(value),
            },
            {
                title: 'Tanggal Mulai PJS',
                dataIndex: 'startDateOfPjs',
                key: 'startDateOfPjs',
                width: '15%',
                sorter: (a, b) => a.startDateOfPjs.localeCompare(b.startDateOfPjs)
            },
            {
                title: 'Perhitungan Waktu',
                dataIndex: 'durationOfPjs',
                key: 'durationOfPjs',
                width: 150,
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