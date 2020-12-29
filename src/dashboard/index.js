import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import Customers from './customer/customerlist'
import AddCustomer from './customer/newcustomer'
import ShowCustomer from "./customer/showcustomer";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function Dashboard () {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' style={{ float: 'right' }}>
          <Menu.Item key='1' />
          <Menu.Item key='2'>Admin</Menu.Item>
          <Menu.Item key='3'>
            <Link to='/logout'>Log Out</Link>
          </Menu.Item>
        </Menu>
      </Header>
          <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key='sub1' icon={<UserOutlined />} title='Customers'>
              <Menu.Item key='1'>
                <Link to='/dashboard/customers'>Customers</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to='/dashboard/customers/add'>Add Customer</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='Price List'>
              <Menu.Item key='5'>Price List</Menu.Item>
              <Menu.Item key='6'>Add Item</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' icon={<NotificationOutlined />} title='Team'>
              <Menu.Item key='9'>Team List</Menu.Item>
              <Menu.Item key='10'>Add Team Member</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Switch>
              <Route path='/dashboard/customers/add'>
                <AddCustomer />
              </Route>
              <Route path='/dashboard/customers'>
                <Customers />
              </Route>
              <Route path='/dashboard/customers/show'>
                <ShowCustomer />
              </Route>
            </Switch>
          </Content>
          </Layout>
        </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
