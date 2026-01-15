export const TableRow = ({ item, onClick }) => {
  return (
    <tr onClick={() => onClick(item)} style={{ cursor: "pointer" }}>
      <td>{item.id}</td>
      <td>{item.category}</td>
      <td>{item.address}</td>
      <td>{item.status}</td>
      <td>{item.created_at}</td>
    </tr>
  );
};
