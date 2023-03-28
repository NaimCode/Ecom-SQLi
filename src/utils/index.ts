export const getImagesUrl = (images: Array<any>) => {
  return images.map((image: any) => image.fields.file.url);
};