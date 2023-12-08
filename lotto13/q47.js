comLotto = new Array(6);
userLotto = [1,2,3,4,5,6];

for(var i=0; i<comLotto.length; i++){
    comLotto[i]=Math.floor(Math.random()*45+1);
    dw(comLotto[i]);
    hr();
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
