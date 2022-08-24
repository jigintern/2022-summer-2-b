// 参考記事
//https://memo.appri.me/programming/gsi-geocoding-api#%E3%82%B8%E3%82%AA%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0API

import axios from "axios";

export const geocodingAPI = async (adress: string) => {
  const encodedAdress = encodeURI(adress);
  const makeUrl = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=";
  const url = makeUrl + encodedAdress;
  try {
    const result = await axios.get(url);

    return result;
  } catch (error) {
    // リクエストに失敗した時の処理
    console.error(error);
  }
};
