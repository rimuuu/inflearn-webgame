/* 이 게임 알고리즘의 핵심은
 1. 클릭했을때 몇줄 몇칸인지 값을 받아내기
 2. 칸이 채워져 있는가 확인 
 3. 빈칸일 경우 X표 한 후 턴 
 4. 그 안에 세칸이 모두 채워졌는지 확인하는 조건문 넣기
  1)가로줄 확인 2)세로줄 확인 3)대각선줄 확인
 그래서 오엑스표를 치면서 동시에 빙고여부 검사가 돌아감 
  */

let 바디 = document.body;
let 테이블 = document.createElement("table");
let 줄들 = [];
let 칸들 = [];
let 턴 = "X";
let 결과 = document.createElement("h1");

let 비동기콜백 = function(이벤트) {
  //코드를 덜 복잡하게 만들기 위해 변수에다가 함수를 기억하게 할 수 있다.
  //   console.log(이벤트.target);
  //   console.log(이벤트.target.parentNode);
  //   console.log(이벤트.target.parentNode.parentNode);

  let 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  console.log("몇줄", 몇줄);
  let 몇칸 = 칸들[몇줄].indexOf(이벤트.target); //*어려움*
  console.log("몇칸", 몇칸);

  /* e.target는 내가 클릭한 태그에 대해 위치를 알려준다.
  e.target.parentNode는 클릭한 태그의 부모태그 위치를 알려준다. 
  클릭이라는 이벤트에 배열을 걸어놨기 때문에 가능한 액션.
  */

  if (칸들[몇줄][몇칸].textContent !== "") {
    // input 값은 value 태그 안 글자는 textContent
    // 칸이 이미 채워져 있는가?
    console.log("빈칸이 아닙니다");
  } else {
    console.log("빈칸입니다");
    칸들[몇줄][몇칸].textContent = 턴;

    //세칸 다 채워졌나 확인하기
    let 빙고 = false;
    //가로줄 확인
    if (
      칸들[몇줄][0].textContent === 턴 &&
      칸들[몇줄][1].textContent === 턴 &&
      칸들[몇줄][2].textContent === 턴
    ) {
      빙고 = true;
    }
    // 세로줄 확인
    if (
      칸들[0][몇칸].textContent === 턴 &&
      칸들[1][몇칸].textContent === 턴 &&
      칸들[2][몇칸].textContent === 턴
    ) {
      빙고 = true;
    }
    // 대각선 확인 : Math.abs는 숫자의 절댓값을 준다. (마이너스 없애줌)
    if (
      칸들[0][2].textContent === 턴 &&
      칸들[1][1].textContent === 턴 &&
      칸들[2][0].textContent === 턴
    ) {
      빙고 = true;
    }

    if (
      칸들[0][0].textContent === 턴 &&
      칸들[1][1].textContent === 턴 &&
      칸들[2][2].textContent === 턴
    ) {
      빙고 = true;
    }

    // 빙고가 성립한다면
    if (빙고) {
      결과.textContent = 턴 + "님이 승리!";
      //forEach문은 반복문을 수행한다. for문보다 직관적이고 간편
      칸들.forEach(function(줄) {
        줄.forEach(function(칸) {
          칸.textContent = "";
        });
      });
    } else {
      if (턴 === "X") {
        턴 = "O";
      } else {
        턴 = "X";
      }
    }
  }
};

for (let i = 1; i <= 3; i += 1) {
  let 줄 = document.createElement("tr");
  줄들.push(줄); //셀 하나마다 줄,칸 이름을 주기위해 추가함
  칸들.push([]); //줄 하나 생성될때마다 배열 추가. 총 3개의 빈 배열 생성됨
  for (let j = 1; j <= 3; j += 1) {
    let 칸 = document.createElement("td");
    칸.addEventListener("click", 비동기콜백);
    칸들[i - 1].push(칸); //위에서 생성한 배열에 각각 세개의 칸 생성 *어려움*
    줄.appendChild(칸);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log("줄들", 줄들, "칸들", 칸들);
바디.append(결과);

/* 이차원 배열을 통해 줄과 칸에 대한 값을 할당할 수 있다. 
웹게임 구현할때 핵심적인 부분. */
