var arr = ['10', '20','30', '50', '235', '3000'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
        document.write(arr[i] + '<br>');
    }
}