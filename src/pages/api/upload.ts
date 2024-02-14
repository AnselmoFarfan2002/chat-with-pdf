import type { APIRoute } from "astro";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_SECRET,
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return new Response("File not found", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const result = await uploadStream(uint8Array, { folder: "test" });

  return new Response("Hello world!");
};

const uploadStream = async (
  buffer: Uint8Array,
  options: { folder: string }
) => {
  return new Promise((res, rej) => {
    cloudinary.uploader.upload_stream(options, (err, result) => {
      if (result) return res(result);
      rej(err);
    });
  });
};
