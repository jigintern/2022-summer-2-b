const SearchBar = () => {
  return (
    <form
      style={{
        boxSizing: "border-box",
      }}
    >
      <input
        type="text"
        name="keyword"
        placeholder="検索"
        autoFocus
        style={{
          display: "block",
          width: "200px",
          padding: "8px 20px",
          fontSize: "16px",
          fontWeight: "300",
          color: "ABABAB",
          outline: "none",
          border: "none",
          background: "#E6E6E6",
          borderRadius: "8px",
        }}
      ></input>
    </form>
  );
};

export default SearchBar;
