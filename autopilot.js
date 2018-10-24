function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }
}

function addCar(cars, newCar) {
  cars.push(newCar);
  return 'Adding new car to fleet. Fleet size is now ' + cars.length + '.';
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10
  return 'Picked up passenger. Car now has ' + car.passengers + ' passengers.'
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return 'Filled up to ' + car.gas + '% on gas from ' + oldGas + '%.';
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(myCar);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return 'Drove to ' + car.city + '. Remaining gas: ' + car.gas + '%.';
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' + previousPassengers + ' passengers.';
}

function act(car) {
  var distanceBetweenCities = 50

  if (car.gas < 20) {
    return fillUpGas(car);

  } else if (car.passengers < 3) {
    return pickUpPassenger(car);

  } else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }
    droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + ' ' + passengersDropped;
  }
}

function commandFleet(cars) {
  for (let i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    console.log('Car ' + (i + 1) + ':' + action);
  }
  console.log('---');
}

function add_one_car_per_day(cars, numDays) {
  for (let i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

var cars = [];
add_one_car_per_day(cars, 10);
