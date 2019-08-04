// determine if braces are valid

function bracesValid(str) {

    var pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };

    var arr = [];

    for (var i = 0; i < str.length; i++) {
        if (pairs[str[i]]) {
            arr.push(str[i]);
        }

        else {
            if (str[i] !== pairs[arr.pop()]) {
                return false
            }
        }
    }

    if (arr.length == 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(bracesValid("{[]}"))
console.log(bracesValid("{{}}]"))
console.log(bracesValid("a"))
console.log(bracesValid(""))
console.log(bracesValid("1"))
console.log(bracesValid([{}]))
console.log(bracesValid([]))