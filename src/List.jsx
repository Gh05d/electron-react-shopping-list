import React from "react";

export default ({ items, deleteItem }) =>
  items.map(item => (
    <li
      className="collection-item"
      key={item.id}
      onClick={() => deleteItem(item.id)}>
      {item.name}
    </li>
  ));
