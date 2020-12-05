import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div style={{ width: '25%', margin: '0 auto', marginTop: '20%' }}>
      <h3 style={{textAlign: 'center'}}>Log In</h3>
      <Form
        name='login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
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
          <Button type='primary' htmlType='submit' className='login-form-button'>
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

export default LoginForm
