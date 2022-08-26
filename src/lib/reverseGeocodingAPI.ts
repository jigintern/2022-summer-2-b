import axios from "axios";

export const reverseGeocodingAPI = async (
  latitude: number, //緯度
  longitude: number //経度
) => {
  const url = `https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=${latitude}&lon=${longitude}`;
  try {
    const result = await axios.get(url);

    return result;
  } catch (error) {
    // リクエストに失敗した時の処理
    console.error(error);
  }
};
