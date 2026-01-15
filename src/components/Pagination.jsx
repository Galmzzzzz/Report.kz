export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // создаём массив страниц
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ marginTop: "15px" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            marginRight: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            backgroundColor: page === currentPage ? "#007bff" : "#eee",
            color: page === currentPage ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
