var modal1 = document.getElementById('myModalFirst'),
    modal2 = document.getElementById('myModalSecond'),
    modal3 = document.getElementById('myModalThird');

var btn1 = document.getElementById("myBtnFirst"),
    btn2 = document.getElementById("myBtnSecond"),
    btn3 = document.getElementById("myBtnThird");

var span1 = document.getElementsByClassName("close")[0],
    span2 = document.getElementsByClassName("close")[1],
    span3 = document.getElementsByClassName("close")[2];

btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    } 
}