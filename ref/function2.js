function showadd() {
  document.getElementById('addingbox').style.display = "block";
  document.getElementById('deletingbox').style.display = "none";
}

function showdelete() {
  document.getElementById('deletingbox').style.display = "block";
  document.getElementById('addingbox').style.display = "none";
}

function hideadd() {
  document.getElementById('addingbox').style.display = "none";
}

function hidedelete() {
  document.getElementById('deletingbox').style.display = "none";
}
function additem(v) {
  if (v == 0) {
    var title = document.getElementById('text3').value;
    var link = document.getElementById('text4').value;
  } else {
      listnumber='listnumber'+v;
    var title = document.getElementById(listnumber).innerHTML;
    var link = document.getElementById(listnumber).href;
  }
  if (link.substring(0, 4) !== ("http" || "file")) {
    link = "http://" + link
  }
  for (i = 1; i <= 20; i++) {
    item = 'item' + i;
    content = 'content' + i;
    name = "[Link" + i + "]:  "
    if (document.getElementById(item).innerHTML == "") {
      document.getElementById(item).innerHTML = name + title;
      document.getElementById(item).href = link;
      localStorage[item] = name + title;
      localStorage[content] = link;
      i = 22;
    }
  }
  if (i == 21) {
    alert("The list is full, please delete some items.");
  }
  window.makelist();
}
function deleteitem() {
  number = document.getElementById('linknumber').value;
  item = 'item' + number;
  content = 'content' + number;
  localStorage[item] = "";
  localStorage[content] = "";
  document.getElementById(item).innerHTML = "";
  document.getElementById(item).href = "";
}

function makelist() {
  for (i = 1; i <= 20; i++) {
    item = 'item' + i;
    content = 'content' + i;
    if (localStorage[item]) {
      document.getElementById(item).innerHTML = localStorage[item];
      document.getElementById(item).href = localStorage[content];
    }
  }
}
