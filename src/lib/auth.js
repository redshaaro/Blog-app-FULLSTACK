import AxiosClient from "../AxiosClient/AxiosClient";
export async function register(UserName, Email, Password) {
  const res = await AxiosClient.post("/auth/register", {
    Email,
    UserName,
    Password,
  });

  return res;
}
export async function login(UserName, Password) {
  const res = await AxiosClient.post("/auth/login", {
    UserName,
    Password,
  });

  return res;
}
