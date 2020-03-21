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
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#20a8e4', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={"" + text}
            />
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
                title: 'Unit Kerja',
                dataIndex: 'name',
                key: 'name',
                width: 250,
                sorter: (a, b) => a.name.length - b.name.length,
                ...this.getColumnSearchProps('name'),

            },
            {
                title: 'Organik',
                dataIndex: 'Organik',
                key: 'Organik',
                width: 150,
                sorter: (a, b) => a.Organik.length - b.Organik.length,
                ...this.getColumnSearchProps('Organik'),
            },
            {
                title: 'Terampil',
                dataIndex: 'Terampil',
                key: 'Terampil',
                width: 100,
                sorter: (a, b) => a.Terampil.length - b.Terampil.length,
            },
            {
                title: 'Outsource',
                dataIndex: 'Outsource',
                key: 'Outsource',
                width: 120,
                sorter: (a, b) => a.Outsource.length - b.Outsource.length,
            },
            {
                title: 'MT-FG',
                dataIndex: 'MT-FG',
                key: 'MT-FG',
                width: 100,
                sorter: (a, b) => a['MT-FG'].length - b['MT-FG'].length,
            },
            {
                title: 'MT-JA',
                dataIndex: 'MT-JA',
                key: 'MT-JA',
                width: 100,
                sorter: (a, b) => a['MT-JA'].length - b['MT-JA'].length,
            },
            {
                title: 'KKWT',
                dataIndex: 'KKWT',
                key: 'KKWT',
                width: 100,
                sorter: (a, b) => a['KKWT'].length - b['KKWT'].length,
            },
            {
                title: 'Jumlah',
                dataIndex: 'Total',
                key: 'Total',
                width: 100,
                sorter: (a, b) => a.Total.length - b.Total.length,
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