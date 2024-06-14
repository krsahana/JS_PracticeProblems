// our football team finished the championship.the result of each match looks like "x:y", Results of all matches are recorded in the collection.
//write a function that takes such collection and counts the points of our team in the championship. rules: if x>y- 3pts,if x<y-o pts,ifx=y -1 pts.

function points(gamesArray) {
    let totalPoints = 0;

    for (let i = 0; i < gamesArray.length; i++) {
        const value = gamesArray[i];
        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if (x > y) {
            totalPoints = totalPoints + 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}