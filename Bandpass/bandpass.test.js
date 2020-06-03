const bandpass = require('./bandpass');

describe('bandpass', () => {
  it('takes a soundwave array, and returns it', () => {
    expect(bandpass([40, 60, 40, 60, 40], 80, 20)).toEqual([
      40,
      60,
      40,
      60,
      40,
    ]);
  });

  describe('when a soundwave contains a frequency that breaches the upper boundary', () => {
    it('sets a single frequency to the upper boundary', () => {
      expect(bandpass([40, 100, 40, 60, 40], 80, 20)).toEqual([
        40,
        80,
        40,
        60,
        40,
      ]);
    });

    it('sets multiple frequencies to the upper boundary', () => {
      expect(bandpass([40, 100, 40, 100, 40], 80, 20)).toEqual([
        40,
        80,
        40,
        80,
        40,
      ]);
    });
  });

  describe('when a soundwave contains a frequency that breaches the lower boundary', () => {
    it('sets a single frequency to the lower boundary', () => {
      expect(bandpass([10, 60, 40, 60, 40], 80, 20)).toEqual([
        20,
        60,
        40,
        60,
        40,
      ]);
    });

    it('sets multiple frequencies to the lower boundary', () => {
      expect(bandpass([10, 60, 10, 60, 40], 80, 20)).toEqual([
        20,
        60,
        20,
        60,
        40,
      ]);
    });
  });

  describe('when a soundwave contains frequenices that breach both the upper and lower boundary', () => {
    it('sets both frequencies to their respective boundary', () => {
      expect(bandpass([10, 100, 40, 60, 40], 80, 20)).toEqual([
        20,
        80,
        40,
        60,
        40,
      ]);
    });
  });

  describe('when a soundwave contains a invalid data type', () => {
    it('throws an arguement error when the soundwave contains a string', () => {
      const message = 'ArgumentError: Soundwave can not contain strings';
      expect(() => {
        bandpass([40, 60, '', 60, 40], 80, 20);
      }).toThrowError(message);
    });
    it('throws an arguement error when a freqency is a negative value', () => {
      const message = 'ArgumentError: Frequencies must be positive values';
      expect(() => {
        bandpass([40, 60, -40, 60, 40], 80, 20);
      }).toThrowError(message);
    });
    it('throws an arguement error when the soundwave contains less than 5 frequencies', () => {
      const message =
        'ArgumentError: Soundwaves must contain at least 5 frequencies';
      expect(() => {
        bandpass([40, 60, 60, 40], 80, 20);
      }).toThrowError(message);
    });
  });
});
