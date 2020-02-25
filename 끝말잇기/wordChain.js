let 바디 = document.body;
let 단어 = document.createElement("div");
//단어라는 div를 생성
단어.textContent = "국밥";
document.body.append(단어);
/*태그를 생성할때마다 태그를 기억만하지말고 화면에도 표시해줘. 
바디안에 추가해줘라고 명령해야함 */

let 폼 = document.createElement("form");
document.body.append(폼);
let 입력창 = document.createElement("input");
폼.append(입력창);
let 버튼 = document.createElement("button");
버튼.textContent = "입력!";
폼.append(버튼);
let 결과창 = document.createElement("div");
document.body.append(결과창);

/*단어를 입력하고 다음으로 넘어갈때 클릭이 아닌 엔터 적용하기;
이를 위해 필요한게 form 태그인데, 
폼을 생성한 후 입력창과 버튼을 바디가 아닌 폼 안에 넣어줘야함. */

폼.addEventListener("submit", function 콜백함수(이벤트) {
  이벤트.preventDefault();
  /*폼은 입력된내용을 전달, 새로고침하는 이벤트가 디폴트로 있음. 
  이걸 지우기위해  preventDefalult() 메서드 사용 */
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = "딩동댕";
    단어.textContent = 입력창.value;
    입력창.value = "";
    입력창.focus(); //커서가 자동으로 가게 만드는 메서드
  } else {
    결과창.textContent = "땡";
    입력창.value = "";
    입력창.focus();
  }
}); //input객체는 .value 로 값을 부른다! textContent와 매우 헷갈림

/* let word = "국밥";
while (true) {
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    alert("딩동댕");
    word = answer;
  } else {
    alert("땡!");
  }
}
*/

/* 
이 while문을 for문으로 바꿔보자.
for문을 만들때 항상 기억해야할 것은 
처음 ; 중간; 끝
위의 반복문은 항상 true인 상태로 반복되기 때문에 끝은 생략하면 된다. 

for( let = word ; true ;  ) { 
let answer = prompt(word)
if ( word[word.length - 1] === answer[0] ) {
 word = answer; 
alert(‘딩동댕’) 
} else {
 alert (‘땡’) 
 }
}
*/
