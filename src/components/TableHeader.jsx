export const TableHeader = ({ columns }) => {
  return (
    
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={col}
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              textAlign: "left", 
              backgroundColor: "#f2f2f2",
            }}
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
};
