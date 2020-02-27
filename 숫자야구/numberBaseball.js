let 바디 = document.body;
let 숫자후보;
let 숫자배열;

function 숫자뽑기() {
  숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  숫자배열 = [];
  for (let i = 0; i < 4; i += 1) {
    let 뽑은숫자 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    숫자배열.push(뽑은숫자);
  }
}
/* splice(위치, 개수)는 원하는 위치부터 원하는 개수의 값을 뽑아준다.
여기서 주의할 점은 배열의 위치는 0부터 세기 때문에 0 ~ 8 사이의 값을 필요로하고
하나의 값을 뽑으면 원래 배열에서 그 값이 사라지기 때문에 범위역시 1씩 줄여줘야한다.
그렇지않으면 undefined를 뽑아내는 에러 발생.
마지막으로 뽑아낸 값은 배열로 나타나기때문에 [0]을 붙여 첫번째 값을 뽑아줘야한다.
*/

숫자뽑기();
console.log(숫자배열);

let 결과 = document.createElement("h1");
바디.append(결과);
let 폼 = document.createElement("form");
document.body.append(폼);
let 입력창 = document.createElement("input");
폼.append(입력창);
입력창.maxLength = 4;
let 버튼 = document.createElement("button");
버튼.textContent = "입력";
폼.append(버튼);

let 틀린횟수 = 0;
addEventListener("submit", function 비동기(이벤트) {
  //엔터를 쳤을때
  이벤트.preventDefault();
  let 답 = 입력창.value;
  if (답 === 숫자배열.join("")) {
    결과.textContent = "홈런입니다!";
    입력창.value = "";
    입력창.focus();
    숫자뽑기();
    console.log(숫자배열);
    틀린횟수 = 0;
  } else {
    //답이 틀리면
    let 답배열 = 답.split("");
    let 스트라이크 = 0;
    let 볼 = 0;
    틀린횟수 += 1;
    console.log("현재 틀린횟수는" + 틀린횟수 + "입니다.");

    if (틀린횟수 > 4) {
      //5번 넘게 틀린경우
      결과.textContent =
        "실패했습니다. 답은" + 숫자배열.join("") + " 였습니다.";
      입력창.value = "";
      입력창.focus();
      숫자뽑기();
      틀린횟수 = 0;
    } else {
      //5번 미만으로 틀린 경우

      for (let i = 0; i < 4; i += 1) {
        let 뽑은숫자 = 숫자후보.splice(
          Math.floor(Math.random() * (9 - i)),
          1
        )[0];
        숫자배열.push(뽑은숫자);
      }

      for (let i = 0; i < 4; i += 1) {
        if (Number(답배열[i]) === 숫자배열[i]) {
          //같은자리의 같은 숫자인지 확인
          스트라이크++;
        } else if (숫자배열.indexOf(Number(답배열[i])) > -1) {
          /*같은자리는 아니지만 숫자가 겹치는지 확인.
        indexOf는 특정 배열에서 내가 찾고자하는 숫자,문자의 위치를 알려준다.
        없을 시 -1이 나옴. 즉 -1보다 큰 수가 나오면 내가 원하는 숫자가 있다는 의미 */
          볼++;
        }
      }
      결과.textContent = 스트라이크 + "스트라이크" + 볼 + "볼입니다.";
      입력창.value = "";
      입력창.focus();
    }
  }
});
