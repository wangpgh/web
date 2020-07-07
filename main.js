// let tit = document.querySelector('h3')
// console.log(tit);

// tit.textContent = 'Hello World!'

function multiply(num1, num2) {
  let result = num1 + num2;
  return result;
}

// 获取dom元素添加点击事件
// let lj = document.querySelector('.lj')
// console.log(lj);
// lj.onclick = function() {
//     alert('别戳我')
// }

document.querySelector('.lj').onclick = function() {
    alert('别戳我')
}


let img = document.querySelector('img')
img.onclick = function() {
    let mySrc = img.getAttribute('src')
    console.log(mySrc);
    if (mySrc === './layer_bg.png') {
        img.setAttribute('src', './logo.png')
    } else {
        img.setAttribute('src', './layer_bg.png')
    }
}

let button = document.querySelector('button')
let tit = document.querySelector('h3')

function setUsername() {
    let myName = prompt('请输入你的名字')
    if (!myName || myName === null) {
        setUsername()
    } else {
        localStorage.setItem('name', myName)
        tit.innerText = 'Hello World'    + myName
    }
}

button.onclick = function() {
    setUsername()
}