document.write('Цикл While:'+ '<br>');
var i = 1;
var sum =0;
while (i <= 100) {
    sum += i;
    i += 1;
}
document.write('Сумма равна: '+ sum);
document.write('<br>');
sum = 0;
document.write('Цикл for:'+ '<br>');
for(i=1;i<=100;i++)
{
    sum += i;
}
document.write('Сумма равна: '+ sum);