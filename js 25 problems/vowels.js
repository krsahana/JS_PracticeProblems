//Return the number of vowels in the given string

function getCount(str) {
    var count = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                count++;
            }
        }
    }
    return count;
}