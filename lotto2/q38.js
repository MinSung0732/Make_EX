var computer;
var a1 = 0;
var a2 = 1;
var a3 = 2;
var a4 = 3;
var a5 = 4;
var a6 = 5;

var win = 0;

var r1 = Math.floor(Math.random()*45)+1;
document.write(r1);
document.write("<br>");

var r2 = Math.floor(Math.random()*45)+1;
document.write(r2);
document.write("<br>");

var r3 = Math.floor(Math.random()*45)+1;
document.write(r3);
document.write("<br>");

var r4 = Math.floor(Math.random()*45)+1;
document.write(r4);
document.write("<br>");

var r5 = Math.floor(Math.random()*45)+1;
document.write(r5);
document.write("<br>");

var r6 = Math.floor(Math.random()*45)+1;
document.write(r6);
document.write("<br>");

// 1번자리

if(a1==r1){
    win = win+1;
}
if(a1==r2){
    win = win+1;
}
if(a1==r3){
    win = win+1;
}
if(a1==r4){
    win = win+1;
}
if(a1==r5){
    win = win+1;
}
if(a1==r6){
    win = win+1;
}
// 2번자리
if(a2==r1){
    win = win+1;
}
if(a2==r2){
    win = win+1;
}
if(a2==r3){
    win = win+1;
}
if(a2==r4){
    win = win+1;
}
if(a2==r5){
    win = win+1;
}
if(a2==r6){
    win = win+1;
}
// 3번자리
if(a3==r1){
    win = win+1;
}
if(a3==r2){
    win = win+1;
}
if(a3==r3){
    win = win+1;
}
if(a3==r4){
    win = win+1;
}
if(a3==r5){
    win = win+1;
}
if(a3==r6){
    win = win+1;
}
// 4번자리
if(a4==r1){
    win = win+1;
}
if(a4==r2){
    win = win+1;
}
if(a4==r3){
    win = win+1;
}
if(a4==r4){
    win = win+1;
}
if(a4==r5){
    win = win+1;
}
if(a4==r6){
    win = win+1;
}
// 5번자리
if(a5==r1){
    win = win+1;
}
if(a5==r2){
    win = win+1;
}
if(a5==r3){
    win = win+1;
}
if(a5==r4){
    win = win+1;
}
if(a5==r5){
    win = win+1;
}
if(a5==r6){
    win = win+1;
}
// 6번자리
if(a6==r1){
    win = win+1;
}
if(a6==r2){
    win = win+1;
}
if(a6==r3){
    win = win+1;
}
if(a6==r4){
    win = win+1;
}
if(a6==r5){
    win = win+1;
}
if(a6==r6){
    win = win+1;
}

document.write("맞춘갯수: "+win);
