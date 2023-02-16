export default class ErrorRepository {
  constructor() {
    this.errMap = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not found'],
      [405, 'Method Not Allowed'],
    ]);
  }

  translate(code) {
    if (this.errMap.has(code)) {
      return this.errMap.get(code);
    }
    return 'Unknown error';
  }
}
