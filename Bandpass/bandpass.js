const bandpass = (soundwave, upperBoundary, lowerBoundary) => {
  // const upperBoundary = upperBoundary;
  // const lowerBoundary = lowerBoundary;

  const filter = () => {
    soundwave.forEach((frequency, index) => {
      if (typeof frequency === 'string') {
        throw new Error('ArgumentError: soundwave can not contain strings');
      } else if (frequency < 0) {
        throw new Error('ArgumentError: frequencies must be positive values');
      } else if (frequency > upperBoundary) {
        soundwave[index] = upperBoundary;
      } else if (frequency < lowerBoundary) {
        soundwave[index] = lowerBoundary;
      }
    });
    return soundwave;
  };

  return filter(soundwave);
};

module.exports = bandpass;
