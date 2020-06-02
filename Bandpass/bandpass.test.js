const Bandpass = require('./bandpass');

  describe('Bandpass', () => {
    it('should return a given soundwave', () => {
      expect(Bandpass([40, 60, 40, 60, 40])).toEqual([40, 60, 40, 60, 40])
    })
  })
  