var n =1000;
var i=0;
while(n>50)
{
    i++;
    n/=2;
}
var num = i;
document.write('Получилось число: ' + n + '<br>');
document.write('Потребовалось итераций: ' + num);