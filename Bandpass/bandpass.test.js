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
  
  describe('when a soundwave contains a frequency that breaches the lower boundary', () => {
    it("sets a single frequency to the lower boundary", () => {
      expect(bandpass([10, 60, 40, 60, 40], 80, 20)).toEqual([20, 60, 40, 60, 40])
    })

    it("sets multiple frequencies to the lower boundary", () => {
      expect(bandpass([10, 60, 10, 60, 40], 80, 20)).toEqual([20, 60, 20, 60, 40])
    })
  })
})
