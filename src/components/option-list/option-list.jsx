import { Table } from "antd"

const columns = [
  { title: "Производитель", dataIndex: "brand", key: "brand" },
  { title: "Код склада", dataIndex: "code", key: "code" },
  { title: "Цена", dataIndex: "price", key: "price" },
  { title: "Остаток", dataIndex: "stock", key: "stock" },
]

const OptionList = () => {
  return <Table columns={columns} />
}

export default OptionList
