var arr = [0, -1, -5, 8, 2, 10];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];

    }
}
document.write(sum);