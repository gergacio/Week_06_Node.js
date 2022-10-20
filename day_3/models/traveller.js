const Traveller = function(journeys) {
  this.journeys = journeys;
};
//big three questions:!!!!!
//What higher order function back to us!
//What parameters callback function will get!
//What callback function return!

Traveller.prototype.getJourneyStartLocations = function() {
  //need same size arr but transformed so we choose map()
  //invoke map() on given array of journeys (journeys property hold all journeys passed from outside)
  //every iteration grap given journey and journey.startLocation push it in new array
  const allStartLocationJourney = this.journeys.map((journey) => {
    return journey.startLocation
  });
  return allStartLocationJourney;
};

Traveller.prototype.getJourneyEndLocations = function () {
  //same like prev func but for end locations
  const allEndLocationJourney = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return allEndLocationJourney;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  //need back whole objects (journeys) but filtered by property transport
  //filter by given condition (property transport to match given string transport from outside)
  const allJourneysByTransport = this.journeys.filter((journey) => {
    //if condition True ..journey(whole obj) pushed into new array 
    return journey.transport === transport;
  });
  return allJourneysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  //same like prev but filtered by distance (match with distance property
  const allJourneysByMiniDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return allJourneysByMiniDistance;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  //use reduce to calculate end have back a single value
  //give to callback 2 params: accumulator and current
  const totalDistanceTravelled = this.journeys.reduce((runTotal, journey) => {
    //runTotal is accumulator (start with 0 and update on each iteration with current journey distance)
    runTotal += journey.distance;
    return runTotal;
    //when return runTotal we update result which .reduce store in totalDistanceTravelled in the end!)
  },0);
  return totalDistanceTravelled;

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  //transform array of journey objects in array of journeys mode transport,than grap uniqie ones
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport
  });
  //make new set obj (set hold unique values...than turn it in array with (...) than return it back)
  const uniquemodesOfTransport = [...new Set(modesOfTransport)];
  return uniquemodesOfTransport;
  

  

};


module.exports = Traveller;
