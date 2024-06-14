//function whoch repeats the given stringg exactly count times

function repeatStr(num, str) {//num is the count
    let starterstr = '';
    for (let i = 0; i < num; i++) {
        starterstr = starterstr + str;
    }
    return starterstr;
}