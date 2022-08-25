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
  //ドロップされた画像の処理についての関数
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [src, setSrc] = useState("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    try {
      setMyFiles([...acceptedFiles]);
      setClickable(true);
      handlePreview(acceptedFiles);
    } catch (error) {
      alert(error);
    }
  }, []);

  const onDropRejected = () => {
    //ドロップが失敗した際に実行される
    alert("画像のみ受け付けることができます。");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
  });

  const handleUpload = (accepterdImg: any) => {
    //ボタンを押すと発火
    try {
      // アップロード処理
      const uploadTask: any = storage
        .ref(`/images/${myFiles[0].name}`)
        .put(myFiles[0]);

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

  const next = (snapshot: { bytesTransferred: number; totalBytes: number }) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`${percent}% done`);
    console.log(snapshot);
  };

  const error = (error: any) => {
    alert(error);
  };

  const handlePreview = (files: any) => {
    if (files === null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  return (
    <div>
      <div className="w-4/5 px-4 py-2 mx-auto my-4 text-center rounded-md">
        <div
          className="bg-gray-400 border-2 border-gray-500 rounded-md"
          {...getRootProps()}
        >
          {/* この中をタップすれば画像を選択できる */}
          <input {...getInputProps()} />
          {myFiles.length === 0 ? (
            <p className="py-4">画像を選択またはドラッグ＆ドロップできます</p>
          ) : (
            <div>
              {myFiles.map((file: File) => (
                <React.Fragment key={file.name}>
                  {src && <img src={src} />}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <button
          disabled={!clickable}
          type="submit"
          className="px-4 py-2 my-4 bg-gray-200 rounded-md"
          onClick={() => handleUpload(myFiles)}
        >
          UPLOAD
        </button>
      </div>
    </div>
  );
};
export default Upload;
