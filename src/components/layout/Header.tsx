import SearchBar from "src/components/SeachBar";
import { Button } from "src/components/Button";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "120px",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div
        style={{
          padding: "0 120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "1E1E1E",
            display: "inline-flex",
          }}
        >
          タイトル
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: "40px" }}>
            <SearchBar></SearchBar>
          </div>
          <Button>投稿</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;