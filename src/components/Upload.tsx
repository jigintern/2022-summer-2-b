import { Text, Image, SimpleGrid } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import React, { useState, useCallback, useContext } from "react";

import { useDropzone } from "react-dropzone";
import firebase, { storage } from "src/firebase/firebase";

export type firebaseOnLoadProp = {
  bytesTransferred: number; //転送済みのバイト数の合計
  totalBytes: number; //アップロードされる予定のファイルのバイト数の合計
  state: firebase.storage.TaskState; //アップロードの現在の状態
  // このほかにもmetadata,task,refがある
};

const Upload: React.FC = () => {
  // https://mantine.dev/others/dropzone/#images-previews
  const [files, setFiles] = useState<File[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text align="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        mt={previews.length > 0 ? "xl" : 0}
      >
        {previews}
      </SimpleGrid>
    </div>
  );
};
export default Upload;
