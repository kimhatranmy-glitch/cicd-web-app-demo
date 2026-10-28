function calculateDiscount(price, discountPercent) {
  if (typeof price !== 'number' || typeof discountPercent !== 'number') {
    throw new Error('Tham số đầu vào phải là số');
  }
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Tỷ lệ giảm giá không hợp lệ');
  }
  return price - (price * (discountPercent / 100));
}

module.exports = { calculateDiscount };