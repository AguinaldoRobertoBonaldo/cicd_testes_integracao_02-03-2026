const math=require('../math');

test('subtract 100 - 50 igual a 50',() => {
    expect(math.subtract(100, 50)).toBe(50);
});