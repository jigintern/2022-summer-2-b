import { Button } from "src/components/Button";
import SearchBar from "src/components/SeachBar";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "105px",
      }}
    >
      <div
        style={{
          padding: "0px 120px",
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
            fontFamily: "Orbitron",
          }}
        >
          Insto Atlas
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: "40px" }}>
            <SearchBar />
          </div>
          <Button>投稿</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
