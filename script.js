//function init() {
//var name = "Mozilla"; // name - локальная переменная, созданная в init
//function displayName() { // displayName() - внутренняя функция, замыкание
//  alert (name); // displayName() использует переменную, объявленную в родительской функции
//}
//displayName();
//}
//init();
console.log(this)

function abc() {
    console.log(this)
    this.style.background = 'red';

}

document.querySelector('p').onclick = abc