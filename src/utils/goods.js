export function formatGoods(input) {
  return input.warehouses
    .map((warehouse) => ({
      key: warehouse.id,
      brand: input.brand,
      price: warehouse.price,
      code: warehouse.code,
      stock: warehouse.stock,
      name: input.name,
    }))
    .filter((option) => !!option.stock)
}
