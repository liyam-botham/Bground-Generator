var _ = require('lodash');

var css1=document.getElementById("ipt1");
var css2=document.getElementById("ipt2");
var color1  =document.querySelector("h3");
var body =document.getElementById("grad");

function setGrad()
{
    body.style.background="linear-gradient(to right,"
    + css1.value
    +","
    +css2.value
    +")";
    color1.textContent=body.style.background+";";
}
css1.addEventListener("input",setGrad);
css2.addEventListener("input",setGrad);