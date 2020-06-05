const bandpass = (soundwave, upperBoundary, lowerBoundary) => {
  if (soundwave.length < 5) {
    throw new Error(
      'ArgumentError: Soundwaves must contain at least 5 frequencies'
    );
  }
  const filter = () => {
    soundwave.forEach((frequency, index) => {
      if (typeof frequency === 'string') {
        throw new Error('ArgumentError: Soundwave can not contain strings');
      } else if (frequency < 0) {
        throw new Error('ArgumentError: Frequencies must be positive values');
      } else if (frequency > upperBoundary) {
        soundwave[index] = upperBoundary;
      } else if (frequency < lowerBoundary) {
        soundwave[index] = lowerBoundary;
      }
    });
    return soundwave;
  };

  return filter();
};

module.exports = bandpass;
