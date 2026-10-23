import { Table } from "antd"
import OptionList from "../option-list/option-list"

const columns = [
  { title: "Бренд", dataIndex: "brand", key: "brand" },
  { title: "Наименование", dataIndex: "name", key: "name" },
]

const BrandList = () => {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (optionList) => <OptionList data={optionList} />,
      }}
    />
  )
}

export default BrandList
