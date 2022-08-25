import { Text, Image, SimpleGrid, BackgroundImage } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  getStorage,
  ref,
  uploadBytes,
  TaskState,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import React, { SetStateAction, Dispatch } from "react";

import { useDropzone } from "react-dropzone";

export type firebaseOnLoadProp = {
  bytesTransferred: number; //転送済みのバイト数の合計
  totalBytes: number; //アップロードされる予定のファイルのバイト数の合計
  state: TaskState; //アップロードの現在の状態
  // このほかにもmetadata,task,refがある
};

export const handleUpload = async (accepterdImg: any) => {
  //ボタンを押すと発火
  try {
    const storage = getStorage();
    // アップロード処理
    const storageRef = ref(storage, `/images/${accepterdImg[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, accepterdImg[0]);
    const ImgURL = await getDownloadURL((await uploadTask).ref);

    // アップロード化完了したら、画像のURLを返す
    return ImgURL;
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
    console.log("imageUrl", imageUrl);

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
    <div style={{ width: "480px", height: "480px" }}>
      {previews.length > 0 ? (
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={() => {
            props.setFiles;
          }}
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
          style={{
            width: "480px",
            height: "480px",
            display: "flex",
            alignItems: "center",
            color: "#ABABAB",
          }}
        >
          <Text align="center">
            ここに画像をドラッグするか、 クリックしてファイルを選択
          </Text>
        </Dropzone>
      )}
    </div>
  );
};
export default Upload;
