// �������� ������ �������� ����
//�������� ����������, ������� ����� �������� ������� �� ������� li
var myNodelist = document.getElementsByTagName('li');
//�������� ���������� ��� �����
var i;
for (i = 0; i < myNodelist.length; i++) {
    var b = document.createElement("b");
    var txt = document.createTextNode("\u00D7");
    b.className = "close"
    //����� �� ������� ���������� span � txt
    //������� �� txt ������ ��������
    // ������� span ��������� close
    b.appendChild(txt);
    myNodelist[i].appendChild(b);
    // � ������� appenChild �������� �� � ����� ���������

}

// ������� ���, ����� ������ �������� ������� ���� �� ������
// �������� ���������� close, ������� ����� �������� �������� �� ������
var close = document.getElementsByClassName("close");
// �������� ���� �� ��������� close
var i;
for (i=0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// ������� ����������� ���������� ���
// �������� �������, ������� ����� ��������� ���������� li, ������� ����� ��������� ����� ������� li
function newElement() {
    var li = document.createElement('li');
    // �������� ����������, ������� ����� �������� �������� ������ �������� �� �������������� myInput
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    // ������� ���, ����� ���� ������������ ������ �� ���� � ����, ��� �������� ��������������.
    // ��� ����� �������� ������� ����� if else
    if (inputValue === '') {
        alert("Fill in the text field");
    }else {
        document.getElementById('myUL').appendChild(li);
    }
}