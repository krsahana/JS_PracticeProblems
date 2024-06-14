//Array Addition

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const arr1val = arr1[i];
        const arr2val = arr2[i];

        const addedValue = arr1val + arr2val;

        sum = sum + addedValue;


    }
    return sum;
}