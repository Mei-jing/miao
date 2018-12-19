var x = +prompt("请输入重量")
var a = prompt("是否加急 y or n")

var b = Math.ceil((x-1000)/500)*4
var c = b +8
var d = b +5 +8

if (x<1000 && a==="n"){
    console.log("8")
}else if (x>1000 && a==="n"){
    console.log(c)
} else if (x>1000 && a==="y"){
    console .log(d)
}






