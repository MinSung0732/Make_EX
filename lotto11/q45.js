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

var b;

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

while(true){
    b=Math.floor(Math.random()*45)+1;

    if(b!=r[0] && b!=r[1] && b!=r[2] && b!=r[3] && b!=r[4] && b!=r[5]){
        document.write("보너스 번호: "+b);
        document.write("<br>");
        break;
    }
}


for(var i=0;i<=5;i=i+1){
    for(var j=0;j<=5;j=j+1){
        if(a[i]==r[j]){
            win = win + 1;
        }
    }
}

switch(win){
    case 3:
        document.write("맞춘갯수: "+win+"<br> 5등입니다.");
        break;
    case 4:
        document.write("맞춘갯수: "+win+"<br> 4등입니다.");
        break;
    case 5:
        document.write("맞춘갯수: "+win+"<br> 3등입니다.");
        break;
    case 6:
        document.write("맞춘갯수: "+win+"<br> 1등입니다.");
        break;
    default:
        document.write("맞춘갯수: "+win+"<br> 꽝입니다.");
        break;
}