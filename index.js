var car = [{
        make: 'Japan',
        model: 'Toyota',
        year: 2010,
        honk: function () {
            return "don't honk";
        }
    }, {
        make: 'korya',
        model: 'honday',
        year: 2022,
        honk: function () {
            return "don't honk";
        }
    }, {
        make: 'US',
        model: 'GMC',
        year: 2018,
        honk: function () {
            return "don't honk";
        }
    }];
for (var i = 0; i < car.length; i++) {
    console.log("The information of the car: ".concat(car[i].make, ", ").concat(car[i].model, ", ").concat(car[i].year));
}
for (var i = 0; i < car.length; i++) {
    console.log(car[i].honk());
}
for (var i = 0; i < car.length; i++) {
    console.log("the year of car is: ".concat(car[i].year));
}
for (var i = 0; i < car.length; i++) {
    console.log("the model of car is: ".concat(car[i].model));
}
