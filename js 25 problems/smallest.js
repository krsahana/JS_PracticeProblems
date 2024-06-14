//Given an array of integers,fins the smallest integer

class SmallestInt {
    findSmall(arrayOfNumbers) {
        let small;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            const arrNum = arrayOfNumbers[i];
            if (i == 0) {
                small = arrNum;
            }
            if (arrNum < small) {
                small = arrNum;
            }
        }
        return small;
    }
}