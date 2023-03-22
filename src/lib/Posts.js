import AxiosClient from "../AxiosClient/AxiosClient";

export async function getPosts() {
  const res = await AxiosClient.get("/posts");
  const data = res.data;

  return data;
}
export async function getSinglePost(id) {
  const res = await AxiosClient.get(`/posts/${id}`);
  const data = res.data;

  return data;
}
export async function createPost(Title, Desc, username, category) {
  const res = await AxiosClient.post("/posts", {
    Title,
    Desc,

    username,
    category,
  });

  return res;
}
export async function deletePost(id) {
  const res = await AxiosClient.delete(`/posts/${id}`, {
    id,
  });
  return res;
}
export async function editPost(Title,id) {
  const res = await AxiosClient.put(`/posts/${id}`, {
    Title,
    id
    
    
    
  });
  return res;
}
