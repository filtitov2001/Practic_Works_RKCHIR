var str = '123456';
var str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (str1 == str2) {
    document.write("Да")
} else {
    document.write("Нет");
}