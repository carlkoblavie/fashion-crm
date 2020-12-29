import { Form, Input, Button, Select, Col, Row, PageHeader } from 'antd'
const { Option } = Select
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

export default function NewCustomer () {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const days = () => {
    const dayOptions = []
    for (let i = 1; i < 32; i++) {
      dayOptions.push(i)
    }
    return dayOptions
  }

  return (
    <Row>
      <Col span={6} offset={6}>
      <PageHeader
        className="site-page-header"
        title="Add New Customer"
      />
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='First Name'
        name='firstName'
        rules={[
          {
            required: true,
            message: 'Please input customer name!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[
          {
            required: true,
            message: 'Please input customer last name!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Sex'
        name='sex'
        rules={[
          {
            required: true,
            message: 'Please select sex'
          }
        ]}
      >
        <Select
          style={{ width: 120 }}
          placeholder='Select Sex'
          optionFilterProp='children'
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {['Male', 'Female'].map(sex => (<Option key={sex} value={sex}>{sex}</Option>))}
        </Select>
      </Form.Item>
      <Form.Item
        label='Phone Number'
        name='phoneNumber'
        rules={[
          {
            required: true,
            message: 'Please input customer phone number!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Location'
        name='location'
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Birth Day'
        name='birthDay'
      >
        <Select
          style={{ width: 150 }}
          placeholder='Select Day'
          optionFilterProp='children'
        >
          {days().map(day => (<Option key={day} value={day}>{day}</Option>))}
        </Select>
      </Form.Item>

      <Form.Item
        label='Birth Month'
        name='birthMonth'
      >
        <Select
          showSearch
          style={{ width: 150 }}
          placeholder='Select Month'
          optionFilterProp='children'
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='January'>January</Option>
          <Option value='February'>February</Option>
          <Option value='March'>March</Option>
          <Option value='April'>April</Option>
          <Option value='May'>May</Option>
          <Option value='June'>June</Option>
          <Option value='July'>July</Option>
          <Option value='August'>August</Option>
          <Option value='September'>September</Option>
          <Option value='October'>October</Option>
          <Option value='November'>November</Option>
          <Option value='December'>December</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  )
}
