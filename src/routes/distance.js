const getDistance = (app, fs) => {
  // Getting all of the accelerators
  app.get('/:distance', (req, res) => {
    const numberOfPeople = req.query.passengers;
    // TODO conversion from au to hu
    const distanceInSpace = req.params.distance - 2;
    const personalDistance = (2 * 3 + 5 * req.query.parking) * numberOfPeople;
    const htcDistance = 2 * 0.45 * Math.round(numberOfPeople / 5);
    const spaceflightPrice = distanceInSpace * numberOfPeople * 0.1;
    const cheapestRoute =
      Math.min(personalDistance, htcDistance) + spaceflightPrice;
    res.send(cheapestRoute);
  });
};

module.exports = getDistance;
