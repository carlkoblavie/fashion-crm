import React from 'react'
import { Table, Tag, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowCustomer from './showcustomer'

const data = [
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678',
    birthday: 'July, 20th',
    status: 'in arrears',
    pendingItems: 'pending items'
  },
  {
    key: '2',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678',
    birthday: 'July, 20th',
    status: 'in arrears',
    pendingItems: 'pending items'
  },

  {
    key: '3',
    name: 'Jim Green',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678',
    birthday: 'July, 20th',
    status: 'paid',
    pendingItems: 'pending items'
  },
  {
    key: '4',
    name: 'Jim Red',
    name: 'John Brown',
    gender: 'male',
    location: 'Tema',
    phone: '0233945678',
    birthday: 'July, 20th',
    status: 'paid',
    pendingItems: 'none'
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
        render: (name) => (<Link to='/dashboard/customers/show'>{name}</Link>)
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        width: '10%'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: '10%'
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: '15%',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'address',
      },
      {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        {
            text: 'IN ARREARS',
            value: 'in arrears'
        },
        {
            text: 'PAID',
            value: 'paid'
        }
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    render: status => (
        <span>
            {[status].map(aStatus => {
            let color = 'green';
            if (aStatus === 'in arrears') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={aStatus}>
                {aStatus.toUpperCase()}
                </Tag>
            );
            })}
        </span>
        ),
    },
    {
        title: 'Pending Items',
        dataIndex: 'pendingItems',
        key: 'pendingItems',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/dashboard/customers'>
            <Table columns={columns} dataSource={data} />
          </Route>
          <Route exact path='/dashboard/customers/show'>
            <ShowCustomer />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Customers