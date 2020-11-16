var obj = {Коля: 200, Вася: 300, Петя: 400};

for (key in obj) {
    document.writeln(key + '- зарплата ' + obj[key] + ' долларов' + '<br>');
}