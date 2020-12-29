import { Descriptions, Card } from 'antd'
import Measurement from './measurement'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card

export default function ShowCustomer () {
  const measurement = [
    {
      key: 1,
      part: 'bust',
      measurement: '30'
    },
    {
      key: 2,
      part: 'neck',
      measurement: '20'
    },
    {
      key: 2,
      part: 'waist',
      measurement: '20'
    }
  ]
  return (
    <Card
      bordered
      actions={[
        <>Edit</>,
        <>Delete User</>,
        <>View Orders</>,
        <>Payments</>
      ]}
    >
      <Descriptions title='Customer Info'>
        <Descriptions.Item label='Name'>John Snow</Descriptions.Item>
        <Descriptions.Item label='Phone Number'>0244139649</Descriptions.Item>
        <Descriptions.Item label='Gender'>Male</Descriptions.Item>
        <Descriptions.Item label='Location'>Sakumono, Tema</Descriptions.Item>
        <Descriptions.Item label='Birthday'>5th June</Descriptions.Item>
        <Descriptions.Item label='Status' style={{ fontWeight: 'bold', color: 'red' }}>In Arrears</Descriptions.Item>
        <Descriptions.Item label='Pending Items' style={{ fontWeight: 'bold' }}>None</Descriptions.Item>
      </Descriptions>
      <Measurement data={measurement} />
      <Meta
        av
      />
    </Card>
  )
}
