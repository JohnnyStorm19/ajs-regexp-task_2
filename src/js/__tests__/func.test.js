import replacer from '../replacer';

test.each(
  [
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
    ['+79600000000', '+79600000000'],
  ],
)('testing number %s', (num, expected) => {
  const res = replacer(num);
  expect(res).toBe(expected);
});
