import { getImages } from "@/resources/images";
import Image from "@/services/image";
import Photo from "@/app/components/Photo";

export default async function Gallery() {
  const images = await getImages();

  if (!images.total_results)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const blurredImages = await Image.blur(images);

  const getPhotoSpans = (width: number, height: number) => {
    const aspectRatio = height / width;
    const galleryHeight = Math.ceil(250 * aspectRatio);
    const photosSpans = Math.ceil(galleryHeight / 10) + 1;
    return photosSpans;
  };

  return (
    <section>
      <ul className="px-1 m-3 grid grid-cols-gallery auto-rows-[10.2px]">
        {blurredImages.map((photo) => {
          const gridRow = `span ${getPhotoSpans(photo.width, photo.height)}`;

          return (
            <li
              key={photo.id}
              className="w-[250px] justify-self-center my-3"
              style={{ gridRow }}
            >
              <Photo sizes="250px" {...photo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
