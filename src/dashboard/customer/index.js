import React from 'react'
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'

const data = [
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678'
  },
  {
    key: '2',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678'
  },
  {
    key: '3',
    name: 'Jim Green',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678'
  },
  {
    key: '4',
    name: 'Jim Red',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678'
  },
];

class Customers extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
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
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
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
    this.setState({ searchText: '' })
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: '20%',
        ...this.getColumnSearchProps('gender'),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: '20%',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'address',
        ...this.getColumnSearchProps('location'),
      },
    ];
    return <Table columns={columns} dataSource={data} />
  }
}

export default Customers