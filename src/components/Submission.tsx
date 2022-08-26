import { Select, Textarea, TextInput } from "@mantine/core";
import { AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
// import Loader from "react-loader-spinner";
import { AiOutlineLeft } from "react-icons/ai";
import { Button } from "src/components/Button";
import Upload from "src/components/Upload";
import { handleUpload } from "src/components/Upload";
import { geocodingAPI } from "src/lib/geocodingAPI";
import { SubmissionProps } from "src/types/submission";

const Submission: React.FC<SubmissionProps> = () => {
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
  const [files, setFiles] = useState<File[]>([]);
  const [comment, setComment] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  // @ts-ignore
  const [GeoJSON, setGeoJSON] =
    useState<Promise<AxiosResponse<any, any> | undefined>>();

  const router = useRouter();

  const submit = () => {
    if (comment != "" && address != "" && gender != "" && age != "") {
      console.log(files, comment, address, gender, age);
      handleUpload(files);
      router.push("/");
      alert("投稿完了");
    } else {
      alert("入力漏れがあります");
    }
  };
  const changeAddress = async (word: string) => {
    console.log(word);
    setGeoJSON(geocodingAPI(word));
    let json = await GeoJSON;
    if (json?.data.length != 0) {
      console.log(json?.data[0].properties.title);
    }

    // console.log(geometry);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "72vw" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <AiOutlineLeft
            style={{
              fontSize: "1rem",
            }}
            onClick={() => {
              router.push("/");
            }}
          />
          <p style={{ color: "#767676" }}>投稿作成</p>
          <p style={{ fontSize: "1rem" }}>　</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {/* {!imgURL && <Loader type="Oval" color="ABABAB" height={30} width={30} />} */}
          {/* {props.imgURL && (
            <Image
              src={props.imgURL}
              alt=""
              width={480}
              height={480}
              objectFit="contain"
              style={{ borderRadius: "16px" }}
            />
          )} */}
          <Upload files={files} setFiles={setFiles} />
          <div
            style={{
              width: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Textarea
              placeholder="コメントを入力"
              radius="md"
              minRows={10}
              maxRows={10}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <TextInput
              placeholder="住所を入力"
              radius="md"
              onChange={(e) => {
                setAddress(e.target.value);
                changeAddress(e.target.value);
              }}
            />
            <Select
              label="性別"
              data={genderData}
              placeholder="選択してください"
              nothingFound="Nothing found"
              radius="md"
              searchable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setGenderData((current: any) => [...current, item]);

                return item;
              }}
              onChange={(e) => {
                setGender(e ?? "");
              }}
              style={{
                width: "200px",
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
              <Select
                label="年齢"
                data={ageData}
                placeholder="選択してください"
                nothingFound="Nothing found"
                radius="md"
                searchable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                  const item = { value: query, label: query };
                  setAgeData((current: any) => [...current, item]);

                  return item;
                }}
                onChange={(e) => {
                  setAge(e ?? "");
                }}
                style={{
                  width: "200px",
                }}
              />
              <Button onClick={submit}>投稿</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
