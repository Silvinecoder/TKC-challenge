const getDistance = (app) => {
  // Getting all of the accelerators
  app.get('/:distance', (req, res) => {
    const numberOfPeople = req.query.passengers;

    // Distance that we want to do in total, minus the round trip of the accelerator
    const distanceInSpace = req.params.distance - 2;
    const personalPrice = (2 * 3 + 5 * req.query.parking) * numberOfPeople;
    const htcPrice = 2 * 0.45 * Math.round(numberOfPeople / 5);

    // The cost of traveling throughout space
    const spaceFlightPrice = distanceInSpace * numberOfPeople * 0.1;

    // Checking which vehicle is cheaper
    const cheapestVehiclePrice = Math.min(personalPrice, htcPrice);

    const vehicle = cheapestVehiclePrice === personalPrice ? 'personal' : 'htc';

    const totalPrice = cheapestVehiclePrice + spaceFlightPrice;

    res.send(totalPrice, vehicle);
  });
};

module.exports = getDistance;
