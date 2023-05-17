export const descountPrice = (originalPrice, dicountPrice) => {
  const discount = originalPrice - dicountPrice;
  const dicountPercentage = (discount / originalPrice) * 100;
  return dicountPercentage.toFixed(2);
};
