var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
var day = 1;
for (var i = 0; i < arr.length; i++) {
    if (i == day) {
        document.write('<i>' + arr[i] + '</i> <br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}