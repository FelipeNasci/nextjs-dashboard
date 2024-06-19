import { fetchImages } from "./image-bucket";
import imageBlur from "./placeholder";

export default class Image {
  public static fetch = fetchImages;
  public static blur = imageBlur;
}
