interface Car{
    make:string;
    model:string;
    year:number;
    honk ():string
}



let car:Car[]=[{
    make: 'Japan',
    model: 'Toyota',
    year: 2010,
    honk() {
        return `don't honk`
    },
},{
    make: 'korya',
    model: 'honday',
    year: 2022,
    honk() {
        return `don't honk`
    },
},{
    make: 'US',
    model: 'GMC',
    year: 2018,
    honk() {
        return `don't honk`
    },
}]

for (let i = 0; i < car.length; i++) {
    console.log(`The information of the car: ${car[i].make}, ${car[i].model}, ${car[i].year}`);

}

for (let i = 0; i < car.length; i++) {
    console.log(car[i].honk());

}
for (let i = 0; i < car.length; i++) {
    console.log(`the year of car is: ${car[i].year}`);

}

for (let i = 0; i < car.length; i++) {
    console.log(`the model of car is: ${car[i].model}`);

}




