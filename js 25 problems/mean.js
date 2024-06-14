//Get the mean of an array

function getAverage(score) {
    const count = score.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + score[i];
    }
    const avg = sum / count;
    const roundDown = Math.floor(avg);
    return roundDown;
}