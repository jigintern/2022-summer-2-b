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
