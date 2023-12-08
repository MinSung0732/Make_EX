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

// var r1;
// var r2;
// var r3;
// var r4;
// var r5;
// var r6;

var r = Array(0,0,0,0,0,0);

r[0] = Math.floor(Math.random()*45)+1;
document.write(r[0]);
document.write("<br>");

while(true){
    r[1] = Math.floor(Math.random()*45)+1;

    if(r[1]!=r[0]){
        document.write(r[1]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[2] = Math.floor(Math.random()*45)+1;

    if(r[2]!=r[0] && r[2]!=r[1]){
        document.write(r[2]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[3] = Math.floor(Math.random()*45)+1;

    if(r[3]!=r[0] && r[3]!=r[1] && r[3]!=r[2]){
        document.write(r[3]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[4] = Math.floor(Math.random()*45)+1;

    if(r[4]!=r[0] && r[4]!=r[1] && r[4]!=r[2] && r[4]!=r[3]){
        document.write(r[4]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[5] = Math.floor(Math.random()*45)+1;

    if(r[5]!=r[0] && r[5]!=r[1] && r[5]!=r[2] && r[5]!=r[3] && r[5]!=r[4]){
        document.write(r[5]);
        document.write("<br>");
        break;
    }
}




// 1번자리

if(a[1]==r[0]){
    win = win+1;
}
if(a[1]==r[1]){
    win = win+1;
}
if(a[1]==r[2]){
    win = win+1;
}
if(a[1]==r[3]){
    win = win+1;
}
if(a[1]==r[4]){
    win = win+1;
}
if(a[1]==r[5]){
    win = win+1;
}
// 2번자리
if(a[2]==r[0]){
    win = win+1;
}
if(a[2]==r[1]){
    win = win+1;
}
if(a[2]==r[2]){
    win = win+1;
}
if(a[2]==r[3]){
    win = win+1;
}
if(a[2]==r[4]){
    win = win+1;
}
if(a[2]==r[5]){
    win = win+1;
}
// 3번자리
if(a[3]==r[0]){
    win = win+1;
}
if(a[3]==r[1]){
    win = win+1;
}
if(a[3]==r[2]){
    win = win+1;
}
if(a[3]==r[3]){
    win = win+1;
}
if(a[3]==r[4]){
    win = win+1;
}
if(a[3]==r[5]){
    win = win+1;
}
// 4번자리
if(a[4]==r[0]){
    win = win+1;
}
if(a[4]==r[1]){
    win = win+1;
}
if(a[4]==r[2]){
    win = win+1;
}
if(a[4]==r[3]){
    win = win+1;
}
if(a[4]==r[4]){
    win = win+1;
}
if(a[4]==r[5]){
    win = win+1;
}
// 5번자리
if(a[5]==r[0]){
    win = win+1;
}
if(a[5]==r[1]){
    win = win+1;
}
if(a[5]==r[2]){
    win = win+1;
}
if(a[5]==r[3]){
    win = win+1;
}
if(a[5]==r[4]){
    win = win+1;
}
if(a[5]==r[5]){
    win = win+1;
}
// 6번자리
if(a[6]==r[0]){
    win = win+1;
}
if(a[6]==r[1]){
    win = win+1;
}
if(a[6]==r[2]){
    win = win+1;
}
if(a[6]==r[3]){
    win = win+1;
}
if(a[6]==r[4]){
    win = win+1;
}
if(a[6]==r[5]){
    win = win+1;
}

document.write("맞춘갯수: "+win);
