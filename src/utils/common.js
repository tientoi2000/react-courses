export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};
