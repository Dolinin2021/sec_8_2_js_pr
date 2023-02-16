import ErrorRepository from '../ErrRepo';

test.each([
  { data: 400, expected: 'Bad Request' },
  { data: 401, expected: 'Unauthorized' },
  { data: 402, expected: 'Payment Required' },
  { data: 403, expected: 'Forbidden' },
  { data: 404, expected: 'Not found' },
  { data: 405, expected: 'Method Not Allowed' },
])('correct work of the translate method', ({ data, expected }) => {
  const errRepo = new ErrorRepository();
  const result = errRepo.translate(data);
  expect(result).toEqual(expected);
});

test.each([
  406,
  407,
  408,
  409,
  410,
  'abc',
])('unknown error', (code) => {
  const errRepo = new ErrorRepository();
  const result = errRepo.translate(code);
  expect(result).toEqual('Unknown error');
});
