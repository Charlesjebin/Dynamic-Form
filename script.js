var btn=document.querySelector("#btn");
btn.onclick=function(){
    var div=document.createElement("div");
    div.innerHTML=generateit();
    document.getElementById("box").appendChild(div);
}
var res=document.querySelector("#btnresult");
res.onclick=function(){
    var x=document.querySelectorAll(".txt");
    var tot='';
    for(i=0;i<x.length;i++)
    {
        tot=tot+x[i].value+"\n";      
    }
    alert(tot);
}

function generateit(){
    return"<input type='text' class='txt'><button onclick='removeit(this)'>Remove</button>";
}
function removeit(btn){
    document.getElementById("box").removeChild(btn.parentNode);
}