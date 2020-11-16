var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (var i = 0; i < arr.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b>' + arr[i] + '</b> <br>')
    } else {
        document.write(arr[i] + '<br>')
    };
}