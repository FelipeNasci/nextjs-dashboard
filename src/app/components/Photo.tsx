import Image from "next/image";
import { Photo as PhotoInterface } from "@/domain/models/Images";

interface Props extends Omit<PhotoInterface, "url"> {
  sizes: string;
}

function Photo({ id, src, alt, blurredDataUrl, width, height, sizes }: Props) {
  return (
    <div className="rounded-xl relative overflow-hidden">
      <Image
        className="hover:opacity-75"
        key={id}
        width={width}
        height={height}
        src={src.large}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurredDataUrl}
      />
    </div>
  );
}

export default Photo;
