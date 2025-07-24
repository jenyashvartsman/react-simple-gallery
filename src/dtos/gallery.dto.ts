import type { ImageDto } from "./image.dto";

export interface GalleryDto {
  title: string;
  description: string;
  coverImage: ImageDto;
  images: ImageDto[];
}
