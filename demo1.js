var a = 100;
var b = "Nhat";
var c = true;
var d = { ho: "Nguyen", ten: "Nhat" };
var e = 101;
{
    var f = 99;
    //let f:number = 99;(k tìm thấy)
}
//let bảo mật k toàn cục như var
if (c) {
    console.log("True");
} else {
    console.log("False");
}
console.log("-----------FOR---------");
for (var i = 0; i < 5; i++) {
    console.log("FOR" + i);
}
