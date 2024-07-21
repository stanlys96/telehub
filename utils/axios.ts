import axios, { AxiosResponse } from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_API,
  headers: {
    Authorization: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
  },
});

export const fetcherStrapi = (url: string) =>
  axiosApi.get(url).then((res: AxiosResponse) => res);
