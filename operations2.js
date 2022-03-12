function subtraction(){
    let o1=parseInt(document.getElementById("o1").value);
    let o2=parseInt(document.getElementById("o2").value);
    let ded=o1-o2;
    document.getElementById("rez").innerHTML=ded;
}
function division(){
    var d1=parseInt(document.getElementById("d1").value);
    var d2=parseInt(document.getElementById("d2").value);
    var division = d1 / d2;
    document.getElementById("rez2").innerHTML=division;
}