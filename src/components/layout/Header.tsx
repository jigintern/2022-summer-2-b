import { useRouter } from "next/router";
import { Button } from "src/components/Button";
import SearchBar from "src/components/SeachBar";

const Header = () => {
  const router = useRouter();

  return (
    <header
      style={{
        width: "100%",
        height: "105px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          Insto Atlas
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: "40px" }}>
            <SearchBar />
          </div>
          <Button
            onClick={() => {
              router.push("/submission");
            }}
          >
            新規投稿
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
