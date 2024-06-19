import { ImageResponse, Photo } from "@/domain/models/Images";
import { getPlaiceholder } from "plaiceholder";

export const placeholder = async (imageURL: string) => {
  const res = await fetch(imageURL);
  const buffer = await res.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return base64;
};

export default async function addBlurredDataUrl(
  images: ImageResponse
): Promise<Photo[]> {
  const imagePromises = images.photos.map((photo) =>
    placeholder(photo.src.large)
  );

  const photos = await Promise.all(imagePromises);

  const blurred = images.photos.map((photo, index) => ({
    ...photo,
    blurredDataUrl: photos[index],
  }));

  return blurred;
}
