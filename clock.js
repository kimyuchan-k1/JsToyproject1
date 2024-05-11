const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); //5000 ms 마다 sayHello function 적용

getClock();
setInterval(getClock, 1000); //5000ms 뒤에 sayHello function 적용

// "1".padStart(2,"0") -> string을 2글자로 하고 2자가 아니라면 앞을 0으로 채운다. <-> 반대 : padEnd()
//text 에는 padStart를 사용할 수 없다.
