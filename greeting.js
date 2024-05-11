//log는 console에 출력하는 역할을함.

//variable 만들기 var : 어떤 규칙도 가지지 않음. 최근에는 사용 x  const: 상수 let : 변수

//boolean : true,false  null : 값이 없다. 아무 값도 없는 경우, undefined : variable 은  있으나 값은 없음.

// array [] push, pop 기능

//객체 만들기 키:값으로 이루어짐

//function 함수 만들기

//계산기 만들기

//prompt 로 받은 값은 string 이 된다. num으로 바꿔주어야함.

//parseInt() 를 통해 string을 number로 바꿔줌. 만약 num 이아닌경우 Nan을 반환한다.

// const age = parseInt(prompt('How old are you?'));
// document.getElementByClassName or getElementById or
// find only one element from the section ,querySelector :: use like a css selector
// if you want to take all element? using querySelectorAll
//if you want to get a document from id? write like this !! document.querySelector("#hello")
// document 의 내용을 보고싶으면 console.log or console.dir 를 한다. 둘의 차이는?

//classsList 는 class list들을 보여준다. classList.contains 와 .remove를 사용하자

//위와 같이 구성하는 방식의 좋은 점은 다른 class 이름들을 유지한 채로 사용 할 수 있다.
//toggle 은 해당하는 값이 있으면 제거하고 있으면 추가한다.

//what is event? 특정 행동을 취함
// event를 하기를 기다렸다가 event 발생시 function을 호출함.
//addEventListener!!
//원하는 event 찾는 법? 구글에 ex) h1 html event mdn 이라고 적는다. 혹은 console.dir()를 사용해서 확인하기

const loginForm = document.querySelector('#login-form'); //looking the form
const loginInput = document.querySelector('#login-form input'); //find the element input
const greeting = document.querySelector('#greeting');

const HIDDDEN_CLASSNAME = 'hidden'; //hidden style css
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  if (localStorage.getItem(USERNAME_KEY)) event.preventDefault(); //브라우저의 기본동작을 막아줌. --form 이 새로고침하는 동작을 막아줌.
  loginForm.classList.add(HIDDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //local storage 에 username : dfdfdf 저장
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings();
}
