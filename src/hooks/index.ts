export const useGetHomePageData = (products: Array<any>) => {
  const showCase = products.slice(0, 4);

  const p1 = showCase[0];
  const hero = {
    title: p1.title,
    link: "/product/" + p1.id,
    image: p1.images[0].fields.file.url,
  };

  return {
    hero,
    showCase,
  };
};
