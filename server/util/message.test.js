var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'test user';
    var text = 'hello message';
    var msgObj = generateMessage(from, text);
    expect(msgObj.createdAt).toBeA('number');
    expect(msgObj).toInclude({ from, text });
  });
});
