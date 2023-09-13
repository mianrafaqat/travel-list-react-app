import Item from "./Item";

const PackingList = ({ data }) => {
  console.log("Rendered");
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
