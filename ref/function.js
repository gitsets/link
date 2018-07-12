/*global variables*/
var searchlan;
var searchci;
var boxid;
var linktochange;
var clickhover;
var boxclick;
var selectedtab;
var Newitem = "<span class='new'>   New!!!</span>"
/*---Search Engine*/

function setsearchci(ci) {
  searchci = ci;
  window.set('searchci', ci);
  window.tabstyle();
}

function setsearchlan(lan, ci) {
  searchlan = lan;
  window.set('searchlan', lan);
  searchci = ci;
  window.tabstyle();
  if (document.getElementById('search').value) {
    window.checkaction(0);
  }
}

function tabstyle() {
  selectedtab = parseInt(searchlan) + parseInt(searchci) * 2;
  for (i = 0; i <= 3; i++) {
    id = "tab" + i
    if (i == selectedtab) {
      document.getElementById(id).style.background = "white";
      document.getElementById(id).style.color = "#333322";
      document.getElementById(id).style.opacity = "1";
    } else {
      document.getElementById(id).style.background = ""
      document.getElementById(id).style.color = "#aaaa99";
      document.getElementById(id).style.opacity = "0.8";
    }
  }
}

function checkaction(v) {
  if (document.getElementById('search').value) {
    if (v == 0) {
      if (searchci == 1) {
        $("input[name='ensearch']").attr("name", "");
        if (searchlan == 0) {
          document.searches.action = "https://www.google.com.hk/search";
        } else {
          document.searches.action = "https://www.google.com/search";
        }
      } else {
        ensearch.value = searchlan;
        document.searches.action = "https://cn.bing.com/search";
      }
    }
    if (v == 1) {
      document.searches.action = "https://scholar.google.com/scholar";
      $("input[name='q']").attr("name", "search");
      $("input[name='ensearch']").attr("name", "");
    }
    if (v == 2) {
      document.searches.action = "https://en.wikipedia.org/w/index.php";
      $("input[name='q']").attr("name", "search");
      $("input[name='ensearch']").attr("name", "");

    }
    if (v == 3) {
      document.searches.action = "https://www.wolframalpha.com/input/";
      $("input[name='q']").attr("name", "i");
      $("input[name='ensearch']").attr("name", "");
    }
    if (v == 4) {
      document.searches.action = "https://link.springer.com/search";
      $("input[name='q']").attr("name", "query");
      $("input[name='ensearch']").attr("name", "");
      $("input[name='x']").attr("name", "");
    }
    searches.submit();
  } else {
    if (v == 0) {
      if (localStorage.searchci == 1) {
        window.open("https://www.google.com/");
      } else {
        window.open("https://cn.bing.com/");
      }
    }
    if (v == 1) {
      window.open("https://scholar.google.com/");
    }
    if (v == 2) {
      window.open("https://en.wikipedia.org/")
    }
    if (v == 3) {
      window.open("https://www.wolframalpha.com/")
    }
    if (v == 4) {
      window.open("https://link.springer.com")
    }
  }
}
/*catogory display*/
function changecat(cat) {
  if (cat == "mp") {
    mp.style.display = "block";
    des.style.display = "none";
    ent.style.display = "none";
    tool.style.display = "none";
    mpi0.style.display = "none";
    mpi1.style.display = "block";
    desi0.style.display = "block";
    desi1.style.display = "none";
    enti0.style.display = "block";
    enti1.style.display = "none";
    tooli0.style.display = "block";
    tooli1.style.display = "none";
  }
  if (cat == "des") {
    mp.style.display = "none";
    des.style.display = "block";
    ent.style.display = "none";
    tool.style.display = "none";
    mpi0.style.display = "block";
    mpi1.style.display = "none";
    desi0.style.display = "none";
    desi1.style.display = "block";
    enti0.style.display = "block";
    enti1.style.display = "none";
    tooli0.style.display = "block";
    tooli1.style.display = "none";
  }
  if (cat == "ent") {
    mp.style.display = "none";
    des.style.display = "none";
    ent.style.display = "block";
    tool.style.display = "none";
    mpi0.style.display = "block";
    mpi1.style.display = "none";
    desi0.style.display = "block";
    desi1.style.display = "none";
    enti0.style.display = "none";
    enti1.style.display = "block";
    tooli0.style.display = "block";
    tooli1.style.display = "none";
  }
  if (cat == "tool") {
    mp.style.display = "none";
    des.style.display = "none";
    ent.style.display = "none";
    tool.style.display = "block";
    mpi0.style.display = "block";
    mpi1.style.display = "none";
    desi0.style.display = "block";
    desi1.style.display = "none";
    enti0.style.display = "block";
    enti1.style.display = "none";
    tooli0.style.display = "none";
    tooli1.style.display = "block";
  }
  $("div.float").fadeOut();
}

/*float window*/
$(function() {
  $(".push").click(function(e) {
    boxclick = 1;
    title = $(e.target).next().text();
    link = $(e.target).next().attr("href");
    window.additem(title, link);
    window.sideon();
  })
})

function show(x, y) {
  boxclick = y;
  $("div.float").fadeOut();
  boxid = x;
  id = "#box" + x;
  $(id).fadeIn();
}

/*localStorage*/
function set(x, y) {
  localStorage[x] = y;
}



function touchclick() {
  if (clickhover == 0) {
    window.sideoff();
    document.getElementById('changelink').style.display = "none";
  } else {
    clickhover = 0;
  }
  if (boxclick == 0) {
    $("div.float").fadeOut();
  } else {
    boxclick = 0;
  }

}
/*
$("#side").mouseleave(function() {
  window.sideoff();
});
*/
$("#pin").mouseover(function() {
  window.sideon(0);
});
$("#pin").click(function() {
  window.sideon(1);
});

function update() {
  for (var i = 1; i <= 4; i++) {
    a = "link" + i;
    b = a + "name";
    document.getElementById(a).href = localStorage[a];
    document.getElementById(a).innerHTML = localStorage[b];
  }
}

window.onload = function() {
  window.update();
  window.makelist();
  /*
  document.getElementById('helper').style.left = localStorage.left;
  document.getElementById('helper').style.top = localStorage.top;
  */
  searchlan = localStorage.searchlan;
  window.tabstyle();
  window.updateset();

};
/*sidemenu control*/
function sideon(v) {
  clickhover = v;
  var div = document.getElementById('side');
  div.style.left = '0px'
  div.style.transition = '0.3s ease-out';
  var pin = document.getElementById('pin');
  pin.style.left = '140px'
  pin.style.transition = '0.3s ease-out';
}

function gammago(v) {
  if (v == 0) {
    document.getElementById('helper').style.display = "none";
    localStorage.gamma = "none";
  } else {
    document.getElementById('helper').style.display = "block";
    localStorage.gamma = "block";
  }
}

function updateset() {
  if (localStorage.gamma == "none") {
    document.getElementById('helper').style.display = "none";
    document.getElementById('gamma0').checked = "true";
    document.getElementById('gamma1').checked = "";
  } else {
    document.getElementById('gamma1').checked = "true";
    document.getElementById('gamma0').checked = "";
  }
  searchci = localStorage.searchci;
  if (searchci == 0) {
    document.getElementById('searchci0').checked = "true";
    document.getElementById('searchci1').checked = "";
  } else {
    {
      document.getElementById('searchci1').checked = "true";
      document.getElementById('searchci0').checked = "";
    }

  }
}

function sideoff() {
  var div = document.getElementById('side');
  div.style.left = '-260px'
  div.style.transition = '0.3s ease-out';
  var pin = document.getElementById('pin');
  pin.style.left = '-120px'
  pin.style.transition = '0.3s ease-out';
}

function changelink() {
  var title = document.getElementById('text1').value;
  var link = document.getElementById('text2').value;
  if (link.substring(0, 4) !== "http") {
    link = "http://" + link
  }
  c = linktochange + "name";
  document.getElementById(linktochange).href = link;
  document.getElementById(linktochange).innerHTML = title;
  localStorage[linktochange] = link;
  localStorage[c] = title;
  document.getElementById('changelink').style.display = "none";
}



function showchangelink(id) {
  clickhover = 1;
  linktochange = id;
  document.getElementById("changelink").style.display = "block";
}

$('#helper').mouseover(function() {
  document.getElementById('dogx_0').style.display = 'none';
  document.getElementById('dogx_1').style.display = 'block';
  document.getElementById('chat').style.left = document.getElementById('helper').offsetLeft - 150 + 'px';
  document.getElementById('chat').style.top = document.getElementById('helper').offsetTop - 150 + 'px';
  document.getElementById('chat').style.display = 'block';
})
$('#helper').mousemove(function() {
  document.getElementById('chat').style.left = document.getElementById('helper').offsetLeft - 150 + 'px';
  document.getElementById('chat').style.top = document.getElementById('helper').offsetTop - 150 + 'px';
})
$('#helper').mouseleave(function() {
  document.getElementById('dogx_1').style.display = 'none';
  document.getElementById('dogx_0').style.display = 'block';
  document.getElementById('chat').style.display = 'none';
})
/*
$(function() {
  $('#helper').draggable();
})
$('#helper').click(function() {
  if (document.getElementById('helper').offsetLeft < 10) {
    document.getElementById('helper').style.left = '10px';
  }
  if (document.getElementById('helper').offsetLeft > document.getElementById('seticon').offsetLeft - 100) {
    document.getElementById('helper').style.left = document.getElementById('seticon').offsetLeft - 100;
  }
  if (document.getElementById('helper').offsetTop < 10) {
    document.getElementById('helper').style.top = '10px';
  }
  if (document.getElementById('helper').offsetTop > document.getElementById('bottom').offsetTop - 200) {
    document.getElementById('helper').style.top = document.getElementById('bottom').offsetTop - 200;
  }
  localStorage.left = document.getElementById('helper').style.left;
  localStorage.top = document.getElementById('helper').style.top;
  document.getElementById('chat').style.left = document.getElementById('helper').offsetLeft - 150 + 'px';
  document.getElementById('chat').style.top = document.getElementById('helper').offsetTop - 150 + 'px';
})
*/
function showadd() {
  document.getElementById('addingbox').style.display = "block";
  window.hidedelete();
}

function chooseall() {
  for (i = 1; i <= 20; i++) {
    choose = 'delete' + i;
    document.getElementById(choose).checked = "true";
  }
}

function clearall() {
  for (i = 1; i <= 20; i++) {
    choose = 'delete' + i;
    document.getElementById(choose).checked = "";
  }
}

function inverseall() {
  for (i = 1; i <= 20; i++) {
    choose = 'delete' + i;
    if (document.getElementById(choose).checked) {
      document.getElementById(choose).checked = "";
    } else {
      document.getElementById(choose).checked = "true";
    }

  }
}

function showdelete() {
  window.clearall();
  for (i = 1; i <= 20; i++) {
    item = 'item' + i;
    todelete = 'label' + i;
    if (localStorage[item]) {
      document.getElementById(todelete).style.display = "inline-block";
    }
  }
  document.getElementById('deletingbox').style.display = "block";
  document.getElementById('addingbox').style.display = "none";
}

function hideadd() {
  document.getElementById('addingbox').style.display = "none";
}

function hidedelete() {
  document.getElementById('deletingbox').style.display = "none";
  for (i = 1; i <= 20; i++) {
    label = 'label' + i;
    document.getElementById(label).style.display = "none";
  }
}

function inputadd() {
  var title = document.getElementById('text3').value;
  var link = document.getElementById('text4').value;
  window.additem(title, link);
  document.getElementById('text3').value = "";
  document.getElementById('text4').value = "";
}

function additem(title, link) {
  if (link.substring(0, 4) !== ("http" || "file")) {
    link = "http://" + link
  }
  for (i = 1; i <= 20; i++) {
    item = 'item' + i;
    content = 'content' + i;
    if (document.getElementById(item).innerHTML == "") {
      document.getElementById(item).innerHTML = title + Newitem;
      document.getElementById(item).href = link;
      localStorage[item] = title;
      localStorage[content] = link;
      i = 22;
    }
  }
  if (i == 21) {
    alert("The list is full, please delete some items.");
  }
}

function deleteitem() {
  for (i = 1; i <= 20; i++) {
    label = 'label' + i;
    todelete = 'delete' + i;
    m = document.getElementById(todelete).checked;
    document.getElementById(label).style.display = "none";
    if (m) {
      item = 'item' + i;
      content = 'content' + i;
      localStorage[item] = "";
      localStorage[content] = "";
      document.getElementById(item).innerHTML = "";
      document.getElementById(item).href = "";
    }
  }
  window.hidedelete();
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
