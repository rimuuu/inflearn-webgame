let 숫자1 = Math.ceil(Math.random() * 9); //Math.ceil()은 올림 함수
let 숫자2 = Math.ceil(Math.random() * 9);
let 결과 = 숫자1 * 숫자2;

let 바디 = document.body;
let 질문 = document.createElement("div");
질문.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
document.body.append(질문);

let 폼 = document.createElement("form");
document.body.append(폼);
let 입력창 = document.createElement("input");
폼.append(입력창);
let 버튼 = document.createElement("button");
버튼.textContent = "입력!";
폼.append(버튼);

let 결과창 = document.createElement("div");
document.body.append(결과창);

폼.addEventListener("submit", function 콜백함수(이벤트) {
  이벤트.preventDefault();
  //이벤트리스너 함수를 이용한 반복문. 이벤트리스너를 항상 반복문으로 할수있는건 아님

  if (결과 === Number(입력창.value)) {
    //input type="text" 기 때문에 문자로 인식되어 넘버로 감싸줘야함.
    결과창.textContent = "딩동댕";

    //정답이면 새로운 질문을 제시해야한다.
    숫자1 = Math.ceil(Math.random() * 9);
    숫자2 = Math.ceil(Math.random() * 9);
    결과 = 숫자1 * 숫자2;
    질문.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";

    입력창.value = "";
    입력창.focus(); //커서가 자동으로 가게 만드는 메서드
  } else {
    결과창.textContent = "땡";
    입력창.value = "";
    입력창.focus();
  }
});

/* 이벤트리스너는 위에서 아래로 순서대로 실행되는 것이 아니라, 
콜백함수를 기억하고 있다가 사용자가 submit하는 순간 실행된다.
이렇게 코드상의 순서대로 실행되지 않는 것을 '비동기'라고 한다. 
위에서 아래로 순서대로 실행되는것은 '동기'.
비동기는 언제 실행될지 모르기 때문에 대비를 해놔야한다.  */

/* 
 while (true) {
  let 숫자1 = Math.ceil(Math.random() * 9);
  let 숫자2 = Math.ceil(Math.random() * 9);
  let 결과 = 숫자1 * 숫자2;
  let 조건 = true;
  while (조건) {
    let 답 = prompt(String(숫자1) + "곱하기" + String(숫자2) + "는?");
    if (결과 === Number(답)) {
      alert("딩동댕");
      조건 = false;
    } else {
      alert("땡");
    }
  }
}

*/
