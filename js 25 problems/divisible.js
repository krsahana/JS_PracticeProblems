//create a functyion that checks if a number n is divisible by two numbers x and y.

function isDivisible(n, x, y) {
    const res1 = n / x;
    const res2 = n / y;

    if (res1 % 1 === 0 && res2 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}