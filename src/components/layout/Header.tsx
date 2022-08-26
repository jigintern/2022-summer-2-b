import { useRouter } from "next/router";
import { useWindowSize } from "usehooks-ts";
import { Button } from "src/components/Button";
import SearchBar from "src/components/SeachBar";

const Header = () => {
  const router = useRouter();

  const { width, height } = useWindowSize();

  return (
    <header
      style={{
        width: "100%",
        height: "7vw",
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
        {width > 800 ? (
          <h1
            style={{
              fontSize: "2.5vw",
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
        ) : null}
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
