import { Select, Textarea, TextInput } from "@mantine/core";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
// import Loader from "react-loader-spinner";
import { Button } from "src/components/Button";
import storage from "src/firebase/firebase";
import db from "src/firebase/firebasedb";
import { SubmissionProps } from "src/types/submission";

function Adddoc(comment: string, address: string, gender: string, age: string) {
  addDoc(collection(db, "post"), {
    comment: { comment },
    address: { address },
    gender: { gender },
    age: { age },
  });
}

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

  const [comment, setComment] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");

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
          style={{ borderRadius: "16px" }}
        />
      )}
      <div style={{ width: "520px" }}>
        <Textarea
          placeholder="コメントを入力"
          radius="md"
          minRows={14}
          maxRows={14}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <TextInput
          placeholder="住所を入力"
          radius="md"
          style={{
            padding: "40px 0 0 0",
          }}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
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
              radius="md"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setGenderData((current: any) => [...current, item]);

                return item;
              }}
              onChange={(e) => {
                setGender(e ?? "");
              }}
              style={{ width: "200px", marginTop: "32px" }}
            />
            <Select
              label="性別"
              data={ageData}
              placeholder="選択してください"
              nothingFound="Nothing found"
              radius="md"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setAgeData((current: any) => [...current, item]);

                return item;
              }}
              onChange={(e) => {
                setAge(e ?? "");
              }}
              style={{ width: "200px", marginTop: "32px" }}
            />
          </div>
          <Button
            onClick={() => {
              Adddoc(comment, address, gender, age);
            }}
          >
            投稿
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
