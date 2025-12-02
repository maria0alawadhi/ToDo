const Item = ({ item }) => {
  return (
    <>
      <li>
        <span>{item.name}</span>
        <button>X</button>
      </li>
    </>
  );
};
export default Item;
