const selectElement = function (element) {
    return document.querySelector(element)
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

//menuToggler.addEventListener('click', function() {
  //  body.classList.toggle('open');
//})

//POPUP WINDOW STUFF
// Get the popup
var popup1 = document.getElementById("box-1");
var popup2 = document.getElementById("box-2");
var popup3 = document.getElementById("box-3");
var popup4 = document.getElementById("box-4");
var popup5 = document.getElementById("box-5");
var popup6 = document.getElementById("box-6");
var popup7 = document.getElementById("box-7");
var popup8 = document.getElementById("box-8");


// Get the button that opens the popup
var btn1 = document.getElementById("project-btn1");
var btn2 = document.getElementById("project-btn2");
var btn3 = document.getElementById("project-btn3");
var btn4 = document.getElementById("project-btn4");
var btn5 = document.getElementById("project-btn5");
var btn6 = document.getElementById("project-btn6");
var btn7 = document.getElementById("project-btn7");
var btn8 = document.getElementById("project-btn8");

// Get the <span> element that closes the popup
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];


// When the user clicks on the button, open the popup
btn1.onclick = function() {
    popup1.style.display = "block";
}
btn2.onclick = function() {
    popup2.style.display = "block";
  }
btn3.onclick = function() {
    popup3.style.display = "block";
}
btn4.onclick = function() {
    popup4.style.display = "block";
}
btn5.onclick = function() {
    popup5.style.display = "block";
}
btn6.onclick = function() {
    popup6.style.display = "block";
}
btn7.onclick = function() {
    popup7.style.display = "block";
}
btn8.onclick = function() {
    popup8.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span1.onclick = function() {
    popup1.style.display = "none";
}
span2.onclick = function() {
    popup2.style.display = "none";
}
span3.onclick = function() {
    popup3.style.display = "none";
}
span4.onclick = function() {
    popup4.style.display = "none";
}
span5.onclick = function() {
    popup5.style.display = "none";
}
span6.onclick = function() {
    popup6.style.display = "none";
}
span7.onclick = function() {
    popup7.style.display = "none";
}
span8.onclick = function() {
    popup8.style.display = "none";
}



// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
  if (event.target == popup2) {
    popup2.style.display = "none";
  }
  if (event.target == popup3) {
    popup3.style.display = "none";
  }
  if (event.target == popup4) {
    popup4.style.display = "none";
  }
  if (event.target == popup5) {
    popup5.style.display = "none";
  }
  if (event.target == popup6) {
    popup6.style.display = "none";
  }
  if (event.target == popup7) {
    popup7.style.display = "none";
  }
  if (event.target == popup8) {
    popup8.style.display = "none";
  }
}
//end of POPUP WINDOW STUFF
