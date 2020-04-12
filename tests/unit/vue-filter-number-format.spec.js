const numeral = require('numeral');
const numFormat = require('../../dist/vue-filter-number-format.min.js')(numeral);

test('Adds commas to big numbers', () => {
  expect(numFormat(69696969)).toBe('69,696,969');
});

test('Returns a string, even if no commas added', () => {
  expect(numFormat(123)).toBe('123');
  expect(numFormat('456')).toBe('456');
});

test('Accepts custom formats', () => {
  expect(numFormat(420, '0.000')).toBe('420.000');
  expect(numFormat(666, '0,0o')).toBe('666th');
});
