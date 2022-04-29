//1.

arrowMyFunction = (num1, num2) => num1 + num2;

console.log(arrowMyFunction(10, 5))

//2.

arrowAdd100 = money => money + 100

console.log(arrowAdd100(400))

//3.

countLetters = (string, letter) => {
    if (letter.toUpperCase() === letter) {
        string = string.toUpperCase();
    } else {
        string = string.toLowerCase();
    }
    return string.split(letter).length - 1;
};

console.log(countLetters("Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them, but when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang, and although his airbending skills are great, he has a lot to learn before he's ready to save anyone. But I believe Aang can save the world.", 'a'));