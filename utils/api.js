import { API_URL } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 7502315e007be7a68b7c68a7f03004fd8f1f243674144058a14941663831d093ce471262b09c1d9c0bcbc3899652ad2c349058934fd4484b6a2b434734de39001bf56faf270c7c07c2d815b96690778c616b05b99e56f893af74c745c970c110ff81c5b0204101230c35686f132d942fd21c80dba0e92d4dda854580a6e342cf",
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();
  return data;
};
