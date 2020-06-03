var bandpass = (soundwave, upperBoundary, lowerBoundary) => {
  var upperBoundary = upperBoundary;
  var lowerBoundary = lowerBoundary;

  const filter = soundwave => {
    soundwave.forEach((frequency, index) => {
       frequency > upperBoundary ? soundwave[index] = upperBoundary : null
       frequency < lowerBoundary ? soundwave[index] = lowerBoundary : null
    })
    return soundwave
  }

  return filter(soundwave)
}

module.exports = bandpass
