
function noSpace(str) {
    const arr = str.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const trimmed = arr[i].trim();
        newArr.push(trimmed);
    }
    const final = newArr.join("");
    return final;
}