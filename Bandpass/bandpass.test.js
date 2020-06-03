const bandpass = require('./bandpass');

describe('bandpass', () => {
  it('takes a soundwave array, and returns it', () => {
    expect(bandpass([40, 60, 40, 60, 40], 80, 20)).toEqual([40, 60, 40, 60, 40])
  })

  describe('when a soundwave contains a frequency that breaches the upper boundary', () => {
    it("sets a single frequency to the upper boundary", () => {
      expect(bandpass([40, 100, 40, 60, 40], 80, 20)).toEqual([40, 80, 40, 60, 40])
    })

    it("sets multiple frequencies to the upper boundary", () => {
      expect(bandpass([40, 100, 40, 100, 40], 80, 20)).toEqual([40, 80, 40, 80, 40])
    })
  })
})
