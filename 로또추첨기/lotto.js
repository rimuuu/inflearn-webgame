//임의의 숫자 45개 만들기. Array(45);

let 후보군 = Array(45)
  .fill()
  .map(function(요소, 인덱스) {
    return 인덱스 + 1;
  });
console.log(후보군);

let 셔플 = [];
while (후보군.length > 0) {
  let 랜덤수 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
  셔플.push(랜덤수);
}

let 보너스넘버 = 셔플[셔플.length - 1];
let 당첨숫자 = 셔플.slice(0, 6).sort(function(c, p) {
  return c - p;
});
console.log("당첨숫자", 당첨숫자, "보너스", 보너스넘버);
let 결과창 = document.getElementById("결과창");

function 공디자인(숫자, 결과창) {
  let 공 = document.createElement("div");
  공.textContent = 숫자;

  공.style.display = "inline-block";
  공.style.border = "0.5px solid grey";
  공.style.borderRadius = "20px";
  공.style.width = "30px";
  공.style.height = "30px";
  공.style.textAlign = "center";
  공.style.fontSize = "22px";
  공.style.marginRight = "10px";

  if (숫자 <= 10) {
    배경색 = "tomato";
  } else if (숫자 <= 20) {
    배경색 = "orange";
  } else if (숫자 <= 30) {
    배경색 = "yellow";
  } else if (숫자 <= 40) {
    배경색 = "skyBlue";
  } else {
    배경색 = "green";
  }
  공.style.backgroundColor = 배경색;
  결과창.appendChild(공);
}
//다른부분은 매개변수로, 겹치는 부분은 다 함수안에 집어넣기!

setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[0], 결과창);
}, 1000);

setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[1], 결과창);
}, 2000);
setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[2], 결과창);
}, 3000);

setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[3], 결과창);
}, 4000);
setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[4], 결과창);
}, 5000);
setTimeout(function 비동기콜백함수() {
  공디자인(당첨숫자[5], 결과창);
}, 8600);

setTimeout(function 비동기콜백함수() {
  let 칸 = document.getElementsByClassName("보너스")[0];
  공디자인(보너스넘버, 칸);
}, 7000);
