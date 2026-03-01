import { memo } from "react";

const Item = memo(function Item({ name }) {
  console.log(`Рендер: ${name}`);

  return <p>{name}</p>;
});

export default Item;
