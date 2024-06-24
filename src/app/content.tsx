import Gallery from "@/app/components/Gallery";
import { getImages } from "@/resources/images";
import Image from "@/services/image";

interface Props {
  filter: string;
}

export default async function Content({ filter }: Props) {
  const images = await getImages(filter);

  if (!images.total_results) return <div>No results found</div>;

  const blurred = await Image.blur(images);

  // @ts-expect-error Server Component
  return <Gallery photos={blurred} />;
}
