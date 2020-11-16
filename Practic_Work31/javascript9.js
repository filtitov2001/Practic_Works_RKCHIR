document.write('Цикл While:'+ '<br>');
var i = 0;
while (i <= 100) {
    if(i%2 == 0)
    {
        document.write(i+'<br>');
    }
    i += 1;
}
document.write('<br>');
document.write('Цикл for:'+ '<br>');
for(i=0;i<=100;i++)
{
    if(i%2 == 0)
    {
        document.write(i+'<br>');
    }
}