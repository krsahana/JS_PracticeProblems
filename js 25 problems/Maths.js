//create a function that does basic mathematical functions
function basicOp(op, v1, v2) {
    const opstr = v1 + op + v2;
    const result = eval(opstr);
    return result;
}
