import { Http } from "@/services/http";

const BASE_URL = "https://api.pexels.com/v1";

const params = {
  headers: { Authorization: `${process.env.NEXT_PUBLIC_PEXELS_API_KEY}` },
};

export const fetchImages = <T>(resource: string) => {
  const http = new Http(BASE_URL, params);
  return http.get<T>(resource);
};
