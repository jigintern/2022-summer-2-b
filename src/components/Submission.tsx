import { Select } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
// import Loader from "react-loader-spinner";
import { Button } from "src/components/Button";
import { SubmissionProps } from "src/types/submission";

const Submission: React.FC<SubmissionProps> = (props) => {
  const [genderData, setGenderData] = useState([
    { value: "male", label: "男性" },
    { value: "female", label: "女性" },
    { value: "otherGender", label: "その他" },
  ]);
  const [ageData, setAgeData] = useState([
    { value: "10", label: "10代" },
    { value: "20", label: "20代" },
    { value: "30", label: "30代" },
    { value: "40", label: "40代" },
    { value: "50", label: "50代" },
    { value: "60", label: "60代" },
    { value: "70", label: "70代以上" },
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        padding: "0 120px",
      }}
    >
      {/* {!imgURL && <Loader type="Oval" color="ABABAB" height={30} width={30} />} */}
      {props.imgURL && (
        <Image
          src={props.imgURL}
          alt=""
          width={600}
          height={600}
          objectFit="contain"
        />
      )}
      <div style={{ width: "520px" }}>
        <textarea
          placeholder="コメントを入力"
          value={props.comment}
          style={{
            height: "240px",
            padding: "52px",
            border: "1px solid #ABABAB",
            borderRadius: "8px",
            width: "416px",
          }}
        />
        <form
          style={{
            boxSizing: "border-box",
            marginTop: "40px",
          }}
        >
          <input
            type="text"
            name="keyword"
            placeholder="住所を入力"
            value={props.address}
            autoFocus
            style={{
              display: "block",
              padding: "8px 20px",
              fontSize: "16px",
              fontWeight: "300",
              outline: "none",
              border: "1px solid ABABAB",
              background: "white",
              borderRadius: "8px",
              width: "480px",
            }}
          />
        </form>
        <div
          style={{
            display: " flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Select
              label="年齢"
              data={genderData}
              placeholder="選択してください"
              nothingFound="Nothing found"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setGenderData((current: any) => [...current, item]);

                return item;
              }}
              value={props.gender}
              style={{ width: "200px", marginTop: "32px" }}
            />
            <Select
              label="性別"
              data={ageData}
              placeholder="選択してください"
              nothingFound="Nothing found"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setAgeData((current: any) => [...current, item]);

                return item;
              }}
              value={props.age}
              style={{ width: "200px", marginTop: "32px" }}
            />
          </div>
          <Button>投稿</Button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
