comLotto = new Array(6);
userLotto = [1,2,3,4,5,6];


comLotto[0]=Math.floor(Math.random()*45+1);
dw("첫번째 번호: "+comLotto[0]);
hr();

while(true){
    comLotto[1]=Math.floor(Math.random()*45+1);
    if(comLotto[1] != comLotto[0]){
        dw("두번째 번호: "+comLotto[1]);
        hr();
        break
    }
}

while(true){
    comLotto[2]=Math.floor(Math.random()*45+1);
    if(comLotto[2] != comLotto[0] && comLotto[2] != comLotto[1]){
        dw("세번째 번호: "+comLotto[2]);
        hr();
        break
    }
}

while(true){
    comLotto[3]=Math.floor(Math.random()*45+1);
    if(comLotto[3] != comLotto[0] && comLotto[3] != comLotto[1] && comLotto[3] != comLotto[2]){
        dw("네번째 번호: "+comLotto[3]);
        hr();
        break
    }
}

while(true){
    comLotto[4]=Math.floor(Math.random()*45+1);
    if(comLotto[4] != comLotto[0] && comLotto[4] != comLotto[1] && comLotto[4] != comLotto[2] && comLotto[4] != comLotto[3]){
        dw("다섯번째 번호: "+comLotto[4]);
        hr();
        break
    }
}

while(true){
    comLotto[5]=Math.floor(Math.random()*45+1);
    if(comLotto[5] != comLotto[0] && comLotto[5] != comLotto[1] && comLotto[5] != comLotto[2] && comLotto[5] != comLotto[3] && comLotto[5] != comLotto[4]){
        dw("여섯번째 번호: "+comLotto[5]);
        hr();
        break
    }
}

var win = 0;
for(var i=0; i<userLotto.length; i++){
    for(var j=0; j<comLotto.length; j++){
        if(userLotto[i] == comLotto[j]){
            dw("하나 당첨");
            hr();
            win++;
        }
    }
}
dw("총 당첨된 갯수: " + win);

