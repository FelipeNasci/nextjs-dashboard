import Photo from "./Photo";
import { Photo as IPhoto } from "../../domain/models/Images";

interface Props {
  photos: IPhoto[];
}

export default async function Gallery({ photos }: Props) {
  const getPhotoSpans = (width: number, height: number) => {
    const aspectRatio = height / width;
    const galleryHeight = Math.ceil(250 * aspectRatio);
    const photosSpans = Math.ceil(galleryHeight / 10) + 1;
    return photosSpans;
  };

  return (
    <section>
      <ul className="px-1 m-3 grid grid-cols-gallery auto-rows-[10.2px]">
        {photos.map((photo) => {
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
