import { Select, Textarea, TextInput } from "@mantine/core";

import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  getDoc,
  runTransaction,
} from "firebase/firestore";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
// import Loader from "react-loader-spinner";
import { AiOutlineLeft } from "react-icons/ai";
import { Button } from "src/components/Button";
import Upload from "src/components/Upload";
import { handleUpload } from "src/components/Upload";
import { db } from "src/firebase/firebase";
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
  const [address, setAddress] = useState("鯖江市鯖江町1-1-1");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [geoPoint, setGeoPoint] = useState({
    latitude: 35.942916645564445,
    longitude: 136.19877108514828,
  });

  const router = useRouter();

  const submit = async () => {
    const imgURL = await handleUpload(files);
    const cardsRef = doc(db, "cards", "test");
    const reviewRef = doc(db, "cards", "test", "cards", "0");

    try {
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(cardsRef);
        if (!docSnap.exists()) {
          throw "Document does not exist!";
        }
        //同じ場所の時
        transaction.update(reviewRef, {
          reviews: arrayUnion([
            {
              id: 1,
              age: age,
              comment: comment,
              gender: gender,
              imgURL: imgURL,
            },
          ]),
        });

        //違う場所だった時
        // cardId
        // const cardId = docSnap.data().cards.length + 1;
        // transaction.update(cardsRef, {
        //   cards: arrayUnion({
        //     id: cardId,
        //     latitude: geoPoint.latitude,
        //     longitude: geoPoint.longitude,
        //     like: 0,
        //     address: address,
        //     reviews: [
        //       {
        //         id: 1,
        //         age: age,
        //         comment: comment,
        //         gender: gender,
        //         imgURL: imgURL,
        //       },
        //     ],
        //   }),
        // });
      });
      console.log("Transaction successfully committed!");
      router.push("/");
      alert("投稿完了");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }

    // if (comment != "" && address != "" && gender != "" && age != "") {
    //   console.log(files, comment, address, gender, age);
    //   const imgURL = await handleUpload(files);

    //   try {
    //     await runTransaction(db, async (transaction) => {
    //       const docSnap = await transaction.get(cardsRef);
    //       if (!docSnap.exists()) {
    //         throw "Document does not exist!";
    //       }
    //       const cardId = docSnap.data().cards.length + 1;
    //       transaction.update(cardsRef, {
    //         cards: arrayUnion({
    //           id: cardId,
    //           latitude: geoPoint.latitude,
    //           longitude: geoPoint.longitude,
    //           likes: 0,
    //           address: address,
    //           reviews: [
    //             {
    //               id: 1,
    //               age: age,
    //               comment: comment,
    //               gender: gender,
    //               imgURL: imgURL,
    //             },
    //           ],
    //         }),
    //       });
    //     });
    //     console.log("Transaction successfully committed!");
    //     router.push("/");
    //     alert("投稿完了");
    //   } catch (e) {
    //     console.log("Transaction failed: ", e);
    //   }
    // } else {
    //   alert("入力漏れがあります");
    // }
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
            <Select
              placeholder="住所を入力"
              searchable
              nothingFound="No options"
              radius="md"
              style={{
                padding: "40px 0 0 0",
              }}
              data={[""]}
              onChange={(e) => {
                setAddress(e ?? "");
              }}
            />
            <Select
              label="性別"
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
