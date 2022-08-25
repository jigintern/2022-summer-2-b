import { Text, Image, SimpleGrid, BackgroundImage } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import React, {
  useState,
  useCallback,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

import { useDropzone } from "react-dropzone";
import firebase, { storage } from "src/firebase/firebase";

export type firebaseOnLoadProp = {
  bytesTransferred: number; //転送済みのバイト数の合計
  totalBytes: number; //アップロードされる予定のファイルのバイト数の合計
  state: firebase.storage.TaskState; //アップロードの現在の状態
  // このほかにもmetadata,task,refがある
};

export const handleUpload = (accepterdImg: any) => {
  //ボタンを押すと発火
  try {
    // アップロード処理
    const uploadTask: any = storage
      .ref(`/images/${accepterdImg[0].name}`)
      .put(accepterdImg[0]);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, //タスクイベントの状態が変化した時
      function (snapshot: firebaseOnLoadProp) {
        //何％アップロードされているか表示する
        const progress: number =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function (error: any) {
        //エラーの種類を調べ、表示する
        // 失敗した時
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.error("許可がありません");
            break;

          case "storage/canceled":
            console.error("アップロードがキャンセルされました　");
            // User canceled the upload
            break;

          case "storage/unknown":
            console.error("予期せぬエラーが発生しました");
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      function () {
        //挙げられた画像のURL取得
        // 成功した時
        try {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then(function (downloadURL: string) {
              console.log(`ダウンロードしたURL${downloadURL}`);
            });
        } catch (error) {
          //switch (error.code) {
          //  case "storage/object-not-found":
          //    console.log("ファイルが存在しませんでした");
          //     break;
          //   case "storage/unauthorized":
          //     console.log("許可がありません");
          //     break;
          //   case "storage/canceled":
          //     console.log("キャンセルされました");
          //     break;
          //   case "storage/unknown":
          //     console.log("予期せぬエラーが生じました");
          //     break;
          // }
        }
      }
    );
  } catch (error) {
    console.log("エラーキャッチ", error);
  }
};

const Upload: React.FC<{
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}> = (props) => {
  // https://mantine.dev/others/dropzone/#images-previews

  // const [files, setFiles] = useState<File[]>([]);

  const previews = props.files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        style={{ objectFit: "cover" }}
      />
    );
  });

  return (
    <div>
      <div style={{ width: "480px", height: "480px" }}>
        {previews.length > 0 ? (
          <Dropzone
            accept={IMAGE_MIME_TYPE}
            onDrop={props.setFiles}
            style={{
              border: "none",
            }}
          >
            <SimpleGrid
            // cols={4}
            // breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            // mt="xl"
            >
              {previews}
            </SimpleGrid>
          </Dropzone>
        ) : (
          <Dropzone
            accept={IMAGE_MIME_TYPE}
            onDrop={props.setFiles}
            style={{ width: "480px", height: "480px" }}
          >
            <Text align="center">Drop images here</Text>
          </Dropzone>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 my-4 bg-gray-200 rounded-md"
        onClick={() => handleUpload(props.files)}
      >
        UPLOAD
      </button>
    </div>
  );
};
export default Upload;
