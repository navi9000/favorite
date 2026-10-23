import { Input, Button, Space } from "antd"

const Search = () => {
  return (
    <Space>
      <Space.Compact>
        <Input placeholder="Введите артикул" />
        <Button>Поиск</Button>
      </Space.Compact>
    </Space>
  )
}

export default Search
