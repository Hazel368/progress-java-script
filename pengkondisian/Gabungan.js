var s = '';

for (var i = 10; i > 1; i--) {
    for (var j = i; j > 1; j--) {
        s += '*';
    }
    s += '\n';
}

console.log(s);
