import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { getDataGetAllFungsi, getDataFilterJabatan } from '../../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'
import { urlBackend } from '../../../MyServices/api/URLApi'

class ListFileTable extends React.Component {
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
                <a href={`${urlBackend}${value.url}`}>
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
                title: 'Type',
                dataIndex: 'category',
                key: 'category',
                filters: [
                    { text: 'Asuransi', value: 'asuransi' },
                    { text: 'Pengumuman', value: 'pengumuman' },
                    { text: 'SK', value: 'sk' },
                    { text: 'Pengembangan', value: 'pengembangan' },
                ],
                filteredValue: filteredInfo.category || null,
                onFilter: (value, record) => record.category.includes(value),
                width: 200,

            },
            {
                title: 'Judul',
                dataIndex: 'title',
                key: 'title',
                width: 300,
                ...this.getColumnSearchProps('title'),
            },
            {
                title: 'Deskripsi',
                dataIndex: 'description',
                key: 'description',
                width: 300
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                width: 150,
            },
            {
                title: 'Action',
                width: 150,
                render: (text, value) =>
                    <Link to={`/file-manager/form/${value.id}`} >
                        <Button color="warning">
                            <i className="fa fa-edit"></i>
                        </Button>
                    </Link>
            },
        ];

        return (
            <div>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} size="small" scroll={{ x: 1200, y: 500 }} />
            </div>
        );
    }
}
export default ListFileTable;