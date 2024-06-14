//return sum of positives

function positiveSum(arr) {
    let sum = 0;
    for (leti = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}