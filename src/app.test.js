const { calculateDiscount } = require('./app');

describe('Kiểm thử hàm tính toán giảm giá (calculateDiscount)', () => {
  test('Tính đúng giá sau khi giảm 20% cho sản phẩm 100k', () => {
    expect(calculateDiscount(100000, 20)).toBe(8);
  });

  test('Báo lỗi khi truyền tỷ lệ giảm giá âm', () => {
    expect(() => calculateDiscount(100000, -10)).toThrow('Tỷ lệ giảm giá không hợp lệ');
  });
});