//Reverse string

function solution(str) {
    const arr = str.split("");
    const reversed = arr.reverse();
    const final = reversed.join("")

    return final;

    //return str.split("").reverse().join("");
}