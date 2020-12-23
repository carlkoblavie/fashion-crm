import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { PropTypes } from 'prop-types';
import {
  BrowserRouter as Router,
  useHistory,
  useLocation
} from 'react-router-dom'
import React, { useContext, createContext, useState } from 'react'

async function loginUser (credentials) {
  // setTimeout(() => ({ token: '123456' }), 2000)
  console.log('loginUser')
  const token = Promise.resolve({ token: '12345' })
  return token
}

export default function LoginForm ({ setToken }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    const token = await loginUser({
      email,
      password
    })
    setToken(token)
  }

  return (
    <div style={{ width: '25%', margin: '0 auto', marginTop: '20%' }}>
      <h3 style={{ textAlign: 'center' }}>Log In</h3>
      <Form
        name='login'
        className='login-form'
        onSubmit={handleSubmit}
        initialValues={{
          remember: true
        }}
      >
        <Form.Item
          name='email'
          onChange={e => setEmail(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your Email!'
            }
          ]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Email address' />
        </Form.Item>
        <Form.Item
          name='password'
          onChange={e => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </Form.Item>
        <a className='login-form-forgot' href=''>
          Forgot password
        </a>
      </Form>
    </div>
  )
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}
