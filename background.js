const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//<img> 를 하나 생성
const image = document.createElement('img');

// <ima src = "" > -->img 폴더의 랜덤사진을 입력하고 싶을때
image.src = `img/${chosenImage}`;

document.body.appendChild(image);
