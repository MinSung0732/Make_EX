var computer;
// var a1 = 0;
// var a2 = 1;
// var a3 = 2;
// var a4 = 3;
// var a5 = 4;
// var a6 = 5;
var win = 0;

var a = Array(0,0,0,0,0,0);
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;
a[4] = 5;
a[5] = 6;

var r1;
var r2;
var r3;
var r4;
var r5;
var r6;

r1 = Math.floor(Math.random()*45)+1;
document.write(r1);
document.write("<br>");

while(true){
    r2 = Math.floor(Math.random()*45)+1;

    if(r1!=r2){
        document.write(r2);
        document.write("<br>");
        break;
    }
}

while(true){
    r3 = Math.floor(Math.random()*45)+1;

    if(r3!=r1 && r3!=r2){
        document.write(r3);
        document.write("<br>");
        break;
    }
}

while(true){
    r4 = Math.floor(Math.random()*45)+1;

    if(r4!=r1 && r4!=r2 && r4!=r3){
        document.write(r4);
        document.write("<br>");
        break;
    }
}

while(true){
    r5 = Math.floor(Math.random()*45)+1;

    if(r5!=r1 && r5!=r2 && r5!=r3 && r5!=r4){
        document.write(r5);
        document.write("<br>");
        break;
    }
}

while(true){
    r6 = Math.floor(Math.random()*45)+1;

    if(r6!=r1 && r6!=r2 && r6!=r3 && r6!=r4 && r6!=r5){
        document.write(r6);
        document.write("<br>");
        break;
    }
}




// 1번자리

if(a[1]==r1){
    win = win+1;
}
if(a[1]==r2){
    win = win+1;
}
if(a[1]==r3){
    win = win+1;
}
if(a[1]==r4){
    win = win+1;
}
if(a[1]==r5){
    win = win+1;
}
if(a[1]==r6){
    win = win+1;
}
// 2번자리
if(a[2]==r1){
    win = win+1;
}
if(a[2]==r2){
    win = win+1;
}
if(a[2]==r3){
    win = win+1;
}
if(a[2]==r4){
    win = win+1;
}
if(a[2]==r5){
    win = win+1;
}
if(a[2]==r6){
    win = win+1;
}
// 3번자리
if(a[3]==r1){
    win = win+1;
}
if(a[3]==r2){
    win = win+1;
}
if(a[3]==r3){
    win = win+1;
}
if(a[3]==r4){
    win = win+1;
}
if(a[3]==r5){
    win = win+1;
}
if(a[3]==r6){
    win = win+1;
}
// 4번자리
if(a[4]==r1){
    win = win+1;
}
if(a[4]==r2){
    win = win+1;
}
if(a[4]==r3){
    win = win+1;
}
if(a[4]==r4){
    win = win+1;
}
if(a[4]==r5){
    win = win+1;
}
if(a[4]==r6){
    win = win+1;
}
// 5번자리
if(a[5]==r1){
    win = win+1;
}
if(a[5]==r2){
    win = win+1;
}
if(a[5]==r3){
    win = win+1;
}
if(a[5]==r4){
    win = win+1;
}
if(a[5]==r5){
    win = win+1;
}
if(a[5]==r6){
    win = win+1;
}
// 6번자리
if(a[6]==r1){
    win = win+1;
}
if(a[6]==r2){
    win = win+1;
}
if(a[6]==r3){
    win = win+1;
}
if(a[6]==r4){
    win = win+1;
}
if(a[6]==r5){
    win = win+1;
}
if(a[6]==r6){
    win = win+1;
}

document.write("맞춘갯수: "+win);
