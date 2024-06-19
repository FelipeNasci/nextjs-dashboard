import { z } from "zod";

const BaseResponse = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  next_page: z.string().url().optional(),
  prev_page: z.string().url().optional(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string().url(),
  src: z.object({ large: z.string().url() }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const ImageSchema = BaseResponse.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;
export type ImageResponse = z.infer<typeof ImageSchema>;
