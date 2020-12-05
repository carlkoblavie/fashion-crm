import React from 'react'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        type: ''
      }
    }
  }

  onPositionChange (value) {
    this.setState({ labelPosition: value })
  }

  onChange (key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    })
  }

  render () {
    return (
      <div>
        <Radio.Group size='small' value={this.state.labelPosition} onChange={this.onPositionChange.bind(this)}>
          <Radio.Button value='left'>Left</Radio.Button>
          <Radio.Button value='right'>Right</Radio.Button>
          <Radio.Button value='top'>Top</Radio.Button>
        </Radio.Group>
        <div style={{ margin: 20 }} />
        <Form className='demo-form-stacked' model={this.state.form} labelPosition={this.state.labelPosition} labelWidth='100'>
          <Form.Item label='Name'>
            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} />
          </Form.Item>
          <Form.Item label='Activity zone'>
            <Input value={this.state.form.region} onChange={this.onChange.bind(this, 'region')} />
          </Form.Item>
          <Form.Item label='Activity form'>
            <Input value={this.state.form.type} onChange={this.onChange.bind(this, 'type')} />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default LoginForm
