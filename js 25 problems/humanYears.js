// i have a cat and a dog, i got them at the same time as kitten/puppy.That was humanyears years ago. return their respective ages now as [humanYears,catYears,dogYears]

var catDog = function (humanYears) {
    let catsAge;
    let dogsAge;
    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }
    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }
    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}