import { Table } from 'antd'

const columns = [
  {
    title: 'Part',
    dataIndex: 'part',
    width: 20,
    render: title => title.toUpperCase()
  },
  {
    title: 'Measurement',
    dataIndex: 'measurement',
    width: 50
  }
]

export default function Measurement ({ data }) {
  return (
    <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 240 }} />
  )
}
