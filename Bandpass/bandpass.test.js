const bandpass = require('./bandpass');

describe('bandpass', () => {
  it('takes a soundwave array, and returns it', () => {
    expect(bandpass([40, 60, 40, 60, 40])).toEqual([40, 60, 40, 60, 40])
  })
})
