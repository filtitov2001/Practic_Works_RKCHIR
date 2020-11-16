var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (key in obj) {
    document.write(key + '\n');
    document.write(obj[key] + '\n');
}