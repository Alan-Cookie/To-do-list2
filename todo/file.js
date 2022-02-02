// Создадим кнопку удаления дела
//Создадим переменную, которая будет получать элемент по тегнейм li
var myNodelist = document.getElementsByTagName('li');
//Создадим переменную для цикла
var i;
for (i = 0; i < myNodelist.length; i++) {
    var b = document.createElement("b");
    var txt = document.createTextNode("\u00D7");
    b.className = "close"
    //Здесь мы создали переменные span и txt
    //Сделали из txt значок крестика
    // Предали span класснейм close
    b.appendChild(txt);
    myNodelist[i].appendChild(b);
    // С помощью appenChild добавили их в конец элементов

}

// Сделаем так, чтобы кнопка удаления удаляла дело из списка
// Создадим переменную close, которая будет получать элементы по классу
var close = document.getElementsByClassName("close");
// Создадим цикл со значением close
var i;
for (i=0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Добавим возможность добавления дел
// Создадим функцию, которая будет создавать переменную li, которая будет создавать новый элемент li
function newElement() {
    var li = document.createElement('li');
    // Создадим переменную, которая будет получать значение нашего элемента по идентификатору myInput
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Сделаем так, чтобы если пользователь ничего не ввел в поле, ему выдавало предупреждение.
    // Для этого создадим условие через if else
    if (inputValue === '') {
        alert("Fill in the text field");
    }else {
        document.getElementById('myUL').appendChild(li);
    }
}