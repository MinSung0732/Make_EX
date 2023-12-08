// 변수 지정 슬롯

var random = [];
var p = [];
var win = 0;
var j = 0;
var count = 0;
var s;
var str = "";

// 1~45 입력받을때까지 무한순환

while (true) {
    input = Number(prompt("1-45를 입력해주세요."));
    if (input >= 1 && input <= 45 && p.indexOf(input) < 0) // 1~45 입력 조건 + 중복방지 조건
    {
        p.push(input); // p 배열에 입력한 값을 넣어준다
        j = j + 1;
    }
    if (j == 6) { // 6번 모두 입력햇을때 반복문 중지
        break;
    }
}

// 랜덤 로또번호 값 구하기

while (true) {

    var number = Math.floor(Math.random() * 45) + 1; 

    if (random.indexOf(number) < 0) // 중복방지 조건 1~45
    {
        random.push(number);
        count = count + 1;
    }
    if (count == 6) {
        break;
    }
}

// 당첨갯수 집계

for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
        if (random[i] == p[j]) {
            win++;
        }
    }
}

// 결과값 출력

window.onload = function () {

    s = document.getElementById("main");

    var resultHTML = "복권 당첨번호: ";
    for(var i=0; i<random.length; i++) // 내가 입력한 번호랑 당첨번호 확인후 같으면 색상 변경
    {
        if(p.includes(random[i])){
            resultHTML += "<span class='matched'>" + random[i] + " </span>";
        } else {
            resultHTML += random[i] + " ";
        }
    }

    resultHTML += "<br>나의 복권번호: ";
    for(var i=0; i<p.length; i++){
        if (random.includes(p[i])){
            resultHTML+="<span class='matched'>"+p[i]+" </span>";
        } else{
            resultHTML+=p[i]+" ";
        }

    }

    resultHTML +="<br>당첨갯수: "+win; // resultHTML 변수에 위쪽부터 모두 입력

    s.innerHTML=resultHTML; // 입력후 출력
}