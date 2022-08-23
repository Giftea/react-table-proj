export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
      <span>
        Search:{" "}
        <input
          value={filterValue || ""}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder={`Search records...`}
          style={{
            fontSize: "1.1rem",
            margin: "1rem 0",
          }}
        />
      </span>
    );
  };
  