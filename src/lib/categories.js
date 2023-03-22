import AxiosClient from "../AxiosClient/AxiosClient";
export async function getCategories() {
  const res = await AxiosClient.get("/categories");
  const data = res.data;

  return data;
}
