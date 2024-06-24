import { ImageResponse } from "@/domain/models/Images";
import Image from "@/services/image";

const DEFAULT_RESOURCE = "/curated";

const fallback = {
  total_results: 0,
  page: 0,
  per_page: 0,
  photos: [],
  next_page: "",
  prev_page: "",
};

function buildQuery(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

async function getImages(filter: string = ""): Promise<ImageResponse> {
  let resource = filter ? `/search` : DEFAULT_RESOURCE;

  const params = { query: filter, per_page: "200" };

  resource = resource.concat(`?${buildQuery(params)}`);

  try {
    const response = await Image.fetch<ImageResponse>(resource);

    if (!response.total_results) return fallback;

    return response;
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

export { getImages };
